import React, {
  createContext,
  useState,
  SetStateAction,
  Dispatch,
} from 'react';

// simple React context for persisting the page + document title

interface Props {
  children: React.ReactNode;
}

interface TitleContextState {
  title: string;
  setTitle?: Dispatch<SetStateAction<string>> | null;
}

export const TitleContext = createContext<TitleContextState>({
  title: '',
});

const TitleContextOuter = ({ children }: Props) => {
  const [title, setTitle] = useState('');
  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export default TitleContextOuter;
