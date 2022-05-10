const ADD_RESERVATION = './space-travelers/rockets/ADD_RESERVATION';
const DELETE_RESERVATION = './space-travelers/rockets/DELETE_RESERVATION';

const stateInit = [];

export const addReservation = (payload) => ({
  type: ADD_RESERVATION,
  payload,
});

export const deleteReservation = (payload) => ({
  type: DELETE_RESERVATION,
  payload,
});

const rocketsReducer = (state = stateInit, action) => {
  switch (action.type) {
    case ADD_RESERVATION:
      return [...state, action.payload];
    case DELETE_RESERVATION:
      return state.filter((rocket) => rocket.id !== action.payload.id);
    default:
      return state;
  }
};

export default rocketsReducer;
