import React, { Fragment } from "react";
import { usePlayer } from "../Player.context";
import styles from "./LoadButton.module.scss";

const LoadButton = () => {
  const { loadFile } = usePlayer();
  const onChange = ({
    target: {
      files: [file],
      value
    }
  }) => {
    const fileTest = /(.mp3)$/i.test(value);
    if (fileTest) {
      loadFile(file);
    } else {
      window.alert("you can only load an mp3 file");
    }
  };
  return (
    <Fragment>
      <label className={styles.fileBtn}>
        <input type="file" className={styles.fileField} onChange={onChange} />{" "}
        Load MP3
      </label>
    </Fragment>
  );
};

export default LoadButton;
