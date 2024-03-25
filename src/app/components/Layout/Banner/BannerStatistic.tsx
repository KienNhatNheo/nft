import React from 'react';
import Button from '../Element/Button';
import Statistic from '../Element/Statistic';
import rocket from '../../Icons/IconBanner/RocketLaunch.png';

function BannerText() {
  function goToSignIn() {
    document.location.href = '/login';
  }
  const statistic = [
    {
      numberSale: '240k+',
      type: 'Total Sale',
    },
    {
      numberSale: '100k+',
      type: 'NFTs',
    },
    {
      numberSale: '240k+',
      type: 'Artists',
    },
  ];
  return (
    <div className="bannerStatistic">
      <Button title="Get Started" icon={rocket} onClick={goToSignIn} type="secondary" />
      <div className="statisticTable">
        {statistic.map((item, index) => {
          return <Statistic key={index} number={item.numberSale} type={item.type} />;
        })}
      </div>
    </div>
  );
}

export default BannerText;
