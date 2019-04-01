import React from "react";
import chars from "./chars";
import "./Character.css"

const SPEED_CHAR_CHANGE = 500;
const PERCENT_CHAR_CHANGE = 0.1;

class Character extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			char: this.getRandom()
		}
	}

	componentWillMount() {
		// debugger;
		if(this.props.primary || Math.random() > (1 - PERCENT_CHAR_CHANGE) ) {
			this.makeCharChanging();
		}
	}

	makeCharChanging() {
		setInterval(() => {
			this.setState({
				char: this.getRandom()
			})
		}, SPEED_CHAR_CHANGE);
	}

	getRandom() {
		return chars[Math.floor(Math.random() * chars.length)];
	}

	render() {
		const { primaryChar, opacity } = this.props;
		return(
			<div className={"character " + (primaryChar ? "primary" : "")}
					style={{ opacity }}>
				{this.state.char}
			</div>
		);
	}

}

export default Character;