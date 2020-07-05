import React, { Component } from 'react';
import './input.css'

class Input extends Component {
    render() {
        return (
            <div className="pokeball-container">
                <div className="pokeball">
                    <div className="pokeball-top"></div>
                    <div className="pokeball-dot"></div>
                    <div className="pokeball-line"></div>
                </div>

                <div className="border">
                    <div className="card">
                        <input
                            className="input"
                            type="text"
                            placeholder="Procure seu Pokemon..."
                            {...this.props}
                        />
                        <div className="dropdown"></div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Input;