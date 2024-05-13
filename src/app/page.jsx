import About from '@/components/about';
import About2 from '@/components/about2';
import About3 from '@/components/about3';
import Applications from '@/components/applications';
import Banner from '@/components/banner';
import Customers from '@/components/customers';
import Description from '@/components/description';
import Hero from '@/components/hero';
import Revenue from '@/components/revenue';
import WhatIsNew from '@/components/whatIsNew';

const Homepage = () => {
  return (
    <>
      <Hero />
      <Description />
      <About />
      <About2 />
      <About3 />
      <Applications />
      <WhatIsNew />
      <Revenue />
      <Customers />
      <Banner />
    </>
  );
};

export default Homepage;
