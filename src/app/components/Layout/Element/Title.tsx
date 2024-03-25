import React from 'react';

interface title {
  titleContent: string;
  titleDescribe: string;
}
function Title(props: title) {
  return (
    <>
      <div className="title">
        <h3 className="title-content">{props.titleContent}</h3>
        <div className="title-describe">{props.titleDescribe}</div>
      </div>
    </>
  );
}

export default Title;
