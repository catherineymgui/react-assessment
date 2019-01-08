import { types as dropdownTypes } from "../actions/dropdown";
import { types as serviceTypes } from "../actions/services";

const INITAL_STATE = {
  selectedCandidate: null,
  candidates: [],
  questions: [],
  application: {
    loaded: false,
    data: null,
    error: null
  }
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case dropdownTypes.SELECT_CANDIDATE:
      return {
        ...state,
        selectedCandidate: getSelectedUserById(
          state.candidates,
          action.selectedCandidate
        )
      };
    case serviceTypes.FETCH_CANDIDATES_REQUESTED:
      return { ...state, candidates: [] };
    case serviceTypes.FETCH_CANDIDATES_SUCCESS:
      return { ...state, candidates: action.candidates };
    case serviceTypes.FETCH_QUESTIONS_REQUESTED:
      return { ...state, questions: [] };
    case serviceTypes.FETCH_QUESTIONS_SUCCESS:
      return { ...state, questions: action.questions };
    case serviceTypes.FETCH_APPLICATION_REQUESTED:
      return {
        ...state,
        application: {
          loaded: false,
          data: null,
          error: null
        }
      };
    case serviceTypes.FETCH_APPLICATION_SUCCESS:
      return {
        ...state,
        application: {
          loaded: true,
          data: action.application,
          error: null
        }
      };
    case serviceTypes.FETCH_APPLICATION_FAILED:
      return {
        ...state,
        application: {
          loaded: false,
          data: null,
          error: "The application for this candidate was not found."
        }
      };
    default:
      return state;
  }
};

const getSelectedUserById = (candidates, id) => {
  const selectedUser = candidates.find(candidate => {
    return candidate.id === id;
  });
  return selectedUser;
};
