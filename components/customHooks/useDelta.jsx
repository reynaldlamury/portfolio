import { useEffect, useState } from "react";

const useDelta = () => {
  // -- useState hook
  const [delta, setDelta] = useState(1);

  useEffect(() => {
    const getDelta = (e) => {
      setDelta(Math.sign(e.deltaY));
    };

    window.addEventListener("wheel", getDelta);
    return () => window.removeEventListener("wheel", getDelta);
  }, []);

  useEffect(() => {
    console.log("delta", delta);
  }, [delta]);

  return [delta];
};

export default useDelta;
