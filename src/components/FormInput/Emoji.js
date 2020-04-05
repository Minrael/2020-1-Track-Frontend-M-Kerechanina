import React from 'react';

const Emoji = ({name, handleClick}) => {
    return (
      <i className={`${name} emoji`} onClick={() => handleClick(name)}/>
    );
  }

export default Emoji;