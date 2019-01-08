export const types = {
  SELECT_CANDIDATE: "DD/SELECT_CANDIDATE"
};

export const actions = {
  selectCandidate: id => ({
    type: types.SELECT_CANDIDATE,
    selectedCandidate: id
  })
};
