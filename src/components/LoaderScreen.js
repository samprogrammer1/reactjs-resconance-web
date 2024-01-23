'use client';
import { useEffect } from 'react';
import loadingPace from "./LoadingPlace";

function LoadingScreen() {
  useEffect(() => {
    setTimeout(() => {
        // Call loadingPace directly without checking Pace
        loadingPace();
      }, 1000);
  });

  return (
    <div className="hideX">
      <div className="loading">
        <span className='loading-mobile'>&nbsp;</span>
        <span className='loading-mobile'>R</span>
        <span className='loading-mobile'>E</span>
        <span className='loading-mobile'>S</span>
        <span className='loading-mobile'>O</span>
        <span className='loading-mobile'>N</span>
        <span className='loading-mobile'>A</span>
        <span className='loading-mobile'>N</span>
        <span className='loading-mobile'>C</span>
        <span className='loading-mobile'>E</span>
      </div>
      <div id="preloader"></div>
    </div>
  );
};

export default LoadingScreen;
