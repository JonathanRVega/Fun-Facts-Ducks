import React, { Component } from 'react'
import Fact1 from './Fact1'
import Fact2 from './Fact2'
import Fact3 from './Fact3'
import NavButtons from './NavButtons'
import { BrowserRouter, Route , Switch,} from 'react-router-dom'

class App extends Component {
  render(){
  return (
    <div className="App mainContainerDuck">
    <div className="contentContainer">
    <h1>Ducks</h1>
    <p className="textMain">Ducks are birds. Ducks are also called ‘Waterfowl’ because they are normally found
    in places where there is water like ponds, streams and rivers. Ducks are related to Geese and Swans.
    Ducks are sometimes confused with several types of unrelated water birds with similar forms, such as loons
    (an aquatic bird found in many parts of North America and northern Europe) or grebes (freshwater diving birds) and
    coots (medium-sized water birds which are members of the Rail Bird family).</p>
      <BrowserRouter>
      <NavButtons/>
      <Switch>
        <Route path='/Fact1' component={Fact1}/>
        <Route path='/Fact2' component={Fact2}/>
        <Route path='/Fact3' component={Fact3}/>
      </Switch>
      </BrowserRouter>
    </div>
    </div>
  );
}
}

export default App;
