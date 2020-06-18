/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Files from "react-butterfiles";
import { predictThunk } from "../../modules/predict/thunk";
import remove from "../../assets/x.svg";
import upload from "../../assets/upload.svg";

const Uploader = () => {
  const [pictures, setPictures] = useState([]);
  const dispatch = useDispatch();

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
              {pictures.length === 0 && (
                <div
                  role="button"
                  onClick={browseFiles}
                  className="flex center column full"
                >
                  <img src={upload} alt="upload" />
                  <h2>You can Drag and Drop Image to This Box</h2>
                </div>
              )}
              {pictures.length > 0 && (
                <div className="flex column center relative">
                  <img src={pictures[0].src.base64} alt={pictures[0].name} />
                  <button
                    type="button"
                    className="absolute remove"
                    onClick={() => setPictures([])}
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
    </div>
  );
};

export default Uploader;
