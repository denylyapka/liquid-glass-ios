import React, { useRef, useState } from 'react';
import './IOSGlass.css';
import { GlassWithRefraction } from './GlassWithRefraction';

export const IOSGlass = ({ children, baseWidth = 400 }) => {
  const [show3d, setShow3d] = useState(false);
  const glassRef = useRef(null);

  return (
    <>
      <div 
        ref={glassRef}
        className="ios-glass"
        style={{ '--base-width': `${baseWidth}px`, width: `${baseWidth}px` }}
        onClick={() => setShow3d(!show3d)}
      >

        <div className="glass-inner">
          {children}
        </div>
      </div>
      
      {show3d && (
        <div className="threejs-overlay">
          <GlassWithRefraction />
          <button onClick={() => setShow3d(false)}>Close 3D</button>
        </div>
      )}
    </>
  );
};