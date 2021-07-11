import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

// Component class has render() and life-cycle methods.
class App extends Component {
  constructor() {
    super(); // calls ctor on Component class, which gives access to this.state

    this.state = {
      //string: 'Hello!'
      monsters: [], // initial state
      searchField: ''
    };

    // set context of 'this' for handleChange() to App component
    // Without this binding, 'this' in this.setState in handleChange() will be undefined!
    // This is verbose way! 
    // Preferred way: Use ES6 'arrow' fns that auto set context of 'this' to whatever declared it!
    // this.handleChange = this.handleChange.bind(this);
  }

  /*
  render() {
    return (
      <div className="App">        
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: 'Hello Japps!'})}>Change Text</button>
      </div>
    );
  }
  */

  // Lifecycle Method
  // When Component gets rendered initially, make an API call, convert response to JSON
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  // Rather than App having responsibility to map the list; CardList component should do listing of cards.
  /*
  render() {
    return (
      <div className='App'>
        <CardList>
          {
            this.state.monsters.map(monster => (<h1 key={monster.id}> { monster.name } </h1>))
          }
        </CardList>        
      </div>
    );
  }
  */

  // Pass 'state' to CardList as props; if state changes, props change & component re-renders
  /*
  render() {
    const { monsters, searchField } = this.state; // de-structuring syntax
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ); // case-insensitive search

    return (
      <div className='App'>
        <input type='search' placeholder='search monsters' 
          onChange={e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filteredMonsters} />
      </div>
    ); // CardList monsters={this.state.monsters}
  }
  */

  // Our-defined method, for reusability
  /*
  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }
  */

  // Rather than defining the fn as above, use ES6 arrow fn!
  // It auto binds context of 'this' to whatever defined the fn!
  // So define any class methods using this syntax!
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  }

  // user enters search field => onChange => setState => render() => filteredMonsters
  // So dynamically updates the filtered list display!
  // Replace <input> with a functional component for reusability.
  render() {
    const { monsters, searchField } = this.state; // de-structuring syntax
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    // anonymous fn passed to handleChange prop
    // 'this' keyword: points to context of "class" component
    return (
      <div className='App'>
        <h1> Monsters Rolodex </h1>
        <SearchBox placeholder='search monsters' 
          handleChange={this.onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }  

}

export default App;
