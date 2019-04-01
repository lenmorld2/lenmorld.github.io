import React from "react";
import _ from 'lodash';

import Line from "./Line";
import "./Matrix.css";

const LINES_COUNT = 100;
// const LINES_COUNT = 5;

class Matrix extends React.Component {

	constructor() {
		super();
		this.state = {
			round: 0,
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({ round: this.state.round + 1 });
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const lines = _.times(LINES_COUNT).map(i => <Line key={i} round={this.state.round} />);
		return <div className="matrix">{lines}</div>;
	}
}

export default Matrix;


