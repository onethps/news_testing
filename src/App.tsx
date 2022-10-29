import { ReactElement } from 'react';

import { Hero } from './section/Hero/Hero';
import { Navbar } from './section/Navbar/Navbar';
import { NewsBlock } from './section/NewsBlock/NewsBlock';
import { StatsLine } from './section/StatsLine/StatsLine';
import { Video } from './section/Video/Video';

const App = (): ReactElement => {
  return (
    <div>
      <Navbar />
      <StatsLine />
      <Hero />
      <NewsBlock />
      <Video />
    </div>
  );
};

export default App;
