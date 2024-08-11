import { createContext, useContext, useState } from "react";
import { MusicDataProps } from "./music_data";
import { musicData } from "./music_data";

type MusicContextType = {
  music: MusicDataProps[];
  setMusic: (music: MusicDataProps[]) => void;
  isActive: boolean;
  setIsActive: (bool: boolean) => void;
  selectedMusic: MusicDataProps | null;
  setSelectedMusic: (music: MusicDataProps) => void;
};

const initialState = {
  music: [],
  setMusic: () => {},
  isActive: false,
  setIsActive: () => {},
  selectedMusic: null,
  setSelectedMusic: () => {},
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
  const [selectedMusic, setSelectedMusic] = useState<MusicDataProps | null>(
    null,
  );

  const contextValue = {
    music,
    setMusic: (music: MusicDataProps[]) => setMusic(music),
    isActive,
    setIsActive: (bool: boolean) => setIsActive(bool),
    selectedMusic,
    setSelectedMusic: (music: MusicDataProps) => setSelectedMusic(music),
  };

  return (
    <musicContext.Provider value={contextValue}>
      {children}
    </musicContext.Provider>
  );
};

export default MusicProvider;
