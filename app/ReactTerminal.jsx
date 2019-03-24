import React from "react";

class ReactTerminal extends React.Component {

    componentDidMount() {
        this.nameInput.focus();
    }

    sendCommand(event) {
        if (event.keyCode === 13) {
            alert(event.target.value);
        }
    }

    render() {
        return (
            <div>
                <div className="terminal">
                    {"lenny > "}
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