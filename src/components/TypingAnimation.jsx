import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const typingSpeed = 100; // Speed of typing
  const deletingSpeed = 200; // Speed of deleting
  const pauseDuration = 1000; // Pause before retyping

  useEffect(() => {
    let timer;
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setIndex(prev => (prev + 1) % text.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(text[index].slice(0, displayedText.length + 1));
        if (displayedText === text[index]) {
          setIsDeleting(true);
          setTimeout(() => setIsDeleting(false), pauseDuration);
        }
      }, typingSpeed);
    }
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index, text]);

  return (
    <span>{displayedText}<span className="cursor">|</span></span>
  );
};

export default TypingAnimation;
