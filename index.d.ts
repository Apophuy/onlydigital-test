/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module '*.jpeg' {
  const content: any;
  export default content;
}

declare module '*.gif' {
  const content: any;
  export default content;
}
declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.module.css';

declare module '*.module.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}
