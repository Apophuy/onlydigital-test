export const currentRotation = (
  dotNumber: number,
  type: 'round' | 'text',
  currentDot = 0
): number => {
  switch (dotNumber) {
    case 1:
      if (type === 'round') return 0;
      return (-360 / 6) * currentDot - 60;
    case 2:
      if (type === 'round') return -60;
      return (-360 / 6) * currentDot;
    case 3:
      if (type === 'round') return -120;
      return (-360 / 6) * currentDot + 60;
    case 4:
      if (type === 'round') return -180;
      return (-360 / 6) * currentDot + 120;
    case 5:
      if (type === 'round') return 120;
      return (-360 / 6) * currentDot + 180;
    case 6:
      if (type === 'round') return 60;
      return (-360 / 6) * currentDot - 120;
    default:
      return 0;
  }
};
