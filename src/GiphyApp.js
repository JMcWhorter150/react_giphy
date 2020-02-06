import React from 'react';
import axios from 'axios';

class GiphyApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            array: []
        };
    }
    /*
    Need a button, when you click the button, it runs a helper function
    - To begin with console.log inside your helper function

    Some state
    - Make an array of strings
    
    update your helper function
    - when you click, it should add the string "hello" to the array

    Confirm that it is working correctly
    - Open the component inspector
    - Make sure that the state array should get another hello string added to it every time you click the button
    */
    render() {
        return(
            <div>
                <button onClick={(event) => {this._updateArray('hello')} }>Click Here</button>
                <h1>Stuff</h1>
            </div>
        );
    }

    _updateArray = (text) => {
        const array = [...this.state.array];
        array.push(text);
        this.setState({
            array
        })
    }
}

export default GiphyApp;