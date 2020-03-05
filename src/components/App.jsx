import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import exampleData from '../example-data/exampleData';
import Modal from './Modal.jsx';

import '../styles/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'None',
      bugs: exampleData,
      show: false
    };
    this.filterHandler = this.filterHandler.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  filterHandler(filter) {
    this.setState({ filter: filter, bugs: exampleData.filter(word => word.threatLevel === filter)}); 
  }

  toggleModal() {
    this.setState({ show: !this.state.show }, () => console.log(this.state.show))
  };

  render() {
    return (
      <div>
      <table>
        <Nav
          filterHandler={this.filterHandler}
        />
        {this.state.bugs.map((bug) => (
          <BugTile
            bugName={bug.bugName}
            bugDescription={bug.bugDescription}
            reportedBy={bug.reportedBy}
            createdDate={bug.createdDate}
            assignedTo={bug.assignedTo}
            threatLevel={bug.threatLevel}
            key={bug.bugName}
          />
        ))}
      </table>
      {this.state.test === 10 ? (<h1>React Modal</h1>) : null}
      <button onClick={this.toggleModal} value="Show Modal" >Submit A Bug Report</button>
      {this.state.show ? <Modal /> : null}
      </div>
    );
  }
}

export default App;
