import React from 'react';
import AvatarAuthor from '../Element/AvatarAuthor';
import Image from '../Element/Image';

interface TrendProps {
  bigimg: string;
  smallimg1: string;
  smallimg2: string;
  text: string;
  product: string;
  author: string;
  icon: string;
}
function TrendImage(props: TrendProps) {
  return (
    <div className="trendImage">
      <Image size="big" url={props.bigimg} title={''} />
      <div className="trendImageMore">
        <Image size="small" url={props.smallimg1} title={''} />
        <Image size="small" url={props.smallimg2} title={''} />
        <Image size="small" url={''} title={props.text} />
      </div>
      <div className="avatarAuthorTrend">
        <AvatarAuthor product={props.product} author={props.author} icon={props.icon} />
      </div>
    </div>
  );
}

export default TrendImage;
