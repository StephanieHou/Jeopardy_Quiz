import React from 'react';
import Background from '../Background/Background';
import './Home.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='homepage'>
                <Background />
                <div className="home-title">
                    <div>
                        <h1>
                            <span className="title-part ch1">Q</span>
                            <span className="title-part ch2">U</span>
                            <span className="title-part ch3">I</span>
                            <span className="title-part ch4">P</span>
                            <span className="title-part ch5">A</span>
                            <span className="title-part ch6">R</span>
                            <span className="title-part ch7">D</span>
                            <span className="title-part ch8">Y</span>
                        </h1>
                        <p class="home-subtitle">
                            Test Your Knowledge
                        </p>
                        <a href="/rules">
                            <p>Click To Play</p>
                        </a>
                    </div>
                </div>
            </div >
        )
    }
}

export default Home;
