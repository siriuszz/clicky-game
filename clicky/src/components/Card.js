import React from 'react';


class Card extends React.Component {
    render() {
        return (
            <span className="card">
                <img width="200" src={ this.props.image } alt={ this.props.title }/>
            </span>
        );
    }
}

export default Card;

