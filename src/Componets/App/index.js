import React, {Component} from 'react'
import style from "./index.css"
import Header from "../Header"
import LeftContainer from "../LeftContainer"
import MainContainer from "../MainContainer"

class Index extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <Header/>
                <div className="app-container">
                    <LeftContainer/>
                    <MainContainer/>
                </div>
            </div>
        );
    }
}

export default Index;