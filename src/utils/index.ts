export const roundRotation = (dotNumber: number, quantity: number): number => {
  const rotate = -(360 / quantity) * (dotNumber - 1);
  return rotate < -180 ? 360 + rotate : rotate;
};

export const textRotation = (dotNumber: number, quantity: number, currentDot: number): number => {
  const num = dotNumber - 2 < 0 ? quantity - dotNumber : dotNumber - 2;
  const rotate = (-360 / quantity) * currentDot + (360 / quantity) * num;
  return rotate;
};

export const dotRotation = (isMobile: boolean, index: number, quantity: number): string => {
  if (isMobile) return 'none';
  return `translateX(-263px) rotate(${(360 / quantity) * (index + 2)}deg)`;
};

export const dotNumberRotation = (isMobile: boolean, index: number, quantity: number): string => {
  if (isMobile) return 'none';
  return `rotate(${(-360 / quantity) * (index + 2)}deg)`;
};

export const fieldRotation = (isMobile: boolean, quantity: number): string => {
  const num = (q: number): number => {
    switch (q) {
      case 3:
      case 6:
        return 3;
      case 5:
        return 2;
      case 4:
      case 2:
        return 1;
      default:
        return 0;
    }
  };
  if (isMobile) return 'none';
  return `rotate(${360 / quantity + (360 / quantity) * num(quantity)}deg) translateX(60px)`;
};
