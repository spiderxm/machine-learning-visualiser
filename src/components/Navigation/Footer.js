import React from "react";


const navbar = () => {
    return (
        <div style={{
            bottom: "0",
            left: "0",
            position: "absolute",
            backgroundColor: "black",
            marginTop: "10px",
            width: "100%",
            padding: "5px 0",
            textAlign:"center"
        }}>
            <div >
                <a href="https://github.com/spiderxm/machine-learning-visualiser-frontend"><i className="github inverted icon huge"></i></a>
            </div>
        </div>
    )
};
export default navbar;
