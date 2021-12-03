const ADD_CONTACT = 'contact/ADD_CONTACT';

const addContact = (message) => ({
  type: ADD_CONTACT,
  message,
});

export const sendMessage = (message) => async (dispatch) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  });
  const sentMessage = await response.json();
  dispatch(addContact(message));
  return sentMessage
};

// const scoreReducer = (state = {}, action) => {
//     switch(action.type) {
//     case LOAD_SCORES:
//       const newScore = { ...state };
//       action.scores.scores.forEach(score => {
//         newScore[score.id] = score;
//       });
//       return newScore;
//       case ADD_SCORE:
//       return { ...state };
//       default:
//       return state
//   }
// }

// export default scoreReducer