import { useEffect, useContext } from 'react';
import { TitleContext } from '../components/TitleContext';

const useTitle = (nextTitle?: string) => {
  // get title from state
  const { setTitle, title } = useContext(TitleContext);

  // re-run effect if the passed in title changes
  useEffect(() => {
    if (nextTitle && setTitle) {
      setTitle && setTitle(nextTitle);
    }
  }, [nextTitle]);

  // set title to document
  document.title = `Boring Twitter | ${nextTitle}`;
  // return title so that the hook can be used for consuming as well
  return title;
};

export default useTitle;
