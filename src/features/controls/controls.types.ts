export enum Regions {
  'Africa' = 'Africa',
  'Americas' = 'Americas',
  'Asia' = 'Asia',
  'Europe' = 'Europe',
  'Oceania' = 'Oceania',
  'All' = 'All'
}

export interface ControlsState {
  search: string;
  region: keyof typeof Regions;
}

export interface SelectOption {
  value: keyof typeof Regions;
  label: string
}

export type RegionOptions = Record<Regions, SelectOption>
