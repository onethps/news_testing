import { ReactElement } from 'react';

import { Hero } from './section/Hero/Hero';
import { Navbar } from './section/Navbar/Navbar';
import { StatsLine } from './section/StatsLine/StatsLine';

const App = (): ReactElement => {
  return (
    <div>
      <Navbar />
      <StatsLine />
      <Hero />
    </div>
  );
};

export default App;
