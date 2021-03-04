import React from 'react';

export default class VoteHeader extends React.Component { 
    constructor(props) {
        super(props);
    }
    
    render() { 
        return <section className={'panel-heading'}>
            <h3 className={'panel-title'}>
                {this.props.title}
            </h3>
        </section>
    }
}
