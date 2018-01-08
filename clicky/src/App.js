import React from "react";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Card from "./components/Card";

class App extends React.Component {
    render () {
       return (
            <div>
                <Header />
                <GameBoard />
                <Card />
            </div>
       )
    }
}


export default App;
