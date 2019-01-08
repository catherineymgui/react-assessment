import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CarCard from "./components/CarCard";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { connect, Provider } from "react-redux";
import configStore from "./config/store";
import { actions as dropdownActions } from "./actions/dropdown";
import { actions as serviceActions } from "./actions/services";
import ReactPlayer from "react-player";

class App extends Component {
  componentDidMount() {
    this.props.fetchCandidates();
    this.props.fetchQuestions();
    //this.props.fetchApplication(171);
  }

  _onSelect = selectedValue => {
    this.props.selectCandidate(selectedValue.value);
  };

  render() {
    console.log(this.props);
    let dropDownOptions = [];
    if (this.props.candidates) {
      dropDownOptions = this.props.candidates.map(candidate => {
        return { value: candidate.id, label: candidate.name };
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Knockri</h1>
          <Dropdown
            className="App-dropdown"
            options={dropDownOptions}
            onChange={this._onSelect}
            value={
              this.props.selectedCandidate
                ? this.props.selectedCandidate.name
                : null
            }
            placeholder="Select a candidate"
          />
        </header>
        <div className="App-application">
          {!this.props.application.loaded
            ? null
            : this.props.application.data.videos.map(video => {
                console.log("video", video.question);
                return (
                  <div key={video.questionId} className="App-question">
                    <h2 className="App-questionText">
                      {this.props.questions[video.questionId]}
                    </h2>
                    <ReactPlayer
                      className="App-videoPlayer"
                      url={video.src}
                      controls
                    />
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const AppWithRedux = connect(
  mapStateToProps,
  { ...serviceActions, ...dropdownActions }
)(App);

export default () => {
  const { store } = configStore();

  return (
    <Provider store={store}>
      <AppWithRedux />
    </Provider>
  );
};
