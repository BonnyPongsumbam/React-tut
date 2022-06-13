import React, { useState, useEffect } from "react";
import "./BoardGame.css";
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
  matrix[2][4] = 11;
  const [gridStatus, setGridStatus] = useState(matrix);
  var InitialRow, InitialColummn, FinalRow, FinalColumn;
  function checkMoveFeasibility() {
       //Ok to move row
    if (
      InitialRow === FinalRow &&
      Math.abs(FinalColumn - InitialColummn) === 2 &&
      matrix[FinalRow][FinalColumn] === 0
    ) {
     
      alert("Ok");
      if (gridStatus[InitialRow][InitialColummn] !== 0) {
        const myMatrix = gridStatus.slice();
        myMatrix[FinalRow][FinalColumn] = myMatrix[InitialRow][InitialColummn];
        myMatrix[InitialRow][InitialColummn] = 0;
        setGridStatus(myMatrix);
        console.log(myMatrix);
      }
       //Ok to move column
    } else if (
      InitialColummn === FinalColumn &&
      Math.abs(FinalRow - InitialRow) === 2 &&
      matrix[FinalRow][FinalColumn] === 0
    ) {
     
      alert("Ok");
      if (gridStatus[InitialRow][InitialColummn] !== 0) {
        const myMatrix = gridStatus.slice();
        myMatrix[FinalRow][FinalColumn] = myMatrix[InitialRow][InitialColummn];
        myMatrix[InitialRow][InitialColummn] = 0;
        setGridStatus(myMatrix);
      }
    } else {
      alert("Not Ok");
    }
  }
  function handleClick(row, column) {
    InitialRow = FinalRow;
    InitialColummn = FinalColumn;
    FinalRow = row;
    FinalColumn = column;
    console.log(row, column);
    alert("Last Click " + InitialRow + " " + InitialColummn);
    alert("New Click " + row + " " + column);
    alert("Trying to Move");
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
