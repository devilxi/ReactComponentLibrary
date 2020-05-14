import React, {Component} from 'react'
import style from "./index.css"

class Header extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="header">
                DXR组件库
            </div>
        );
    }
}

export default Header;