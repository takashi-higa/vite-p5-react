import { GridNoise } from 'sketch/GridNoise';
import { TiledLines } from 'sketch/TiledLines';
import { Route } from 'types';

export const routes: Route[] = [
  {
    label: 'Particle Noise',
    path: '/',
    Component: GridNoise,
  },
  {
    label: 'Tiled Lines',
    path: '/tiled-lines',
    Component: TiledLines,
  },
];
