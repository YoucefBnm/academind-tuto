import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons: [
      { name: 'Josef', age: 29 },
      { name: 'Elean', age: 33 },
      { name: 'Jolanda', age: 44 }
    ]
  }

  switchNameHandler = () => {
    // console.log('Youcef Bnm !!')
    // dont do this: this.state.persons[0].name = 'Youcef Bnm'
    this.setState({
      persons: [
        { name: 'Youcef Bnm', age: 30 },
        { name: 'Elean', age: 33 },
        { name: 'Jolanda', age: 44 }
      ]
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Hey, My Name is Josef Bnm</h1>
        <button onClick={ this.switchNameHandler }>Switch Name</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age } />
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age }>My Hobbies: Killing</Person>
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age } />
      </div>
    );
  }
}

export default App;
