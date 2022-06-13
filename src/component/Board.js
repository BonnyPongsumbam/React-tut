import React, { useState } from "react";

export const Board = () => {
  const matrix = new Array(5).fill(0).map(() => new Array(5).fill(0));

  const [kei, setKei] = useState({ keiInitialPosition: matrix[0][0]=21 });
  const [yen, setYen] = useState({ yenInitialPosition: matrix[0][1]=15 });

  // console.log(kei);
  // console.log(yen);

  // const keiMove =()=>{
  
  // }

  const handleClick = () => {
  setKei()
 matrix[0].splice(2,1,matrix[0][0]=21 );
 matrix[0].splice(0,1,matrix[0][0]=0 );
 
  
 console.log(matrix);
    
  }
   
    
  
  console.log(matrix);
   return (
    <div style={{ textAlign: "center" }}>
      <div className="board-row">
        <button>{matrix[0][0]}</button>
        <button>{matrix[0][1]}</button>
        <button onClick={handleClick}>{matrix[0][2]}</button>
        {/* {matrix[0][3]}
        {matrix[0][4]} */}
      </div>
      {/* <div className="board-row">
        {matrix[1][0]}
        {matrix[1][1]}
        {matrix[1][2]}
        {matrix[1][3]}
        {matrix[1][4]}
      </div>
      <div className="board-row">
        {matrix[2][0]}
        {matrix[2][1]}
        {matrix[2][2]}
        {matrix[2][3]}
        {matrix[2][4]}
      </div>
      <div className="board-row">
        {matrix[3][0]}
        {matrix[3][1]}
        {matrix[3][2]}
        {matrix[3][3]}
        {matrix[3][4]}
      </div>
      <div className="board-row">
        {matrix[4][0]}
        {matrix[4][1]}
        {matrix[4][2]}
        {matrix[4][3]}
        {matrix[4][4]}
      </div> */}
    </div>
  );
};
