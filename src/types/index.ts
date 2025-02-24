export type TUseWindowSize = {
  size: {
    width: number;
    height: number;
  };
  isMobile: boolean;
};

export type TTimeInterval = {
  startYear: number;
  endYear: number;
};

export enum Fields {
  movie = 'movie',
  sport = 'sport',
  music = 'music',
  literature = 'literature',
  science = 'science',
  technology = 'technology',
}

export type TTestData = {
  year: number;
  fields: Fields;
  event: string;
};
