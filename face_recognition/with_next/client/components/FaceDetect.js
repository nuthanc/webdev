import React, { useEffect, useState } from 'react';
import styles from './FaceDetect.module.css';

const FaceDetect = ({ boxes, url }) => {
  const [rectBoxes, setRectBoxes] = useState([]);
  const imageRef = React.createRef();
  // Use useState for boxes
  useEffect(() => {
    const height = imageRef.current.clientHeight;
    const width = imageRef.current.clientWidth;
    if (boxes) {
      console.log('rectBoxes is', rectBoxes);
      createBox(height, width, boxes);
    }
    if (url === '') {
      setRectBoxes([]);
    }
  }, [boxes, url]);

  const createBox = (height, width, boxes) => {
    let boxArray = [];
    boxes.map((box) => {
      const {
        top_row,
        bottom_row,
        left_col,
        right_col,
      } = box.region_info.bounding_box;
      const top = height * top_row;
      const bottom = height - height * bottom_row;
      const left = width * left_col;
      const right = width - width * right_col;
      const rect = { top, bottom, left, right };
      boxArray.push(rect);
    });
    setRectBoxes(boxArray);
  };

  const renderBox = () => {
    return rectBoxes.map((box) => {
      if (box.top)
        return (
          <div
            key={box.top}
            className={styles.box}
            style={{
              top: box.top,
              bottom: box.bottom,
              left: box.left,
              right: box.right,
            }}
          ></div>
        );
    });
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
