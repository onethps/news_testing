import { ReactElement } from 'react';

import { Navbar } from './section/Navbar/Navbar';
import { StatsLine } from './section/StatsLine/StatsLine';
import { CategoriesContent } from './section/Categories';
import { Footer } from './section/Footer/Footer';
import { Hero } from './section/Hero/Hero';
import { NewsBlock } from './section/Main/NewsBlock';
import { Video } from './section/Video/Video';

const App = (): ReactElement => {
  return (
    <>
      <Navbar />
      <StatsLine />
      <Hero />
      <NewsBlock />
      <Video />
      <CategoriesContent />
      <Footer />
    </>
  );
};

export default App;
