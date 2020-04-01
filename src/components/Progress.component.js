import React from "react";
import { usePlayer } from "../Player.context";
import styles from "./Progress.module.scss";

const Progress = () => {
  const { playHead, duration, progress, resetPlayHead } = usePlayer();
  const onClick = ({ target, pageX }) => {
    if (duration !== "0:00") {
      const pos = target.getBoundingClientRect();
      const relX = pageX - pos.x;
      const perc = relX / target.offsetWidth;
      resetPlayHead(perc);
    }
  };

  return (
    <div className={styles.progress}>
      <span>{playHead}</span>
      <span className={styles.duration}>{duration}</span>
      <progress
        onClick={onClick}
        className={styles.progress}
        id="progressMeter"
        value={progress}
        max="100"
      />
    </div>
  );
};

export default Progress;
