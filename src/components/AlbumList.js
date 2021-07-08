import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios'
import AlbumDetail from './AlbumDetail'


class AlbumList extends Component {

    state = { albums: []}

    componentWillMount() {
        //axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0').then ( response => this.setState({albums: response.data.hits}))
        axios.get('https://sd2-hiring.herokuapp.com/api/users?offset=10&limit=10')
        .then ( response => this.setState({albums: response.data.data.users}))
    }

    renderAlbums() {
       //return this.state.albums.map( album => <Text key={album.created_at_i} >{album.title}</Text>)
       return this.state.albums.map( album => <AlbumDetail key={album.name} album={album} />)
    }

    render() {
        console.log(this.state)
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );

    }    
}

export default AlbumList; 