import React from 'react';

interface image {
  size: string;
  url: string;
  title: string;
}
function Image(props: image) {
  return (
    <div className="image">
      {props.title === '' && <img className={props.size} src={props.url} alt="" />}
      {props.url === '' && <div className="title">{props.title}</div>}
    </div>
  );
}

export default Image;
