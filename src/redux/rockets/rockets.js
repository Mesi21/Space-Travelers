const ADD_RESERVATION = './space-travelers/rockets/ADD_RESERVATION';
const DELETE_RESERVATION = './space-travelers/rockets/DELETE_RESERVATION';
const GET_ROCKETS = './space-travelers/rockets/GET_ROCKETS';
const url = 'https://api.spacexdata.com/v3/rockets';

const stateInit = [];

export const addReservation = (payload) => ({
  type: ADD_RESERVATION,
  payload,
});

export const getRockets = (payload) => ({
  type: GET_ROCKETS,
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
    case GET_ROCKETS:
      return action.payload;
    case DELETE_RESERVATION:
      return state.filter((rocket) => rocket.id !== action.payload.id);
    default:
      return state;
  }
};

export const getRocketList = () => async (dispatch) => {
  const rocketList = await fetch(`${url}`)
    .then((resp) => resp.json());
  const infoArr = [];
  rocketList.map((rocket) => infoArr.push({
    id: rocket.id,
    desc: rocket.description,
    name: rocket.rocket_name,
    img: rocket.flickr_images[0],
  }));
  console.log(`${infoArr[0].desc} from reducer`);
  dispatch(getRockets(infoArr));
};

export default rocketsReducer;
