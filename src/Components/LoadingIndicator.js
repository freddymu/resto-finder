import React, { Component } from "react";

class LoadingIndicator extends Component {
    render() {
        let displayCss = this.props.display ? "visibile" : "invisible";

        return (
            <div
                className={displayCss}
                style={{
                    position: "fixed",

                    top: "50%",
                    left: "50%",

                    width: "220px",
                    height: "120px",

                    marginLeft: "-110px",
                    marginTop: "-60px",

                    backgroundColor: "#999999",
                    textAlign: "center",
                    zIndex: 100,
                }}
            >
                <div className="lds-facebook">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <br />
                <span>Mencari resto ...</span>
            </div>
        );
    }
}

export default LoadingIndicator;
