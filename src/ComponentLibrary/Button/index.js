import React, {Component} from 'react'
import style from './index.css'

class XButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: '按钮'
        }
        this.cilicEvent =this.cilicEvent.bind(this);
    };
    cilicEvent(){
        this.props.handleAdd();
    }

    render() {
        return (
            <div className='xButton' onClick={this.cilicEvent}>
                <span>{this.state.txt}</span>
            </div>
        );
    }
}

export default XButton;