import React, { Component } from 'react';
import TreeNode from './TreeNode';
import './index.less';

class Tree extends Component {
    constructor(props) {
        super(props);
    }

    renderTree = (childTreeData) => {
        let treeDom = [];
        treeDom.push(<TreeNode key={Math.random()} nodeName={childTreeData.name} onToggle={this.props.onToggle}/>);
        if("children" in childTreeData) {
            let children = childTreeData.children;
            for(let i = 0; i < children.length; i++) {
                if(!"children" in children[i]) {
                    treeDom.push (<TreeNode key={Math.random()} nodeName={children[i].name} onToggle={this.props.onToggle}/>);
                }else {
                    treeDom.push (<Tree key={Math.random()} viewData={children[i]} onToggle={this.props.onToggle}/>);
                }
            }
        }
        return (
            <div>
                {treeDom}
            </div>
        );
    }

    render () {
        return (
            <div className="child-node">
                {this.renderTree(this.props.viewData)}
            </div>
        );
    }
}

export default Tree;
