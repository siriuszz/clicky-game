import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import cards from "./cards.json";
import "./styles/App.css";
import "./styles/Card.css";



class App extends React.Component {
    state = {
        cards
    };

    render () {
       return (
            <div>
                <Header />
                <div className="game-board">
                    {this.state.cards.map(card => (
                        <Card
                            key={card.name}
                            image={card.image}
                        />

                    ))}
                </div>
            </div>
       )
    }
}


export default App;
