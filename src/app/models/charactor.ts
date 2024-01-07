export interface ICharacter {}

interface Info {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
}

export type status = 'Alive' | 'Dead' | 'Unknown';

interface Result {
  id: number;
  name: string;
  status: status;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
