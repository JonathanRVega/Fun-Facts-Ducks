import React, { Component } from 'react'
import Pond from './img/pond.png'
import Feather from './img/feather.png'

class Fact1 extends Component {

    render() {
        return (
            <div>
            <div className="pondRow">
                <img className="pond" src={Pond} alt=""></img>
                <img className="feather" src={Feather} alt=""></img>
                </div>
                <p className="textMain">All ducks have highly waterproof feathers as a result of an intricate feather structure
                and a waxy coating that is spread on each feather while preening. A duck's feathers are so
                waterproof that even when the duck dives underwater, its downy underlayer of feathers right
                next to the skin will stay completely dry. The uropygial gland at the base of the tail produces
                the waxy oil that coats feathers so well, and many other birds also have the same gland.</p>
            </div>
        )
    }
}

export default Fact1