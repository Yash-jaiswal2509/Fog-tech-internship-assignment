export type MusicDataProps = {
  id: number;
  title: string;
  playing: number;
  time: string;
  album: string;
};

export const musicData: MusicDataProps[] = [
  {
    id: 1,
    title: "Billie Jean",
    playing: 1040811084,
    time: "4:53",
    album: "Thriller 25 Super Deluxe Edition",
  },
  {
    id: 2,
    title: "Beat It",
    playing: 643786045,
    time: "4:18",
    album: "Thriller 25 Super Deluxe Edition",
  },
  {
    id: 3,
    title: "Smooth Criminal - 2012 Remaster",
    playing: 407234004,
    time: "4:17",
    album: "Thriller 25 Super Deluxe Edition",
  },
  {
    id: 4,
    title: "Don't Stop 'Til You Get Enough",
    playing: 316391952,
    time: "6:05",
    album: "Bad 25th Anniversary Edition",
  },
  {
    id: 5,
    title: "Rock With You - Single Version",
    playing: 268187218,
    time: "3:40",
    album: "Off The Wall",
  },
];
