import _ from 'lodash';
import React from 'react';
import Character from "./Character"
import './Line.css';

const CHAR_HEIGHT = 35; // px, depends on Char font-size
const CHAR_WIDTH = 18;
const NUM_CHARS_FOCUS = 5;

class Line extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			lineLength: 0,
			yPos: 0,
			xPos: 0,
			transition: '',
			transform: ''
		}
	}

	componentDidMount() {
		const startTime = _.random(300, 1000);

		// setTimeout only executes once
		// TODO: use setInterval
		// setInterval(() => {
		setTimeout(() => {

			let newHeight;
			newHeight = window.innerHeight + this.state.yPos;
			// console.log("height", window.innerHeight);
			// console.log("pos: ", this.state.yPos);

			// if (this.state.yPos >= window.innerHeight) {
			// 	newHeight = 0;
			// } else {
			// 	newHeight = window.innerHeight + this.state.yPos;
			// }
			// console.log(window.innerHeight);
			// console.log("pos", newHeight);

			// if (newHeight >= window.innerHeight) {
				// newHeight = 0;
				// console.log("done");
				// newHeight = newHeight - 1500;			// stops at the exact spot
				// newHeight = ;			// stops at the exact spot
			// }

			this.setState({
				yPos: -newHeight,
			});
		}, startTime)
	}

	// componentWillMount() {
	componentWillMount() {
		// debugger;
		// zoom-in/out some lines
		const scaleRatio = _.random(0.8, 1.4);

		// min line height
		const minLineHeight = _.round(window.innerHeight / CHAR_HEIGHT);
		const lineLength = _.random(minLineHeight, minLineHeight * 2);

		// get line above at start
		// const yPos = 0;
		const yPos = (lineLength + 1) * CHAR_HEIGHT * scaleRatio * 1.5;

		// make columns
		const stepCount = _.round((window.innerWidth - 20) / CHAR_WIDTH);
		const xPos = _.random(0, stepCount) * CHAR_WIDTH;

		// divide by scaleRatio to create effect of farther -> slower
		const delay = _.random(5, 10) / scaleRatio;
		const transition = ` top linear ${delay}s`;
		const transform = `scale(${scaleRatio})`;

		console.log("pos", this.state.yPos);

		this.setState({
			lineLength,
			yPos,
			xPos,
			transition,
			transform
		});
	}

	componentDidUpdate() {
		console.log(this.props.round);
		// this.forceUpdate();
	}

	render() {
		// console.log("pos", this.state.yPos);

		const line = _.times(this.state.lineLength).map((x, i) => (
			// set opacity for last NUM_CHARS_FOCUS
			// last one will be opaque, first will be transparent
			<Character 
				key={i}
				opacity={i <= NUM_CHARS_FOCUS ? i / NUM_CHARS_FOCUS : 1 }
			/>
		));


		const { yPos, xPos, transition, transform } = this.state;

		// console.log(this.props.round);

		const styles = {
			left: xPos,
			top: -yPos,
			transition,
			transform
		}

		// last character is Primary to show fully

		// <div className="always">{this.props.round}</div>

		return(
			<div className="code" style={styles}>
				{line}
				<Character primary="true" />
			</div>
		);
	}

}

export default Line;