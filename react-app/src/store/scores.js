import { csrfFetch } from './csrf';

export const LOAD_SCORES = 'scores/loadScores';
const ADD_SCORE = 'scores/addScore';


export const loadScores = (scores) => ({
  type: LOAD_SCORES,
  scores,
});

const addScore = (score) => ({
  type: ADD_SCORE,
  score,
});

export const getScores = () => async (dispatch) => {
  const response = await fetch('/api/tetris');
  const scores = await response.json();
  dispatch(loadScores(scores));
  return response
};

export const addScores = (score) => async (dispatch) => {
  const response = await csrfFetch('/api/tetris/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(score),
  });
  const newScore = await response.json();
  dispatch(addScore(newScore));
  return newScore
};

const scoreReducer = (state = {}, action) => {
    switch(action.type) {
    case LOAD_SCORES:
      const newScore = { ...state };
      action.scores.scores.forEach(score => {
        newScore[score.id] = score;
      });
      return newScore;
      case ADD_SCORE:
      return { ...state };
      default:
      return state
  }
}

export default scoreReducer