import React from "react";

class ReactTerminal extends React.Component {

    constructor() {
       super();
       
       this.state = {
           prompt: "lenny > ",
           commandHistory: []
       }
    }

    componentDidMount() {
        this.nameInput.focus();
    }

    sendCommand(event) {
        if (event.keyCode === 13) {
            this.setState({
                commandHistory: this.state.commandHistory.concat(event.target.value)
            })
            // alert(event.target.value);
        }
    }

    render() {
        return (
            <div>
                { this.state.commandHistory.map(c => {
                    return <div>{this.state.prompt} {c}</div>
                }) }
                <div className="terminal">
                    {this.state.prompt}
                    <span className="cursor">
                        <input type="text"
                            ref={(input) => { this.nameInput = input; }}
                            defaultValue=""
                            onKeyUp={(event) => this.sendCommand(event)} />
                        <i></i>
                    </span>
                </div>
                {/* <a href="./index2.html">OLD SITE</a> */}
            </div>
        )
    }
}

export default ReactTerminal;