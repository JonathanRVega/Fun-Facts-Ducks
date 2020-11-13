import React, { Component } from 'react'
import duck1 from './img/Duck1.png'
import duck2 from './img/Duck2.png'
import duck3 from './img/Duck3.png'
import duck4 from './img/Duck4.png'
import duck5 from './img/Duck5.png'
import duck6 from './img/Duck6.png'
import duck7 from './img/Duck7.png'
import duck8 from './img/Duck8.png'
import duck9 from './img/Duck9.png'
import duck10 from './img/Duck10.png'
import duck11 from './img/Duck11.png'
import duck12 from './img/Duck12.png'

class Fact2 extends Component {

    render() {
        return (
            <div>
                <div className="duckRow">

                <div>
                    <img className="imageAlign" src={duck1}></img>
                    <p className="textDuck">Rouen</p>
                </div>

                <div>
                    <img className="imageAlign" src={duck2}></img>
                    <p className="textDuck">Pekin duck</p>
                </div>
                
                <div>
                    <img className="imageAlign" src={duck3}></img>
                    <p className="textDuck">Hook bill</p>
                </div>

                <div>
                    <img className="imageAlign" src={duck4}></img>
                    <p className="textDuck">Blue Swedish</p>
                </div>

                </div>

                <div className="duckRow">

                <div>
                    <img className="imageAlign" src={duck5}></img>
                    <p className="textDuck">Saxony</p>
                </div>

                <div>
                    <img className="imageAlign" src={duck6}></img>
                    <p className="textDuck">Muscovy</p>
                </div>

                <div>
                    <img className="imageAlign" src={duck7}></img>
                    <p className="textDuck">Indian runner</p>
                </div>

                <div>
                    <img className="imageAlign" src={duck8}></img>
                    <p className="textDuck">Khaki campbell</p>
                </div>

                </div>

                <div className="duckRow">

                <div>
                    <img className="imageAlign" src={duck9}></img>
                    <p className="textDuck">Silver bantam</p>
                </div>

                <div>
                    <img className="imageAlign" src={duck10}></img>
                    <p className="textDuck">Crested</p>
                </div>

                <div>
                    <img className="imageAlign" src={duck11}></img>
                    <p className="textDuck">Welsh harlequin</p>
                </div>

                <div>
                    <img className="imageAlign" src={duck12}></img>
                    <p className="textDuck">Bali duck</p>
                </div>

                </div>

                <p className="mainText">There are more than 40 breeds of domestic duck. The all-white Pekin duck
                (also called the Long Island duck) is the most common variety raised for eggs and meat,
                especially on large commercial farms. Smaller organizations or individual farmers often try
                different duck breeds depending on their needs and tastes.</p>
            </div>
        )
    }
}

export default Fact2