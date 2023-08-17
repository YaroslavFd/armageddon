export const findClosestDate = (datesArray: CloseApproachDatum[]) => {
  const currentDate = new Date();
  let closestDateObject: CloseApproachDatum | null = null;
  let minTimeDifference = Infinity;

  for (const dateObject of datesArray) {
    const approachDate = new Date(dateObject.close_approach_date_full);

    if (approachDate > currentDate) {
      const timeDifference = Math.abs(approachDate.getTime() - currentDate.getTime());

      if (timeDifference < minTimeDifference) {
        minTimeDifference = timeDifference;
        closestDateObject = dateObject;
      }
    }
  }

  return closestDateObject;
};
