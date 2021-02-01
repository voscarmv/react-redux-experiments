import propTypes from 'prop-types';
import React from 'react';
import './index.css';

const Square = props => {
  const { onClick, value } = props;
  return (
    <button type="submit" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill('o'),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const { squares, xIsNext } = this.state;
    const squares2 = squares.slice();
    squares2[i] = xIsNext ? 'x' : 'o';
    this.setState(
      {
        squares: squares2,
        xIsNext: !xIsNext,
      },
    );
  }

  renderSquare(i) {
    const { squares } = this.state;
    return <Square value={squares[i]} onClick={() => { this.handleClick(i); }} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

Square.propTypes = {
  onClick: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};

export default Board;
