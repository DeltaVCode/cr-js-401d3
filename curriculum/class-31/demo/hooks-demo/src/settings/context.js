import React from 'react';

export const SettingsContext = React.createContext();

class SettingsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeTitleTo: this.changeTitleTo,
      title: 'My Amazing Website',
    };
  }

  changeTitleTo = title => {
    this.setState({ title });
  };

  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsProvider;
