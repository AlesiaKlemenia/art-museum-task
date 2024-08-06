declare module "*.scss"
declare module "*.sass"

declare module "*.png" {
    const content: string;
    export default content;
}

declare module "*.svg" {
    const svg: string;
    export default svg;
}
