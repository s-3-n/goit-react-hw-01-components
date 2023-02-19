export const randomColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 120) +
    ',' +
    Math.round(Math.random() * 120) +
    ',' +
    Math.round(Math.random() * 120) +
    ',' +
    0.8 +
    ')';

  return color;
};
