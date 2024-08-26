"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase";
import { Camera } from 'react-camera-pro';

const CameraUpload = () => {
    const camera = useRef(null);
    const [image, setImage] = useState(null);
  
    const capturePhoto = () => {
      const imageSrc = camera.current.takePhoto();
      setImage(imageSrc);
    };
  
    return (
      <div>
        <Camera ref={camera} />
        <button onClick={capturePhoto}>Take photo</button>
        {image && <img src={image} alt="Captured photo" />}
      </div>
    );
  };
  
  export default CameraUpload;