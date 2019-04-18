import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  const boundingBoxes = box.map(
    ({ id, leftCol, rightCol, topRow, bottomRow }) => {
      return (
        <div
          key={id}
          className="bounding-box"
          style={{
            left: leftCol,
            right: rightCol,
            bottom: bottomRow,
            top: topRow
          }}
        />
      );
    }
  );
  return (
    <div className="faceRecognition-contaier">
      {imageUrl && (
        <div className="absolute mt2">
          <img
            id="inputImage"
            src={imageUrl}
            alt="peoples"
            width="500px"
            height="auto"
          />
          {boundingBoxes}
        </div>
      )}
    </div>
  );
};

export default FaceRecognition;
