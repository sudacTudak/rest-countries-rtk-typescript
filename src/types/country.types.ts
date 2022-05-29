interface Flags {
    svg: string;
    png: string;
}

export interface Country {
  name: string;
  capital: string;
  region: string;
  population: number;
  flags: Flags;
  independent: boolean;
}
