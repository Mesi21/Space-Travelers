import initialMissions from './initialMissions';

const GET_MISSIONS = 'spacetravels/GET_MISSIONS';
const GET_MISSIONS_LOADING = 'spacetravels/GET_MISSIONS_LOADING';
const GET_MISSIONS_FAILURE = 'spacetravels/GET_MISSIONS_FAILURE';
const GET_MISSIONS_SUCCESS = 'spacetravels/GET_MISSIONS_SUCCESS';

export const getMissionsLoading = () => ({type: GET_MISSIONS_LOADING});
export const getMissionsFailure = (errMessage) => ({type: GET_MISSIONS_FAILURE, payload: errMessage});
export const getMissionsSuccess = (missions) => ({type: GET_MISSIONS_SUCCESS, payload: missions});

const missions = (state = initialMissions, action) => {
  switch(action.type) {
    case GET_MISSIONS_FAILURE:
      return {...state, errMessage: action.payload};
    case GET_MISSIONS_LOADING:
      return {...state, loading: true};
    case GET_MISSIONS_SUCCESS:
      return {...state, missions: action.payload, loading: false};
    default:
      return state;
  }

}