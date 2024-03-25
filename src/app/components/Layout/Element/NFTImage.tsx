import React from 'react';
import AvatarAuthor from './AvatarAuthor';

interface NFTProps {
  author: string;
  product: string;
  image: string;
  icon: string;
}
function NFTImage(props: NFTProps) {
  return (
    <div className="NFTImage">
      <img className="NFT-mainimg" src={props.image} alt="" />
      <div className="avatarAuthorBanner">
        <AvatarAuthor author={props.author} icon={props.icon} product={props.product} />
      </div>
    </div>
  );
}

export default NFTImage;
