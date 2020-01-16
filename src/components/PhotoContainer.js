import React, {Component} from 'react';
import PhotoList from "./PhotoList"

export default class  PhotoContainer extends Component {
  
  state = {
    loading: true,   
  }

  //Search photos upon initialization 
  componentDidMount(){
    this.search();
  }

  //Search photos on route update
  componentDidUpdate(prevProps) {
    if (prevProps.tag !== this.props.tag) {
      this.search();
    }
  }

  /*
   * Search for photos based on matching tag value.
   * Once a search is triggered display 'loading..' and resume on completion.
  */
  search = () => {
    this.setState( { loading: true}) 
    this.props.search(this.props.tag).then( () => {this.setState( { loading: false}) }); 
  }
  
  // render photos list once loading is completed.
  render() { 
  return (
          <div className="photo-container">
           <ul>
            {
            (this.state.loading)? <p className="loading"> Loading...</p> : <PhotoList photos={this.props.photos}/>
            }
           </ul>
          </div>
        );
  }
}

