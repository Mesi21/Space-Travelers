import initialMissions from './initialMissions';

const url = 'https://api.spacexdata.com/v3/missions';

const GET_MISSIONS_LOADING = 'spacetravels/GET_MISSIONS_LOADING';
const GET_MISSIONS_FAILURE = 'spacetravels/GET_MISSIONS_FAILURE';
const GET_MISSIONS_SUCCESS = 'spacetravels/GET_MISSIONS_SUCCESS';
const JOIN_MISSION = 'spacetravels/JOIN_MISSION';
const LEAVE_MISSION = 'spacetravels/LEAVE_MISSION';

export const getMissionsLoading = () => ({ type: GET_MISSIONS_LOADING });
export const getMissionsFailure = (errMessage) => ({
  type: GET_MISSIONS_FAILURE,
  payload: errMessage,
});
export const getMissionsSuccess = (missions) => ({ type: GET_MISSIONS_SUCCESS, payload: missions });
export const joinMission = (missionId) => ({ type: JOIN_MISSION, payload: missionId });
export const leaveMission = (missionId) => ({ type: LEAVE_MISSION, payload: missionId });

export const getMissions = () => (dispatch) => {
  dispatch(getMissionsLoading());
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      dispatch(getMissionsSuccess(data));
    })
    .catch((err) => {
      dispatch(getMissionsFailure(err.message));
    });
};

const missions = (state = initialMissions, action) => {
  switch (action.type) {
    case GET_MISSIONS_FAILURE:
      return { ...state, errMessage: action.payload };
    case GET_MISSIONS_LOADING:
      return { ...state, loading: true };
    case GET_MISSIONS_SUCCESS:
      return { ...state, missions: action.payload, loading: false };
    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id !== action.payload) {
            return mission;
          }
          return { ...mission, joined: true };
        }),
      };
    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id !== action.payload) {
            return mission;
          }
          return { ...mission, joined: false };
        }),
      };
    default:
      return state;
  }
};

export default missions;
