import React from 'react';
import Background from '../Background/Background';
import './Rules.scss';

class RulesInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='rules'>
                <Background />
                <div className="rule-info">
                    <p>Rules</p>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RulesInfo;