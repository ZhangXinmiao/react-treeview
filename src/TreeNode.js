import React, { Component } from 'react';

class TreeNode extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.onToggle();
    }

    handleToogle = (e) => {
        console.log(e.target);
    }

    render () {
        let isHead = this.props.isHead;
        return (
            <div key={Math.random()} onClick={isHead ? this.handleToogle : this.handleClick} >
                {this.props.nodeName}
            </div>
        );
    }
}

export default TreeNode;
