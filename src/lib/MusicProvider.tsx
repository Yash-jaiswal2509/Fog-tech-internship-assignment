import { createContext, useContext, useState } from "react";
import { MusicDataProps } from "./music_data";
import { musicData } from "./music_data";

type MusicContextType = {
  music: MusicDataProps[];
  setMusic: (music: MusicDataProps[]) => void;
};

const initialState = {
  music: [],
  setMusic: () => {},
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

  const contextValue = {
    music,
    setMusic: (music: MusicDataProps[]) => setMusic(music),
  };
  return (
    <musicContext.Provider value={contextValue}>
      {children}
    </musicContext.Provider>
  );
};

export default MusicProvider;
