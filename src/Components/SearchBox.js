import React, { Component } from "react";

const ENTER_KEY = 13;

class SearchBox extends Component {
    constructor() {
        super();

        this.handleKeyDown = this.handleKeyDown.bind(this);

    }

    handleKeyDown(event) {
        if (event.keyCode === ENTER_KEY) {
            //this.findResto();
            this.props.onEnter(this.refs.searchKeyword.value);
        }
    }

    render() {
        return (
            <div>
                <input
                    ref="searchKeyword"
                    className="form-control input-sm"
                    type="search"
                    maxLength="100"
                    placeholder="Type resto or menu name here..."
                    onKeyDown={this.handleKeyDown} 
                />
                <small>Tekan Enter untuk melakukan pencarian</small>
            </div>
        );
    }
}

export default SearchBox;
