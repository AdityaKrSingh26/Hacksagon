import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

function ConfettiComponent() {
  const { width, height } = useWindowSize();
  const [pieces, setPieces] = useState(400);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPieces(0);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      <Confetti width={width} height={height} numberOfPieces={pieces} />
    </div>
  );
}

export default ConfettiComponent;
