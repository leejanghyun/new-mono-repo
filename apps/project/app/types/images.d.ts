declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.css";
declare module "*.json";
declare module "*.woff";
declare module "*.ttf" {
  const content: unknown;
  export default content;
}

declare module "*.svg" {
  import React = require("react");

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.svg?url" {
  const content: any;
  export default content;
}
