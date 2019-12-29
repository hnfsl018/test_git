import React, { Component } from 'react';

class Content extends Component {
    state = {
        /*  Initial State */
        input: ""
    };

    /* handleChange() function to set a new state for input */
    handleChange = event => {
        const value = event.target.value;
        this.setState({
            input: value
        });
    };

    delete = e => {
        //e.preventDefault();
        this.setState({

            input: ""
        })
    }
//ทำการเก็บไฟล์ ที่กดปุ่ม Enter
    handleKeeptext = event => {
        event.preventDefault();
        const text = this.state.input;
        this.setState({
            KeepText: text
        });
    };

    edit = () => {
        // const message = this.state.input
        this.setState({input: this.state.KeepText });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleKeeptext}>
                    <div>
                        { /* Render input entered */}
                        <label>Text: {this.state.input}</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            value={this.state.input}
                            onChange={this.handleChange}
                            placeholder="Enter a text"
                        />
                    </div>
                    <div>
                        <button>Enter Text</button>
                        <button onClick={this.delete}>Delete Text</button>
                        <button onClick={this.edit}>Edit</button>
                    </div>
                </form>
                <p>Enter Text: {this.state.KeepText}</p>
            </div>
        );
    }
}
//************************************************************* */

export default Content;