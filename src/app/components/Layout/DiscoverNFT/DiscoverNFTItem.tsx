import React from 'react';
import Image from '../Element/Image';

import AvatarAuthor from '../Element/AvatarAuthor';

interface NFTInfo {
  image: string;
  author: string;
  icon: string;
  product: string;
  price: number;
  date: string;
}

function DiscoverNFTItem(props: NFTInfo) {
  return (
    <div className="discoverNFTItem">
      <div className="discoverNFTImage">
        <Image
          size={'big'}
          url={
            'https://s3-alpha-sig.figma.com/img/1227/9881/7c4f8936a4246f91674d47fe40c14d63?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f1CLwWRZsodHJrdct4jFs~EgoBJGGPbmKF2~KJBRYNzKydBth3KXKjfwOMiU7U1VO58mrGtUHqnxYl0S2uHU4qQlu0MvIGT2rkQxK~8dImRxzCBNfM7Wggtk9UnU1tXIryWI86qICTlH4zIdN6cnHiRJciQPVXiw4dx8KNy0~OBk~ljiXpQLR6Q-COPGmZ0xIY3qzylq7sf6CPNQd6B5VOYxnLjC-QsKHvMY2NNFgq~gPuuJqQ9QqPEWsydRFCRav7QRgZ9-8L7g7XOCEwTVA0OO-8lwGs20c-8K-gKzHxdPWKPAcx~2hXgoWiW6Q2bWCucjAOrPRoJ9VkVEKXKBLQ__'
          }
          title={''}
        />
      </div>
      <div className="discoverAuthor">
        <AvatarAuthor product={props.product} author={props.author} icon={props.icon} />
      </div>
      <div className="NFTInfo">
        <div className="NFTPrice">
          <div className="priceTitle">Price</div>
          <div className="price">{props.price} ETH</div>
        </div>
        <div className="NFTDate">
          <div className="dateTitle">Price</div>
          <div className="date">{props.price}</div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverNFTItem;
