import React from "react";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Cards from "./components/Cards";


class App extends React.Component {
    render () {
       return (
            <div>
                <Header/>
                <GameBoard/>
                <Cards/>
            </div>
       )
    }
};


export default App;
