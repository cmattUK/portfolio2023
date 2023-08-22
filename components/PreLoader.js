
import React from 'react';
import {useState} from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";

// Lazy load the YouTube player
function PreLoader() {
    let [color, setColor] = useState("#9f1239");
    const loading = true;
    return(
    <div  className="relative">
      <div className={`flex justify-center items-center w-full h-[800px]`}>
        <div className="mx-auto">
          <ScaleLoader
            color={color}
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    </div>
    )

  }
export default PreLoader;