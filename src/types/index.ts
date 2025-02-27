export type TUseWindowSize = {
  size: {
    width: number;
    height: number;
  };
  isMobile: boolean;
};

export type TTestData = {
  id: number;
  startYear: number;
  endYear: number;
  field: Fields;
  events: TEvent[];
};

export enum Fields {
  movie = 'movie',
  sport = 'sport',
  music = 'music',
  literature = 'literature',
  science = 'science',
  technology = 'technology',
}

export type TEvent = {
  eventId: string;
  year: number;
  event: string;
};
