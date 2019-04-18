import React from "react";

import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className="f4 mt2">
        {"This Magic Brain will detect faces in your pictures. Give it a try."}
      </p>
      <div className="form-container">
        <div className="form pa4 br3 shadow-5">
          <input
            className="f5 pa2 w-70 center"
            type="text"
            placeholder="Paste image link here"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f5 link ph3 pv2 dib white bg-light-purple"
            style={{ borderWidth: 2 }}
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
