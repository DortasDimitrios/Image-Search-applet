import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'
import ImageList from './ImageList';

class App extends React.Component{

    state = {images: []};

    onSearchSubmit = (term) => {
        unsplash.get('/search/photos' , {
            params: {query : term},
           
        }).then((result) => {
            this.setState({ images: result.data.results });
        });
    }

    render(){
    return (
    <div className='ui container' style={{paddingTop: '20px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images}/>
    </div>
    );
    }
};

export default App;