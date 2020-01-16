import React, {Component} from 'react';
import axios from "axios";
import apiKey from "../config";

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//Loading components
import SeachForm from './SearchForm'
import Nav from './Nav'
import PhotoContainer from './PhotoContainer'
import NotFound from './NotFound';


export default class App extends Component {
  
  state = {
    photos: []
  }

  search = async (query) => {
    try {
      let photos = [];
      const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&page=&format=json&nojsoncallback=1`);
      if(response.data.stat === "fail" ) throw new Error(response.data.message);

      let data = response.data.photos.photo;
      data.map((photo) => photos.push({ alt: photo.title, url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg` }));
      
      this.setState({ photos});      
    }
    catch (error) {
      console.log('Error fetching and parsing data', error);
    } 
  }

  render() { 
      return ( 
        <BrowserRouter>
            <Switch>
              <Route exact path="/" render={ (value) => 
                 <div className="container">
                  <React.Fragment>
                      <SeachForm history={value.history}/>
                      <Nav />
                  </React.Fragment> 
                  </div>
              }/>
              <Route exact path="/Search/:tag" render={ (value) => 
                 <div className="container" >
                  <React.Fragment>
                      <SeachForm history={value.history} />
                      <Nav />
                      <PhotoContainer 
                           {...value.match.params}
                           search={this.search} 
                           photos={this.state.photos}
                           />
                  </React.Fragment> 
                  </div>
                }/>
              <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
      );
    }
}