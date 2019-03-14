import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {spans:0}
        //creating a referenance through the constructor, in order to communicate with the rendering - component - element img
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () =>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans});
    }
    
    render(){

        const{ descreption, urls} = this.props.image;


        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}` }} >
                <img 
                ref = {this.imageRef}
                alt={descreption} 
                src={urls.regular}
            />
            </div>
        )

    }
}

export default ImageCard;