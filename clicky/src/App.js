import React from "react";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";

class App extends React.Component {
    render () {
       return (
            <div>
                <Header/>
                <GameBoard/>
            </div>
       )
    }
}


export default App;
