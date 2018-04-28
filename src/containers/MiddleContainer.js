import React from 'react';
import './MiddleContainer.css';
import Start from '../components/Start';
import QuizContainer from './QuizContainer';
import CategoryContainer from './CategoryContainer';
import End from '../components/End';

const MiddleContainer = (props) => {

    // If any of the props are not yet populated (async stuff) then return null;
    if(!props.playerCategories){
      return null;
    }

    return (
      <React.Fragment>
        <p>I'm a Middle Container</p>
        <Start
          playerName={props.playerName}
          gameStatus={props.gameStatus}
        />
        <CategoryContainer
          playerName={props.playerName}
          playerCategories={props.playerCategories}
        />
        <QuizContainer
          playerName={props.playerName}
          currentQuestion={props.currentQuestion}
        />
        <End
          playerName={props.playerName}
          currentPoints={props.currentPoints}
        />
      </React.Fragment>
    )


}

export default MiddleContainer;
