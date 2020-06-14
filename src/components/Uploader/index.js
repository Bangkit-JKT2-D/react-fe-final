import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import { useDispatch } from "react-redux";
import { predictThunk } from "../../modules/predict/thunk";

const Uploader = props => {
  const [pictures, setPictures] = useState([]);
  const dispatch = useDispatch();

  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };

  return (
    <div className="flex column center full">
      <ImageUploader
        {...props}
        withPreview
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
        maxFileSize={5242880}
        singleImage
        buttonClassName="btn"
        label="Max file size: 5mb, Choose between Apple, Orange, or Banana picture with format .jpg, .png, .gif"
      />
      {pictures[pictures.length - 1] &&
        pictures[pictures.length - 1].length > 0 && (
          <button
            type="button"
            className="btn"
            onClick={() =>
              dispatch(predictThunk.getResult(pictures[pictures.length - 1][0]))
            }
          >
            Predict
          </button>
        )}
    </div>
  );
};

export default Uploader;
