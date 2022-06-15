import React, { useState, useEffect } from "react";
import "./BoardGame.css";
import { diagonalMove } from "./DiagonalMoves";
const Kei = (props) => {
  return <span style={{ color: "Red" }}>{props.children}</span>;
};
const Yen = (props) => {
  return <span style={{ color: "Green" }}>{props.children}</span>;
};
const Square = (props) => {
  let posItem = "";
  if (props.value / 10 > 1) {
    posItem = <Kei>{props.value % 10}</Kei>;
  }
  if (props.value / 20 > 1) {
    posItem = <Yen>{props.value % 20}</Yen>;
  }
  return (
    <button className="square" onClick={props.onClick}>
      {posItem}
    </button>
  );
};
const KeiYenBoard = () => {
  const matrix = new Array(5).fill(0).map(() => new Array(5).fill(0));
  //Fill initial Position
  matrix[1][3] = 25;
  matrix[0][0] = 11;
  const [gridStatus, setGridStatus] = useState(matrix);
  var InitialRow, InitialColumn, FinalRow, FinalColumn;

  function ConvertCoordinatesToPosition(row, column) {

    var ConversionMap = [[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[1,1],[1,2]];

    for (let i = 0; i < ConversionMap.length; i++) {

       let conRow = ConversionMap[i][0];
       let conColumn = ConversionMap[i][1];

       if (row == conRow && column == conColumn) {
         return i;
    }

  }
}

  function checkValidPath(startRow, startColumn,endRow, endColumn) {

    let start = ConvertCoordinatesToPosition(startRow,startColumn);
    let end = ConvertCoordinatesToPosition(endRow,endColumn);
    
    //Not allow to move .
    var move =[[0,6]]
    
     for(let i = 0; i < move.length; i++){
        let Initial = move[i][0];
        let Final = move[i][1];

        if (start == Initial && end == Final ) {
          return false;          
        }
     }
    return true;
  }



  function checkMoveFeasibility() {
       //Ok to move row
    if (
      InitialRow === FinalRow &&
      Math.abs(FinalColumn - InitialColumn) === 1 &&
      matrix[FinalRow][FinalColumn] === 0
    ) {
     
      alert("Ok");
      if (gridStatus[InitialRow][InitialColumn] !== 0) {
        const myMatrix = gridStatus.slice();
        myMatrix[FinalRow][FinalColumn] = myMatrix[InitialRow][InitialColumn];
        myMatrix[InitialRow][InitialColumn] = 0;
        setGridStatus(myMatrix);
      
      }
       //Ok to move column
    } else if (
      InitialColumn === FinalColumn &&
      Math.abs(FinalRow - InitialRow) === 1 &&
      matrix[FinalColumn][FinalRow] === 0
    ) {
     


      alert("Ok");
      if (gridStatus[InitialRow][InitialColumn] !== 0) {
        const myMatrix = gridStatus.slice();
        myMatrix[FinalRow][FinalColumn] = myMatrix[InitialRow][InitialColumn];
        myMatrix[InitialRow][InitialColumn] = 0;
        setGridStatus(myMatrix);
      }}

     else {

      let ret = checkValidPath(InitialRow,InitialColumn,FinalRow,FinalColumn);

      if (ret === true) {
        alert("Ok");        
      }
      else {
        alert("Not Ok");
      }


     
    }
     
  }
  function handleClick(row, column) {
    InitialRow = FinalRow;
    InitialColumn = FinalColumn;
    FinalRow = row;
    FinalColumn = column;
    console.log(row, column);
    // alert("Last Click " + InitialRow + " " + InitialColumn);
    // alert("New Click " + row + " " + column);
    // alert("Trying to Move");
    checkMoveFeasibility();
    
  }
  const DisplayRow = ({ rowitems, rowIndex }) => {
    return (
      <div>
        {rowitems.map((item, columnIndex) => (
          <Square
            value={item}
            onClick={() => handleClick(rowIndex, columnIndex)}
          ></Square>
        ))}
      </div>
    );
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {gridStatus.map((row, rowIndex) => (
        <DisplayRow rowIndex={rowIndex} rowitems={row} />
      ))}
    </div>
  );
};

export default KeiYenBoard;
