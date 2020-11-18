import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../Background/Background';
import BoardImg from '../Images/Board.png';
import WagerImg from '../Images/Wager.png';
import QuestionImg from '../Images/Question.png';
import './Rules.scss';

class RulesInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rulePosition: 1
        };
    }

    handleBack = () => {
        var position = this.state.rulePosition;

        if (position > 1) {
            position = position - 1;
        }

        this.setState({
            rulePosition: position
        });
    }

    handleNext = () => {
        var position = this.state.rulePosition;

        if (position < 5) {
            position = position + 1;
        }

        this.setState({
            rulePosition: position
        });
    }


    render() {
        const { rulePosition } = this.state;
        return (
            <div className='rules'>
                <Background />
                <div className="rule-info">
                    {rulePosition}
                    <div className={rulePosition === 1 ? "ruleslide rule1 ruledisplay" : "ruleslide rule1"}>
                        <h2>Welcome To Quipardy!</h2>
                        <p>Let's Go Over The Rules Together</p>
                    </div>
                    <div className={rulePosition === 2 ? "ruleslide rule2 ruledisplay" : "ruleslide rule2"}>
                        <h2>Rounds</h2>
                        <p>There are a total of three rounds. In the first and second round, you will see a game board as show below:</p>
                        <img src={BoardImg}></img>
                        <p>
                            There are six categories with 100 to 500 points below. To begin, you will click on one of the point squares
                            and then be prompted with a question. Each round will have different categories and questions and
                           end at an unknown time so answer as many questions quickly and correctly.</p>
                    </div>
                    <div className={rulePosition === 3 ? "ruleslide rule3 ruledisplay" : "ruleslide rule3"}>
                        <h2>Questions</h2>
                        <p>Upon clicking a point square from the board, you will be given a question with multiple choices as shown:</p>
                        <img src={QuestionImg}></img>
                        <p>
                            Answer the question before the timer below runs out. If you answer the question correctly, you will receive the number of
                            points from the square you selected. If you answer incorrectly, you will lose the number of points. Should the timer run out, your score
                            will not change.
                        </p>
                    </div>
                    <div className={rulePosition === 4 ? "ruleslide rule4 ruledisplay" : "ruleslide rule4"}>
                        <h2>Final Round</h2>
                        <p>After the second round, you will get a chance to bet your points on a final question.</p>
                        <img src={WagerImg}></img>
                        <p>Enter any amount above zero and below or equal
                        to the amount of points you have earned so far. Should you answer the question correctly, you will earn the amount of your bet. Should you answer
                        incorrectly, you will lose the anount of your bet.
                        </p>
                    </div>
                    <div className={rulePosition === 5 ? "ruleslide rule5 ruledisplay" : "ruleslide rule5"}>
                        <h2>And That's Quipardy!</h2>
                        <p>You Ready To Test Your Knowledge?</p>
                    </div>
                    <div className="ruleinfo-buttons">
                        <button onClick={this.handleBack} className={rulePosition === 1 ? "" : "ruledisplay"}>Back</button>
                        <button onClick={this.handleNext} className={rulePosition === 5 ? "" : "ruledisplay"}>{rulePosition === 1 ? "Start" : "Next"}</button>
                        <Link to='/board'>
                            <button className={rulePosition === 5 ? "ruledisplay" : ""}>Play</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default RulesInfo;