import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''};
    onFormSubmit = event => {
    
        // highlight! preventing deafult behaviour

        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
   

    render(){
        return( 
        <div className='ui segment'>
            <form onSubmit={ this.onFormSubmit } className='ui form'>
                <div className='field'>
                    <label >Image Search</label>
                    <input type='text' value={this.state.term} onChange={(event) => this.setState({term: event.target.value})} />
                    {/* on input change is without parenthesis check video why */}
                </div>
            </form>
        </div>
        );
    }
}
export default SearchBar;