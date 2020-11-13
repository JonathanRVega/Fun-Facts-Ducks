import React, { Component } from 'react'
import { Link ,withRouter } from 'react-router-dom'

class NavButtons extends Component {
  render(){
  return (
    <div className="App buttonContainer">
        <Link to='/Fact1'>
        <a className="waves-effect waves-light btn buttonMargin">1st Fact</a>
        </Link>
        <Link to='/Fact2'>
        <a className="waves-effect waves-light btn buttonMargin">2nd Fact</a>
        </Link>
        <Link to='/Fact3'>
        <a className="waves-effect waves-light btn buttonMargin">3rd Fact</a>
        </Link>
    </div>
  );
}
}

export default withRouter(NavButtons);
