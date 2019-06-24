import React from 'react';

import './app.scss';

const Header = () => {
  return (
    <header>
      <h1>New header</h1>
    </header>
  );
};

const Footer = () => <footer>&copy; 2018 Code Fellows</footer>;

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: 'nothing to see here',
    };
  }

  handleWord = e => {
    let words = e.target.value;
    this.setState({ words });
  };

  handleClick = e => {
    e.preventDefault();

    this.setState(state => ({
      words: state.words
        .split('')
        .reverse()
        .join(''),
    }));
  };

  render() {
    return (
      <div>
        <h3>{this.state.words}</h3>
        <input onChange={this.handleWord} />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
