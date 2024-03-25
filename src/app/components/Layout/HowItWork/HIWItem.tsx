import React from 'react';
import Image from '../Element/Image';

interface HIW {
  title: string;
  image: string;
  content: string;
  layout: string;
}
function HIWItem(props: HIW) {
  return (
    <div className={props.layout === 'row' ? 'HIWItem row' : 'HIWItem column'}>
      <div className="HIWImage">
        <Image size={'small'} url={props.image} title={''} />
      </div>
      <div className={props.layout === 'row' ? 'HIWContent row' : 'HIWContent column'}>
        <div className="HIWTitle">{props.title}</div>
        <div className="HIWText">{props.content}</div>
      </div>
    </div>
  );
}

export default HIWItem;
