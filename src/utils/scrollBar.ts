export const getBarWidth = () => {
  const outDiv = document.createElement('div');
  outDiv.style.width = '100px';
  outDiv.style.position = 'absolute';
  outDiv.style.top = '-9999px';
  document.body.appendChild(outDiv);
  const widthNoBar = outDiv.offsetWidth;
  outDiv.style.overflow = 'scroll';
  const innerDiv = document.createElement('div');
  innerDiv.style.width = '100%';
  outDiv.appendChild(innerDiv);
  const widthBar = innerDiv.offsetWidth;
  document.body.removeChild(outDiv);
  return widthNoBar - widthBar;
};

export const hasScrollbar = () =>
  document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
