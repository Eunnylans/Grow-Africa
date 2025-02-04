import { animateScroll as scroll } from 'react-scroll';
import { AiOutlineToTop } from 'react-icons/ai';
import { useState, useLayoutEffect } from 'react';
import "./ScrollToTopIcon.scss";

const ScrollToTopIcon = () => {
  const [showIcon, setShowIcon] = useState(false);

  const onScroll = () => {
    if (80 < window.scrollY) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 700 });
  };

  return (
    <AiOutlineToTop
      className={`to-top-icon ${showIcon ? 'showIcon' : ''}`}
      size='50px'
      onClick={scrollToTop}
    />
  );
};

export default ScrollToTopIcon;