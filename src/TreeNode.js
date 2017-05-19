import React, { Component } from 'react';

class TreeNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontClass: "glyphicon glyphicon-menu-right"
        };
    }

    handleClick = () => {
        this.props.onToggle();
    }

    handleToogle = (e) => {
        console.log(e.target);
        let childDom = e.target.parentNode.lastChild;
        let fontClass = "";
        console.log(childDom);
        let styleStr = childDom.getAttribute("class");
        if(styleStr.indexOf("close") === -1) {
            console.log(1, styleStr);
            styleStr += " close";
            fontClass = "glyphicon glyphicon-menu-right";
        }else {
            console.log(2, styleStr);
            styleStr = "";
            console.log(2, styleStr);
            fontClass = "glyphicon glyphicon-menu-down"
        }
        childDom.className = styleStr;
        this.setState({
            fontClass: fontClass 
        });
    }

    render () {
        let isHead = this.props.isHead;
        return (
            <div key={Math.random()} onClick={isHead ? this.handleToogle : this.handleClick} >
                {
                    isHead &&
                    <i className={this.state.fontClass}></i>
                }
                {this.props.nodeName}
            </div>
        );
    }
}

export default TreeNode;
