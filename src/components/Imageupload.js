import React, {Component} from "react";
import axios from "axios";
import { Input} from "semantic-ui-react";

class Imageupload extends Component {
    state = {
        imageURL: '',
        firebaseID : '23nekfksn'
    };

    handleUploadImage = (ev) => {
        ev.preventDefault();
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.state.firebaseID + ".png");
        axios.post("/upload", data).then((response) => {
            console.log(response)
            this.setState({imageURL:response.data})
        });
    }

    render() {
        const style = {
            border: "1px solid grey",
            borderRadius: "20px",
            padding: "2rem",
            marginTop: "4rem",
            boxShadow: "0px 2px 11px 6px rgba(0,0,0,.3)"
        }
        return (
            <div className="ui container left aligned" style={style}>
            <form onSubmit={this.handleUploadImage}>

                <div>
                    <input ref={(ref) => {
                        this.uploadInput = ref;
                    }} type="file"
                           accept={"image/png"}
                           required
                    />
                </div>

                <br/>
                <div>
                    <button>Upload</button>
                </div>
                <img class="ui medium circular image" src={this.state.imageURL} alt="img"/>
            </form>
            </div>
        );
    }
}


export default Imageupload