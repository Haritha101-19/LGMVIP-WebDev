import React from 'react';
import Loader from 'react-loader-spinner';
import './loader.css';

function LoaderComp(){
    return(
        <div className="load">
            <Loader type="BallTriangle" color="#ff512f"
             height={100} width={100} timeout={6000}/>
        </div> 
    );
}

export default LoaderComp;