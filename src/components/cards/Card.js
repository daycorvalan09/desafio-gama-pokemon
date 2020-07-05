import React, { Component } from 'react'
import './card.css'


class Card extends Component {
    render() {
        const { id, name, image, type, color } = this.props
        return (
            <div className="container-fluid">
                <div
                    className="pokemon"
                    style={{ backgroundColor: color }}
                >
                    <div className="img-container">
                        <img src={image} alt={name} />
                    </div>
                    <div className="info">
                        <span className="number">{id}</span>
                        <h3 className="name">{name}</h3>
                        <small className="type">
                            Type: <span>{type}</span>
                        </small>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
