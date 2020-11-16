import React, { Component } from 'react'
import DomesticDuck1 from './img/domesticduck1.png'
import DomesticDuck2 from './img/domesticduck2.png'
import DomesticDuck3 from './img/domesticduck3.png'

class Fact3 extends Component {

    render() {
        return (
            <div>
                <div className="duckRow">

                <div>
                <img className="imageAlign" src={DomesticDuck1} alt=""></img>
                <h4 className="textDuck">Pekin</h4>
                </div>

                <div>
                <img className="imageAlign" src={DomesticDuck2} alt=""></img>
                <h4 className="textDuck">Muscovy</h4>
                </div>

                <div>
                <img className="imageAlign" src={DomesticDuck3} alt=""></img>
                <h4 className="textDuck">Mallard</h4>
                </div>

                </div>
                <p>Ducks have been domesticated as pets and farm animals for more than 500 years, and all
                domestic ducks are descended from either the mallard or the Muscovy duck. Mallards, especially,
                are easy to crossbreed with other types of ducks, and mallards often hybridize with all types of
                ducks at local ponds. This can lead to very unusual feather shapes and color patterns that can be
                confusing to identify.</p>
            </div>
        )
    }
}

export default Fact3