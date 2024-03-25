import React from 'react';
import Header from 'app/components/Layout/Header/Header';
import Banner from 'app/components/Layout/Banner/Banner';
import Trend from 'app/components/Layout/Trend/Trend';
import TopCreator from 'app/components/Layout/TopCreator/TopCreator';
import HIW from 'app/components/Layout/HowItWork/HIW';
import Contribution from 'app/components/Layout/Contribution/Contribution';
import Footer from 'app/components/Layout/Footer/Footer';
type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Header />
      <Banner />
      <Trend />
      <TopCreator />
      <HIW />
      <Contribution />
      <Footer />
    </div>
  );
};

export default HomePage;
