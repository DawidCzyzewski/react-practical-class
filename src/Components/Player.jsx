// Using reference

import { forwardRef, useRef } from "react";

export const Player = forwardRef((props, ref) => {
  const playerRef = useRef();

  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();
  const show = () => console.log(playerRef);

  console.log("Ref is undefinied:", { ref });
  console.log("If I want ref I must use forwardRef before parametres");

  return (
    <>
      <p>My Player!</p>;
      <video controls src={props.src} ref={playerRef}>
        Sorry, no video.
      </video>
      <p>
        <button type="button" onClick={play}>
          Play
        </button>
        <button type="button" onClick={pause}>
          Pause
        </button>
        <button type="button" onClick={show}>
          Show
        </button>
      </p>
    </>
  );
});
