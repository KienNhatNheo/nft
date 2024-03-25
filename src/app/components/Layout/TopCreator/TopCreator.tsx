import React from 'react';
import Title from '../Element/Title';
import Button from '../Element/Button';
import TopCreatorItem from './TopCreatorItem';
import creator1 from '../../Icons/IconCreator/Artist Avatar.png';
import creatorIcon from '../../Icons/IconCreator/CreatorIcon.png';
import creator2 from '../../Icons/IconCreator/creator2.png';
import creator3 from '../../Icons/IconCreator/creator3.png';
import creator4 from '../../Icons/IconCreator/creator4.png';

function TopCreator() {
  const CreatorData = [
    {
      name: 'Keepitreal',
      type: 'center',
      totalSale: 34.53,
      image: creator1,
    },
    {
      name: 'DigiLab',
      type: 'center',
      totalSale: 34.53,
      image: creator2,
    },
    {
      name: 'GravityOne',
      type: 'center',
      totalSale: 34.53,
      image: creator3,
    },
    {
      name: 'Juanie',
      type: 'center',
      totalSale: 34.53,
      image: creator4,
    },
  ];
  return (
    <div className="topCreator">
      <div className="topCreatorTitle">
        <div className="topCreatorTitleContent">
          <Title
            titleContent={'Top Creators'}
            titleDescribe={'Checkout Top Rated Creators on the NFT Marketplace'}
          />
        </div>
        <div className="topCreatorTitleButton">
          <Button title={'View Rankings'} type={'secondary2'} icon={creatorIcon} />
        </div>
      </div>
      <div className="topCreatorContent">
        {CreatorData.map((item, index) => {
          return (
            <div className="CreatorItem">
              <TopCreatorItem
                index={index + 1}
                name={item.name}
                type={item.type}
                totalSale={item.totalSale}
                image={item.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopCreator;
