import React from "react";

const ChildComponent = (props) => {
  const { title, childCount, increase } = props;
  console.log('child');

  return (
    <div>
      <p> {title} </p>
      <p>{childCount}</p>
      <button onClick={() => increase()}>Child Increment</button>
    </div>
  )
}

export default React.memo(ChildComponent);