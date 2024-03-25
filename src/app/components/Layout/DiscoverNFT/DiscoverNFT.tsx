import React from 'react';
import Image from '../Element/Image';
import Title from '../Element/Title';
import Button from '../Element/Button';
import eye from '../../Icons/IconDiscoverNFT/Eye.png';

import AvatarAuthor from '../Element/AvatarAuthor';

function DiscoverNFT() {
  return (
    <div className="discoverNFT">
      <div className="topCreatorTitle">
        <div className="topCreatorTitleContent">
          <Title titleContent={'Discover More NFTs'} titleDescribe={'Explore new trending NFTs'} />
        </div>
        <div className="topCreatorTitleButton">
          <Button title={'See All'} type={'secondary2'} icon={eye} />
        </div>
      </div>
    </div>
  );
}

export default DiscoverNFT;
