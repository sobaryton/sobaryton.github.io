//we import react and the components
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function Square (props) {

		return (
			<button className="square" onClick={props.onClick}>
			{props.value}
			</button>
	);

}

class Board extends React.Component {

	renderSquare(i) {
		return (
			<Square
			value={this.props.squares[i]}
			onClick={()=>this.props.onClick(i)}
			/>
		);
	}

	render() {
		return (
			<div>
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

class Game extends React.Component {
	constructor(){
		super();
		this.state = {
			history: [{
				squares : Array(9).fill(null),
			}],
			stepNumber : 0,
			xIsNext : true,
		};
	}
	//we add the method handleClick, which store the new state of the clicked square
	handleClick(i){
		//copy the array
		const history = this.state.history.slice(0, this.state.stepNumber+1);
		const current = history[history.length-1];
		const squares = current.squares.slice();
		//if there is already a winner, the players cannot play and click on the grid anymore
		if(calculateWinner(squares) || squares[i]){
			return;
		}
		//we know that we clicked on a square, which is part of squares array
		// we change the player
		squares[i]= this.state.xIsNext?'X':'O';

		//we change the state of the array squares with the value below
		this.setState({
			history: history.concat([{
				squares: squares
			}]),
			stepNumber:history.length,
			xIsNext: !this.state.xIsNext
		});
	}
	//method jumpTo to update the state "stepnumber"
	jumpTo(step){
		this.setState({
			stepNumber:step,
			xIsNext:(step%2)? false : true,
		});
	}
	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);

		//to know the latest move
		const moves = history.map((step, move)=>{
			const desc = move ?
				'Move #' + move :
				'Game start';
			return (
				<li key={move}>
					<a href="#" onClick={()=> this.jumpTo(move)}>{desc}</a>
				</li>
			);
		});

		let status;
		if (winner){
			status = 'Winner: ' + winner;
		}else{
			status = 'Next player: ' + (this.state.xIsNext? 'X':'O');
		}
		return (
			<div className="game">
				<div className="game-board">
					<Board
						squares = {current.squares}
						onClick={(i) => this.handleClick(i)}
					/>
				</div>
				<div className="game-info">
					<div>{status}</div>
					<ol>{moves}</ol>
				</div>
			</div>
	);
	}
}

// ========================================

ReactDOM.render(
<Game />,
	document.getElementById('root')
);

function calculateWinner(squares) {
	//possible case in order to win
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i=0; i<lines.length; i++){
		const [a,b,c] = lines[i];
		if(squares[a] && squares[a] === squares[b] && squares[a]=== squares[c]){
			return squares[a];
		}
	}
	return null;
}