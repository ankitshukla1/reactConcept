import React from 'react';

const FooterHOC = (WComponet, title) => {
  const newComponent = () => {
    return (
      <div>
        <WComponet></WComponet>
        <div>
          <p>{title}</p>
        </div>
      </div>
    )
  }
  return newComponent;
}

export default FooterHOC;