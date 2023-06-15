import { useCallback, useEffect, useRef, useState } from "react";

const useLinearPos = () => {
  // -- useState hook
  const [position, setPosition] = useState(0);
  const config = { speed: 1 };
  const [delta, setDelta] = useState(1);

  // -- useRef hook
  const posRef = useRef();

  useEffect(() => {
    const getDelta = (e) => {
      setDelta(Math.sign(e.deltaY));
    };

    window.addEventListener("wheel", getDelta);
    return () => window.removeEventListener("wheel", getDelta);
  }, []);

  const move = useCallback(() => {
    setPosition((prevPos) => (prevPos += config.speed * delta * 0.01));
    /* setSpeed((prevspeed) => (prevspeed *= Math.sign(delta))); */

    posRef.current = requestAnimationFrame(move);
  }, [config.speed, delta]);

  useEffect(() => {
    posRef.current = requestAnimationFrame(move);
    return () => cancelAnimationFrame(posRef.current);
  }, [posRef, move]);

  return [position];
};

export default useLinearPos;
