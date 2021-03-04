import React, { Component } from 'react';

export default class Son extends Component { 
    constructor() { 
        super();
        this.state = {
            num: 2
        }
    }
    render() { 
        let { num} = this.state;
        return (
            <div>
                <span>{ num}</span>
            </div>
        )
    }
}