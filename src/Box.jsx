import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import './Box.css';

function Box() {
  const box = useRef();
  useEffect(() => {
    if (!box.current) return;
    gsap.fromTo(box.current, { scale: 0, rotate: 0, }, { scale: 1, rotate: 180, duration: 4, ease: 'Power4.out' });
  }, [box]);

  return (
    <div className="container">
      <div className="box" ref={box}></div>
    </div>
  )
}

export default Box