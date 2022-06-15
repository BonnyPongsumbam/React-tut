export const diagonalMove = (matrix) => {
  const move = [
    [(0,0),(1,1)]

   
  ];
  for (let i = 0; i < move.length; i++) {
    let [Initial,Final] = move[i];
    let [InitialRow,InitialColumn] = Initial;
    let [FinalRow,FinalColumn] = Final;

    if (
      Math.abs(FinalRow - InitialRow) === 1 &&
      Math.abs(FinalColumn - InitialColumn) === 1 &&
      matrix[FinalRow][FinalColumn] === 0
    ) {
      alert("Ok");
      if (matrix[InitialRow][InitialColumn] !== 0) {
        const myMatrix = matrix.slice();
        myMatrix[FinalRow][FinalColumn] = myMatrix[InitialRow][InitialColumn];
        myMatrix[InitialRow][InitialColumn] = 0;
        return myMatrix;
      }
    }

    {
      return true;
    }
  }
  return false;
};
