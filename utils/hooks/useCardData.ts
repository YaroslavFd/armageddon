import type { SwitchButtonType } from '@/components/AsteroidsList';
import type { DiameterType } from '@/components/AsteroidsList/Card';

import { findClosestDate } from '../helpers/findClosestDate';
import { formatDate } from '../helpers/formatDate';
import { formatOrbits } from '../helpers/formatOrbits';

interface CardDataProps {
  diameter: DiameterType;
  closeApproachDatum: CloseApproachDatum[];
  activeBtn: SwitchButtonType;
}

export const useCardData = ({ diameter, closeApproachDatum, activeBtn }: CardDataProps) => {
  const diameterNum = Math.floor(
    (diameter.estimated_diameter_min + diameter.estimated_diameter_max) / 2
  );

  const closestDateObject = findClosestDate(closeApproachDatum);
  const formattedDate = closestDateObject
    ? formatDate(String(closestDateObject.close_approach_date))
    : 'Дата неизвестна';

  const kilometers = closestDateObject?.miss_distance.kilometers;
  const lunar = closestDateObject?.miss_distance.lunar;

  let distance;

  if (activeBtn === 'km') {
    if (kilometers !== undefined) {
      distance = `${Math.round(Number(kilometers)).toLocaleString('ru-RU')} км`;
    } else {
      distance = 'N/A';
    }
  } else if (lunar !== undefined) {
    distance = formatOrbits(Math.round(Number(lunar)));
  } else {
    distance = 'N/A';
  }

  return { diameterNum, distance, formattedDate };
};
