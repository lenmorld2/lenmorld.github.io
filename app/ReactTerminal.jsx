import React from "react";

class ReactTerminal extends React.Component {

    constructor() {
       super();
       
       this.state = {
           prompt: "lenny > ",
           commandHistory: [],
           completeLog: []
       }
    }

    componentDidMount() {
        this.nameInput.focus();
    }

    processCommand(command) {
        return `>> ${command} -> ${command.toUpperCase()}`;
    }

    sendCommand(event) {
        if (event.keyCode === 13) {
            const command = event.target.value;
            const result = this.processCommand(command);

            this.setState({
                commandHistory: this.state.commandHistory.concat(command),
                completeLog: this.state.completeLog.concat(result)
            })

            this.nameInput.value = "";
            // alert(event.target.value);
        }
    }

    render() {
        return (
            <div>
                {/* commandHistory */}
                { this.state.commandHistory.map(c => {
                    return <div>{this.state.prompt} {c}</div>
                }) }

                { this.state.completeLog.map(c => {
                    return <div><p>{c}</p></div>
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