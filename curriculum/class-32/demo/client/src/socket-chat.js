import React from 'react';

import io from 'socket.io-client';
const url = 'http://localhost:3000';
const socket = io.connect(url);

class SocketChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      words: '',
    };
    socket.on('incoming', payload => {
      this.showWords(payload);
    });
  }

  showWords = words => {
    this.setState({ words });
  };

  handleChangeText = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    this.setState({ words: this.state.text });
    socket.emit('chat', this.state.text);
  };

  render() {
    return (
      <>
        <h2>Socket Chat Message</h2>
        <p>{this.state.words}</p>
        <form onSubmit={this.handleSubmit}>
          <input name="text" onChange={this.handleChangeText} />
        </form>
      </>
    );
  }
}

export default SocketChat;
