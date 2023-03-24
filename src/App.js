import React from 'react';
import { useState } from 'react';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
//the eventhandler in this case is handleCick funtion
//the eventhandler is same for all the eventlisteners assigned
//to all tha squares
//the handleClick functiionality is a dependency of the
//element calling the function.
//normally we could resolve this in vanilla js using this
//keyword which will point to the element the event was triggered on
//in react to do the same thing we have to solve the dependency
//by passing it through the argument which means we have to invoke the function.
//here we are passing the dependency as argument but it doesn't
//work because of the following reasons:
//1) the function will get invoked when state is being used to
//render the component. 
//hence we wrap the invocation in a function body which is not being invoked immediately. [onSquareClick={() => handleClick(0)}]
  return (
    <React.Fragment>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </React.Fragment>
  );
  function Square({ value, onSquareClick }) {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }
}
