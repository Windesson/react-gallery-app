import React from 'react';
import Photo from './Photo'


const PhotoList = ({photos}) => {
   
    if(photos && photos.length > 0){
        return (    
           <React.Fragment> { 
               photos.map( (photo,index) => <Photo url={photo.url} alt={photo.alt} key={index}/>)
            }</React.Fragment>
         )}
         else {
           return (   
               <li className="not-found">
                <h3>No Results Found</h3>
                 <p>Your search did not return any results. Please try again.</p>
               </li>);
        }
}

export default PhotoList;