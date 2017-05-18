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
        let childDom = e.target.parentNode.lastChild;
        console.log(childDom);
        let styleStr = childDom.getAttribute("class");
        if(styleStr.indexOf("close") === -1) {
            console.log(1, styleStr);
            styleStr += " close";
        }else {
            console.log(2, styleStr);
            // styleStr.replace("close", "");
            styleStr = "";
            console.log(2, styleStr);
        }
        childDom.className = styleStr;
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
