import React, {Component} from "react"
import event from './events'

class B extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const click = ()=>{
            event.emit('calMe','Word');
        };
        return (
            <div>
               <button onClick={()=>click()}>传值</button>
            </div>
        );
    };
}

export default B;