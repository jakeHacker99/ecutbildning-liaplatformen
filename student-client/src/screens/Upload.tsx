import React, { useState } from "react";
import "./FileUpload.css";

const Upload = () => {
  const [profileImg, setProfileImg] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  const handleChange = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        // @ts-ignore
        setProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="page">
      <div className="container">
        <div className="img-holder">
          <img src={profileImg} alt="" id="img" className="img" />
        </div>
        <input
          type="file"
          accept="image/*"
          name="image-upload"
          id="input"
          onChange={handleChange}
        />
        <div color="primary" >
          <label className="image-upload" htmlFor="input" style={{background:"primary"}}>
            updatera bild
          </label>
	
        </div>
      </div>
    </div>
  );
};

export default Upload;
