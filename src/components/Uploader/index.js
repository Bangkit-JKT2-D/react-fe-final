/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Files from "react-butterfiles";
import { predictThunk } from "../../modules/predict/thunk";
import remove from "../../assets/x.svg";
import upload from "../../assets/upload.svg";
import TakePicture from "../TakePicture";

const Uploader = () => {
  const [pictures, setPictures] = useState([]);
  const [takenPict, setTakenPict] = useState([]);
  const [isTakePict, setTakePict] = useState(false);
  const dispatch = useDispatch();

  const takingPict = image => {
    setTakePict(!isTakePict);
    setTakenPict([
      {
        name: "captured image",
        src: image
      }
    ]);
  };

  return (
    <div className="flex column center full">
      <Files
        maxSize="5mb"
        convertToBase64
        accept={["image/png", "image/jpg", "image/jpeg"]}
        onSuccess={files => setPictures(files)}
        onError={errors => console.log(errors)}
      >
        {({ browseFiles, getDropZoneProps }) => (
          <>
            <div
              {...getDropZoneProps({
                className: "flex column center dropZone"
              })}
            >
              {!isTakePict && pictures.length === 0 && takenPict.length === 0 && (
                <>
                  <div
                    role="button"
                    onClick={browseFiles}
                    className="flex center column full"
                  >
                    <img src={upload} alt="upload" />
                    <h2>You can Drag and Drop Image to This Box</h2>
                  </div>
                  <button
                    type="button"
                    className="btn w70"
                    onClick={() => setTakePict(!isTakePict)}
                  >
                    Take Picture
                  </button>
                </>
              )}
              {isTakePict && pictures.length === 0 && (
                <div className="flex column center relative">
                  <TakePicture isCaptured={img => takingPict(img)} />
                  <button
                    type="button"
                    className="absolute remove"
                    onClick={() => setTakePict(false)}
                  >
                    <img src={remove} alt="remove" />
                  </button>
                </div>
              )}
              {pictures.length > 0 && takenPict.length === 0 && (
                <div className="flex column center relative">
                  <img
                    src={pictures[0].src.base64}
                    className="taken-pic"
                    alt={pictures[0].name}
                  />
                  <button
                    type="button"
                    className="absolute remove"
                    onClick={() => setPictures([])}
                  >
                    <img src={remove} alt="remove" />
                  </button>
                </div>
              )}
              {takenPict.length > 0 && pictures.length === 0 && (
                <div className="flex column center relative">
                  <img
                    src={takenPict[0].src.base64}
                    className="taken-pic"
                    alt={takenPict[0].name}
                  />
                  <button
                    type="button"
                    className="absolute remove"
                    onClick={() => setTakenPict([])}
                  >
                    <img src={remove} alt="remove" />
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </Files>
      {pictures.length > 0 && (
        <button
          type="button"
          className="btn w70"
          onClick={() => dispatch(predictThunk.getResult(pictures[0]))}
        >
          Predict
        </button>
      )}
      {takenPict.length > 0 && (
        <button
          type="button"
          className="btn w70"
          onClick={() => dispatch(predictThunk.getResult(takenPict[0]))}
        >
          Predict
        </button>
      )}
    </div>
  );
};

export default Uploader;
