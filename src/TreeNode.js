import React, { Component } from 'react';

class TreeNode extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.onToggle();
    }

    render () {
        return (
            <div key={Math.random()} onClick={this.handleClick}>
                {this.props.nodeName}
            </div>
        );
    }
}

export default TreeNode;
