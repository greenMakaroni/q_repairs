
import { TypeAnimation } from 'react-type-animation';

const TypeTextAnimation = () => {
    return (
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'We will repair your PC',
          1000,
          'We will repair your Laptop',
          1000,
          'We will repair your MacBook',
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{margin: 0, fontFamily: 'Oswald', color: 'white', fontSize: '3em', display: 'inline-block', zIndex: 10}}
        repeat={Infinity}
      />
    );
  };

export default TypeTextAnimation