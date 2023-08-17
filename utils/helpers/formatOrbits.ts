export const formatOrbits = (count: number) => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return `${count} лунных орбит`;
  }

  if (lastDigit === 1) {
    return `${count} лунная орбита`;
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${count} лунные орбиты`;
  }

  return `${count} лунных орбит`;
};
