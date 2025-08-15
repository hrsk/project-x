// if you use css
declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}

// if you use scss
declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}


// if you use less
declare module "*.module.less" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.png" {
    const value: string;
    export default value;
}
declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare const __DEV_MODE__: boolean