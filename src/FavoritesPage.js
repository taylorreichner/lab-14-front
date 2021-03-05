import React, { Component } from 'react';
import {getFavorites} from './api-utils.js';

export default class favoritesPage extends Component {
    state = {
         favorites: []
    }

    componentDidMount = async () => {
        const favorites = await getFavorites(this.props.token);
        this.setState({favorites})
    }
    render () {
        return (
            <div>
                <h3>Your favorite games!</h3>
                <div>
                    {
                        this.state.favorites.map(fave => <div>
                            <p>{fave.title}</p>
                            <p>{fave.price}</p>  
                            <img src={fave.poster} alt={fave.title}/>          
                             </div> 
                        )
                       
                    }
                
                </div>

            </div>
        )
    }

}