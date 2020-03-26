// pages/TestDynamicRouter.js
import React from 'react';
import fetch from 'isomorphic-unfetch';

class TestDynamicRouterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pid: props.pid,
            clickParam: undefined
        };
    }

    handlerClickDynamicRouter = async(e) => {
        e.preventDefault()

        const clickParam = Math.floor(Math.random() * 10);
        this.setState({
            clickParam
        });
        const res = await fetch(`/api/post/${clickParam}`);
        const response = await res.json();

        this.setState({
            pid: response && response.text
        });
    };

    render() {
        return (
            <div>
                <button className='common_button' onClick={this.handlerClickDynamicRouter} title='/post/[id]'>dynamic router</button>
                { this.state.clickParam != undefined ? <h2>current api path is: /api/post/{this.state.clickParam}</h2> : '' }
                { this.state.pid != undefined ? <h1>response is: <i>{this.state.pid}</i></h1> : '' }
            </div>
        );
    }
}

const TestDynamicRouter = () => {
    return (
        <div id="testDynamicRouter">
            <TestDynamicRouterComponent />
        </div>
    )
}

export default TestDynamicRouter;
