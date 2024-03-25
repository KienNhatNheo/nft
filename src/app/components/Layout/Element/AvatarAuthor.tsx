import React from 'react';

interface AuthorProps {
  product: string;
  author: string;
  icon: string;
}
function AvatarAuthor(props: AuthorProps) {
  return (
    <>
      <h5 className="NFT-product">{props.product}</h5>
      <div className="authorNFT">
        <img className="NFT" src={props.icon} alt="" />
        <div className="authorName">{props.author}</div>
      </div>
    </>
  );
}

export default AvatarAuthor;
