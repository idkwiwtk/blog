export const textWidth = (
  text: string,
  fontSize: string = "16px",
  fontFamily: string = "Arial"
) => {
  const fontSetting = `${fontSize} ${fontFamily}`;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) return 0;
  context.font = fontSetting;
  const metrics = context.measureText(text);
  return metrics.width;
};
