import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
  }
}

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  },[]); 
  //second argument is an array, so it won't run an infinite loop, you can declare inside the array, when the you want to fetch again

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobot = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  return !robots.length ? (
    <h1 className="tc pt5">Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobot} />
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
