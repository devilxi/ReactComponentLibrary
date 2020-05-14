import React, {Component} from "react"
import event from './events'

class A extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'React'
        }
    };

    //组件加载完执行的事件
    componentDidMount() {
        this.eventEmitter= event.addListener('calMe',(data)=>{
            this.setState((preState)=>{
               return  preState.data = data;
            });
        });
    };

    render() {
        return (
            <div>
                Hello , {this.state.data}
            </div>
        );
    };
}

export default A;