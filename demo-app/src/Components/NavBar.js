import React from "react";

class Navbar extends React.Component {
    clickTest() {
        console.log(this.props.name)
    }

    render() {

        return (
            <div>
                <div>
                    <h1>Hello, {this.props.key}</h1>
                    <h2>Hello, {this.props.name}</h2>
                    <h2>Hello, {this.props.tuoi}</h2>
                    <button onClick={() => this.clickTest()}> Test</button>
                </div>
            </div>

        )
    }
}

export default Navbar;
