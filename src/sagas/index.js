import { call, takeLatest, put, all, select } from "redux-saga/effects";

import {
  types as serviceTypes,
  actions as serviceActions
} from "../actions/services";

import {
  types as dropdownTypes,
  actions as dropdownActions
} from "../actions/dropdown";
import {
  candidatesService,
  getApplicationService,
  getQuestionService
} from "../api/services";

function* fetchCandidates() {
  try {
    const candidates = yield call(candidatesService);
    yield put(serviceActions.updateCandidates(candidates));
  } catch (e) {
    console.log("error", e);
  }
}

function* fetchQuestions() {
  try {
    const questionResponse = yield call(getQuestionService);
    if (questionResponse.length > 0) {
      const questionObj = {};
      questionResponse.forEach(question => {
        questionObj[question.id] = question.question;
      });
      yield put(serviceActions.updateQuestions(questionObj));
    }
  } catch (e) {
    console.log("error", e);
  }
}

function* fetchApplicationsForSelectedUser() {
  const selectedCandidate = yield select(state => {
    return state.selectedCandidate;
  });
  const id = selectedCandidate.applicationId;
  try {
    const application = yield call(getApplicationService, id);
    if (application.length > 0) {
      yield put(serviceActions.updateApplication(application[0]));
    } else {
      yield put(serviceActions.applicationNotFound());
    }
  } catch (e) {
    console.log("error", e);
  }
}

export default function* root() {
  yield takeLatest(serviceTypes.FETCH_CANDIDATES_REQUESTED, fetchCandidates);
  yield takeLatest(
    dropdownTypes.SELECT_CANDIDATE,
    fetchApplicationsForSelectedUser
  );
  yield takeLatest(serviceTypes.FETCH_QUESTIONS_REQUESTED, fetchQuestions);
}
