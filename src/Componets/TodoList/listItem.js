import React from "react";
import listItem from './style/listItem.css'
class ListItem extends React.Component {
    constructor(props) {
        super(props);
        //改变方法的指针
        this.handleDel = this.handleDel.bind(this);
    }
    handleDel(){
        this.props.handleDel(this.props.index);
    };
    render() {
        return (
            <li className='listItem-li' onClick={this.handleDel}>{this.props.value}</li>
        );
    }
}

export default ListItem;