// CardComponent.js (หรือ CardComponent.jsx)
import React from 'react';

const CardComponent = () => {
  return (
    <div className="card rounded-4 " style={{ width: "400px" , height:"500px" ,boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.25)"}}>
      <span className="text-center mt-3" style={{fontSize:20 , fontWeight:"lighter"}}>My name is</span>
      <span className="text-center mt-1" style={{ fontSize: 25,fontWeight:'bold'}}>Pongpisut Prasri</span>
      <div className='rounded-12 p-3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="./components/Profile.jpg" style={{ width: "300px", height: "300px", borderRadius: 12 }} alt="รายละเอียดรูปภาพ" />
      </div>

      <div className="text-center mt-2">
        <span style={{fontWeight:"bold",fontSize:20}}>Finding company for internship</span>
      </div>

      <div className='text-center'>
        <a href="aboutMe.js" className="mb-5" style={{fontSize:13,color:"#9A9595"}}>click for more detail...</a>
      </div>
      
    </div>
  );
};

export default CardComponent;
