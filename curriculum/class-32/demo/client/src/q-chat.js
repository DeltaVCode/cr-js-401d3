import React from 'react';
import Q from '@nmq/q/client';
const chat = new Q('chat');

class QChat extends React.Component {
  constructor(props) {
    super(props);
    chat.subscribe('message', this.incoming);
    this.state = {
      message: '',
      messages: [],
    };
  }

  incoming = payload => {
    this.setState({ messages: [...this.state.messages, payload] });
  };

  handleChange = e => {
    this.setState({message: e.target.value});
  };

  sendMessage = e => {
    e.preventDefault();
    e.target.reset();
    Q.publish('chat', 'message', this.state.message);
  };

  render() {
    return (
      <React.Fragment>
        <h2>Q Chat Messages</h2>
        <form onSubmit={this.sendMessage}>
          <input onChange={this.handleChange} type="text" />
        </form>
        <ul>
          {this.state.messages.map((message, i) => (
            <li key={i}>
              {message}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default QChat;
