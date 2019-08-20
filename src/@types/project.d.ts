declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.less' {
  const content: { [key: string]: string };
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.svg';
