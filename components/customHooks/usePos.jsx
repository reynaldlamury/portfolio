import { useCallback, useEffect, useRef, useState } from "react";

const usePos = () => {
  // -- useState hook
  const [position, setPosition] = useState(0);
  const [speed, setSpeed] = useState(0);

  // -- useRef hook
  const posRef = useRef();

  useEffect(() => {
    const getSpeed = (e) => {
      setSpeed((prevSpeed) => (prevSpeed += e.deltaY * 0.0002));
    };

    window.addEventListener("wheel", getSpeed);
    return () => window.removeEventListener("wheel", getSpeed);
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
