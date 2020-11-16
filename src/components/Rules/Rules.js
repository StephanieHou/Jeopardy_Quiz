import React from 'react';
import Background from '../Background/Background';
import './Rules.scss';

class Rules extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='rules'>
                <Background />
                <div className="rule-title">
                    <div>
                        <p class="rule-subtitle">
                            Do You Know The Rules Of Quipardy?
                        </p>
                        <div class="rule-buttons">
                            <a href="/board">
                                <p>Yes!</p>
                            </a>
                            <a href="/rulesinfo">
                                <p>No!</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Rules;