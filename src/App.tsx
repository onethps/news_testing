import { ReactElement } from 'react';

import { Hero } from './section/Hero/Hero';
import { Navbar } from './section/Navbar/Navbar';
import { NewsBlock } from './section/NewsBlock/NewsBlock';
import { StatsLine } from './section/StatsLine/StatsLine';

const App = (): ReactElement => {
  return (
    <div>
      <Navbar />
      <StatsLine />
      <Hero />
      <NewsBlock />
    </div>
  );
};

export default App;
