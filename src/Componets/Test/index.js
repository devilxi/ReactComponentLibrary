import A from '../../Communication/ComponentA'
import B from '../../Communication/ComponentB'
import React, {Component} from "react";

class Test extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <A></A>
                <B></B>
            </div>
        )
    }
}

export default Test;