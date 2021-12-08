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

