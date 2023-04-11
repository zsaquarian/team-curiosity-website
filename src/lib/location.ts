import { localStorageStore } from '@skeletonlabs/skeleton';

export enum LOCATION {
  INTRODUCTION = 0,
  HARDWARE,
  SOFTWARE,
  SIMULATION,
  BIBLIOGRAPHY
}

export const location = localStorageStore('location', LOCATION.INTRODUCTION);
