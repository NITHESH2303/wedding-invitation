export interface RoughOptions {
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  roughness?: number;
  bowing?: number;
  opacity?: number;
  angle?: number;
}

export interface RoughInstance {
  polygon: (points: number[][], options?: RoughOptions) => SVGElement;
  path: (path: string, options?: RoughOptions) => SVGElement;
  circle: (x: number, y: number, diameter: number, options?: RoughOptions) => SVGElement;
  ellipse: (x: number, y: number, width: number, height: number, options?: RoughOptions) => SVGElement;
}

declare module 'rough' {
  export function svg(element: SVGElement): RoughInstance;
}
