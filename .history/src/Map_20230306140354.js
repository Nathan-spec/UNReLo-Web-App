import React from 'react';
import { ReactDOM } from 'react';

const mapStyles = {
    map: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
};

export class CurrentLocation extends React.Component {
    
    //Functionality to retrieve your browswer's location
   CurrentLocation.defaultProps = {
    zoom: 14,
    initialCenter: {
        lat: -1.2884,
        lng: 36.8233
    },
    centerAroundCurrentLocation: false,
    visible: true
   };
   constructor(props){
    super(props);

    const { lat, lng} = this.props.initialCenter;

    this.state = {
        CurrentLocation: {
            lat: lat,
            lng:lng
        }
    };
   }
}

export default CurrentLocation;