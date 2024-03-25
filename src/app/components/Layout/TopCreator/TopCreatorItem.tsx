import React from 'react';
import Image from '../Element/Image';
import Creator from '../Element/Creator';
import creator1 from '../../Icons/IconCreator/Artist Avatar.png';
interface creatorItem {
  index: number;
  name: string;
  type: string;
  totalSale: number;
  image: string;
}
function TopCreatorItem(props: creatorItem) {
  return (
    <div className="topCreatorItem">
      <div className="creatorIndex">{props.index}</div>
      <div className="creatorImage">
        <Image size={'small'} url={props.image} title={''} />
      </div>
      <Creator name={props.name} type={'center'} totalSale={props.totalSale} />
    </div>
  );
}

export default TopCreatorItem;
