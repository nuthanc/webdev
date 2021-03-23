import React, { useEffect, useState } from 'react';
import styles from './FaceDetect.module.css';

const FaceDetect = ({ box, url }) => {
  const [rectBox, setRectBox] = useState({});
  const imageRef = React.createRef();
  // Use useState for box
  useEffect(() => {
    const height = imageRef.current.clientHeight;
    const width = imageRef.current.clientWidth;
    if (box) {
      console.log('Box is', box);
      createBox(height, width, box);
    }
    if (url === '') {
      setRectBox({});
    }
  }, [box, url]);

  const createBox = (height, width, box) => {
    console.log({ height });
    console.log({ width });
    const top = height * box.top_row;
    const bottom = height - height * box.bottom_row;
    const left = width * box.left_col;
    const right = width - width * box.right_col;
    setRectBox({ ...rectBox, top, bottom, left, right });
  };

  const renderBox = () => {
    console.log('In renderBox');
    const { top, bottom, left, right } = rectBox;
    console.log({ top, bottom, left, right });
    if (top) {
      return (
        <div
          className={styles.box}
          style={{ top: top, bottom: bottom, left: left, right: right }}
        ></div>
      );
    }
    // if (url === '') {
    //   return <div></div>;
    // }
  };

  return (
    <div className="FaceDetect">
      <div className={styles.wrapper}>
        <img src={url} ref={imageRef} className={styles.imgSizing} />
        {renderBox()}
      </div>
    </div>
  );
};

export default FaceDetect;
