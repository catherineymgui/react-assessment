export const types = {
  FETCH_CANDIDATES_REQUESTED: "SERV/FETCH_CANDIDATES_REQUESTED",
  FETCH_CANDIDATES_SUCCESS: "SERV/FETCH_CANDIDATES_SUCCESS",
  FETCH_APPLICATION_REQUESTED: "SERV/FETCH_APPLICATION_REQUESTED",
  FETCH_APPLICATION_SUCCESS: "SERV/FETCH_APPLICATION_SUCCESS",
  FETCH_APPLICATION_FAILED: "SERV/FETCH_APPLICATION_FAILED",
  FETCH_QUESTIONS_REQUESTED: "SERV/FETCH_QUESTIONS_REQUESTED",
  FETCH_QUESTIONS_SUCCESS: "SERV/FETCH_QUESTIONS_SUCCESS"
};

export const actions = {
  fetchCandidates: () => ({ type: types.FETCH_CANDIDATES_REQUESTED }),
  updateCandidates: candidates => ({
    type: types.FETCH_CANDIDATES_SUCCESS,
    candidates
  }),
  fetchApplication: id => ({ type: types.FETCH_APPLICATION_REQUESTED, id }),
  updateApplication: application => ({
    type: types.FETCH_APPLICATION_SUCCESS,
    application
  }),
  fetchQuestions: () => ({ type: types.FETCH_QUESTIONS_REQUESTED }),
  updateQuestions: questions => ({
    type: types.FETCH_QUESTIONS_SUCCESS,
    questions
  }),
  applicationNotFound: () => ({
    type: types.FETCH_APPLICATION_FAILED
  })
};
