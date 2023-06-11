import { useCallback, useEffect, useRef, useState } from "react";

const usePos = () => {
  // -- useState hook
  const [position, setPosition] = useState(0);
  const [speed, setSpeed] = useState(0);

  // -- useRef hook
  const posRef = useRef();

  useEffect(() => {
    let previousScrollTop = window.pageYOffset;

    const getSpeed = () => {
      let currentScrollTop = window.pageYOffset;
      let delta = currentScrollTop - previousScrollTop;
      setSpeed((prevSpeed) => (prevSpeed += delta * 0.0002));

      // Update the previous scroll position
      previousScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", getSpeed);
    return () => window.removeEventListener("scroll", getSpeed);
  }, []);

  const move = useCallback(() => {
    setPosition((prevPos) => (prevPos += speed));
    setSpeed((prevSpeed) => (prevSpeed *= 0.9));

    posRef.current = requestAnimationFrame(move);
  }, [speed]);

  useEffect(() => {
    posRef.current = requestAnimationFrame(move);
    return () => cancelAnimationFrame(posRef.current);
  }, [posRef, move]);

  return [position];
};

export default usePos;
