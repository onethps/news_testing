import { ReactElement } from 'react';

import { Navbar } from './components/Navbar/Navbar';
import { StatsLine } from './components/StatsLine/StatsLine';
import { ColumsBlock } from './section/ColumsBlock/ColumsBlock';
import { Hero } from './section/Hero/Hero';
import { NewsBlock } from './section/NewsBlock/NewsBlock';
import { Video } from './section/VideoBlock/Video';

const App = (): ReactElement => {
  return (
    <>
      <Navbar />
      <StatsLine />
      <Hero />
      <NewsBlock />
      <Video />
      <ColumsBlock />
    </>
  );
};

export default App;
