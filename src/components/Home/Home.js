import React from "react";
import './Home.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className='homepage'>
                <div className="home-bg">
                </div>
                <div className="home-title">
                    <div>
                        <h1>
                            <span className="title-part ch1">Q</span>
                            <span className="title-part ch2">U</span>
                            <span className="title-part ch3">I</span>
                            <span className="title-part ch4">Z</span>
                        </h1>
                        <p class="home-subtitle">Quiz Subtitle</p>
                        <a href="/">
                            <p>Start Quiz</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;