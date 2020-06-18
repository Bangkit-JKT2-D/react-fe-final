/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
import React from "react";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

const TakePicture = props => {
  const dataURLtoFile = (dataurl, filename) => {
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const handleTakePhoto = data => {
    const { isCaptured } = props;
    const imageData = {
      base64: data,
      file: dataURLtoFile(data, "captured-fruit.png")
    };
    isCaptured(imageData);
  };

  return (
    <Camera
      onTakePhoto={dataUri => {
        handleTakePhoto(dataUri);
      }}
      idealFacingMode={FACING_MODES.ENVIRONMENT}
    />
  );
};

export default TakePicture;
