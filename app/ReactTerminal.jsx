import React from "react";

class ReactTerminal extends React.Component {

    constructor() {
       super();
       
       this.state = {
           prompt: "lenny > ",
           commandHistory: {}
       }
    }

    componentDidMount() {
        this.nameInput.focus();
    }

    processCommand(command) {
        // TODO: create a unique ID for this command:result pair
        //  for nwo use date integer

        const timeStamp = new Date().getTime();

        return { id: timeStamp, commands: command, result: `...coming soon...` } ;
    }

    sendCommand(event) {
        if (event.keyCode === 13) {
            const command = event.target.value;
            const commandResultPair = this.processCommand(command);

            // { ..., id: "somecommand: blahblah"}

            this.setState({
                commandHistory: {
                    ...this.state.commandHistory,    
                    [commandResultPair.id]: commandResultPair.result 
                },
            });

            this.nameInput.value = "";
            // alert(event.target.value);
        }
    }

    render() {
        // debugger;
        return (
            <div>
                {
                    Object.entries(this.state.commandHistory).map(cmd => {
                        return <div key={cmd[0]}>[{cmd[0]}] - {cmd[1]}</div>
                    })
                }

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