const data = {
    name: '1',
    children: [
        {
            name: '11',
            children: []
        },
        {
            name: '12',
            children: [
                {
                    name: '121',
                    children: []
                }
            ]
        },
        {
            name: '13',
        }
    ]
};

const childTreeData = {
    name: "1",
    children: [
        {
            name: "11",
            children: [
                {
                    name: "111",
                    children: []
                },
                {
                    name: "112"
                }
            ]
        },
        {
            name: "12"
        }
    ]
};

import React from 'react';
import TreeView from '../../src/TreeView.js';
import {render} from 'react-dom';

var element = document.createElement("div");
document.body.appendChild(element);

render(<TreeView
    name="myComponent"
    viewData={data}
    onToggle = { () => { alert(2333); } }
    />, element);
