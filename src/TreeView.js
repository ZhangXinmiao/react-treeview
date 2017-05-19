import React, {Component} from 'react';
import Tree from './Tree.js';

class TreeView extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className="tree-bg">
				<Tree
					onToggle = {this.props.onToggle}
					viewData = {this.props.viewData}
					defaultOpen = {false}
				/>
			</div>
		);
	}
}

export default TreeView;
