import React from "react";


const navbar = () => {
    return (
        <div style={{bottom: "0",
            left:"0",
            position:"absolute",
            backgroundColor:"black",
            marginTop:"10px",
            width:"100%",
            padding:"10px 0",
            textAlign:"center"}}>
            <div >
                <h4 className="ui inverted header">&copy; spiderxm</h4>
                <a href="https://github.com/spiderxm/machine-learning-visualiser-frontend"><i className="github square icon big"></i></a>
            </div>
        </div>
    )
};
export default navbar;
