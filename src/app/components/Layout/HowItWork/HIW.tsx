import React from 'react';
import Image from '../Element/Image';
import Title from '../Element/Title';
import HIWItem from './HIWItem';
import ava1 from '../../Icons/IconHIW/Icon.png';
import ava2 from '../../Icons/IconHIW/Icon (1).png';
import ava3 from '../../Icons/IconHIW/Icon (2).png';

function HIW() {
  const HIWData = [
    {
      title: 'Setup Your Wallet',
      image: ava1,
      content:
        'Set up your wallet of choice.Connect it to the NFT market by clicking the wallet icon in the top right corner.',
      layout: 'row',
    },
    {
      title: 'Create Collection',
      image: ava2,
      content:
        'Upload your work and setup your collection. Add a description, social links and floor price.',
      layout: 'row',
    },
    {
      title: 'Start Earning',
      image: ava3,
      content:
        'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
      layout: 'row',
    },
  ];
  return (
    <div className="topCreator">
      <div className="topCreatorTitle">
        <div className="topCreatorTitleContent">
          <Title titleContent={'How It Works'} titleDescribe={'Find Out How To Get Started'} />
        </div>
      </div>
      <div className="topCreatorContent">
        {HIWData.map((item, index) => {
          return (
            <HIWItem
              title={item.title}
              image={item.image}
              content={item.content}
              layout={item.layout}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HIW;
