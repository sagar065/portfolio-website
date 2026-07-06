import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterOne = () => {

  return (
    <div>
      <h1>
        <Typewriter
          options={{
            strings: ['I\'m a Software Developer','Full Stack Developer'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
}


export default TypewriterOne;