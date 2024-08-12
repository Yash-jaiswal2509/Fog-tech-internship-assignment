import { createContext, useContext, useState, useEffect } from "react";
import { MusicDataProps } from "./music_data";
import { musicData } from "./music_data";
import { Howl } from "howler";

type MusicContextType = {
  music: MusicDataProps[];
  setMusic: (music: MusicDataProps[]) => void;
  activeName: string | null;
  setActiveName: (name: string) => void;
  isActive: boolean;
  setIsActive: (bool: boolean) => void;
  selectedMusic: MusicDataProps | null;
  setSelectedMusic: (music: MusicDataProps) => void;
  howl: Howl | null;
  playNextTrack: () => void;
  playPrevTrack: () => void;
  playRandomTrack: () => void;
  loopTrack: () => void;
};

const initialState = {
  music: [],
  setMusic: () => { },
  activeName: null,
  setActiveName: () => { },
  isActive: false,
  setIsActive: () => { },
  selectedMusic: null,
  setSelectedMusic: () => { },
  howl: null,
  playNextTrack: () => { },
  playPrevTrack: () => { },
  playRandomTrack: () => { },
  loopTrack: () => { },
};

const musicContext = createContext<MusicContextType>(initialState);

export const useMusicContext = () => {
  const context = useContext(musicContext);
  if (!context)
    throw new Error("useMusicContext must be used within a MusicProvider");
  return context;
};

type MusicProviderProps = {
  children: React.ReactNode;
};

const MusicProvider = ({ children }: MusicProviderProps) => {
  const [music, setMusic] = useState<MusicDataProps[]>(musicData);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [activeName, setActiveName] = useState<string | null>(null);
  const [selectedMusic, setSelectedMusic] = useState<MusicDataProps | null>(null);
  const [howl, setHowl] = useState<Howl | null>(null);

  const playNextTrack = () => {
    if (!selectedMusic) return;

    const currentIndex = music.findIndex((music) => music.title === selectedMusic.title);
    const nextIndex = (currentIndex + 1) % music.length;
    const nextMusic = music[nextIndex];

    setSelectedMusic(nextMusic);
    setIsActive(true);
    setActiveName(nextMusic.title);
  };

  const playPrevTrack = () => {
    if (!selectedMusic) return;

    const currentIndex = music.findIndex((music) => music.title === selectedMusic.title);
    const nextIndex = (currentIndex > 1) ? (currentIndex - 1) % music.length : 0;
    const nextMusic = music[nextIndex];

    setSelectedMusic(nextMusic);
    setIsActive(true);
    setActiveName(nextMusic.title);
  };

  const playRandomTrack = () => {
    const randomIndex = Math.ceil(Math.random() * music.length - 1);
    const randomMusic = music[randomIndex];

    setSelectedMusic(randomMusic);
    setIsActive(true);
    setActiveName(randomMusic.title);
  }

  const loopTrack = () => {
    if (howl) {
      howl.loop(true);
    }
  }


  useEffect(() => {
    if (selectedMusic) {
      if (howl) {
        howl.stop();
      }
      const sound = new Howl({
        src: [`/assets/${selectedMusic.title}.mp3`],
        html5: true,
        volume: 1,
      });
      setHowl(sound);
      sound.play();
    }
  }, [selectedMusic]);

  const contextValue = {
    music,
    setMusic: (music: MusicDataProps[]) => setMusic(music),
    activeName,
    setActiveName: (name: string) => setActiveName(name),
    isActive,
    setIsActive: (bool: boolean) => setIsActive(bool),
    selectedMusic,
    setSelectedMusic: (music: MusicDataProps) => setSelectedMusic(music),
    howl,
    playNextTrack,
    playPrevTrack,
    playRandomTrack,
    loopTrack,
  };

  return (
    <musicContext.Provider value={contextValue}>
      {children}
    </musicContext.Provider>
  );
};

export default MusicProvider;
