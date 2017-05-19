import React, { Component } from 'react';
import TreeNode from './TreeNode';
import './index.less';

class Tree extends Component {
    constructor(props) {
        super(props);
    }

    renderTree = (childTreeData) => {
        let treeDom = [];
        let childDom = [];
        if("children" in childTreeData) {
            treeDom.push(<TreeNode key={Math.random()} nodeName={childTreeData.name} onToggle={this.props.onToggle} isHead={true} defaultOpen={this.props.defaultOpen}/>);
            let children = childTreeData.children;
            for(let i = 0; i < children.length; i++) {
                if(!"children" in children[i]) {
                    childDom.push (<TreeNode key={Math.random()} nodeName={children[i].name} onToggle={this.props.onToggle} isHead={false} />);
                }else {
                    childDom.push (<Tree key={Math.random()} viewData={children[i]} onToggle={this.props.onToggle} defaultOpen={this.props.defaultOpen}/>);
                }
            }
        }else {
            treeDom.push(<TreeNode key={Math.random()} nodeName={childTreeData.name} onToggle={this.props.onToggle} isHead={false}/>)
        }
        return (
            <div>
                {treeDom}
                <div className=" close">
                    {childDom}
                </div>
            </div>
        );
    }

    render () {
        return (
            <div className="child-node tree-bg">
                {this.renderTree(this.props.viewData)}
            </div>
        );
    }
}

export default Tree;
