import React from 'react';

const Nappain = (props) => {
  return (
    <button onClick={()=>props.nappainPainettu(props.nappain)}>{props.nappain}</button>
  )
}

export default Nappain;