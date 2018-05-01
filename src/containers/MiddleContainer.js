import React from 'react';
import './MiddleContainer.css';
import Start from '../components/Start';
import Category from '../components/Category';
import QuizContainer from './QuizContainer';
import End from '../components/End';

const MiddleContainer = (props) => {

    // If any of the props are not yet populated (async stuff) then return null;
    if(!props.playerCategories){
      return null;
    }

    if(props.gameStatus === 0) {
      return (
        <React.Fragment>
          <div className="middle-container">
            <Start
              playerName={props.playerName}
              handlePlayerNameKeyUp={props.handlePlayerNameKeyUp}
              handlePlayerNameSubmit={props.handlePlayerNameSubmit}
            />
          </div>
        </React.Fragment>
      )
    }
    else if(props.gameStatus === 1) {
      return (
        <React.Fragment>
          <div className="middle-container">
            <Category
              playerName={props.playerName}
              playerCategories={props.playerCategories}
              handleCategorySelect={props.handleCategorySelect}
              handleCategoryRandomise={props.handleCategoryRandomise}
              currentDifficultyValue={props.currentDifficultyValue}
            />
          </div>
        </React.Fragment>
      )
    }
    else if(props.gameStatus === 2) {
      return (
        <React.Fragment>
          <div className="middle-container">
            <QuizContainer
              playerName={props.playerName}
              currentQuestion={props.currentQuestion}
              handleResult={props.handleResult}
            />
          </div>
        </React.Fragment>
      )
    }
    else {
      return (
        <React.Fragment>
          <div className="middle-container">
            <End
              playerName={props.playerName}
              currentPoints={props.currentPoints}
              handleEndClick={props.handleEndClick}
            />
          </div>
        </React.Fragment>
      )
    }

}

export default MiddleContainer;
