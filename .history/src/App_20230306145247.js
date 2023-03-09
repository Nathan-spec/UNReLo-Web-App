import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './Map';
const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace:{}
  };

  //Shows the Info Window which gives details on the clicked Marker
  onMarkerClick = (props, marker, e) => 
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  // Closing the info Window.
  onClose = props => {
    if (this.state.showingInfoWindow)
    {
      this.setState({
        showingInfoWindow:false,
        activeMarker:null
      });
    }
  };

  render() {
    return (
      <CurrentLocation centerAroundCurrentLocation
      google= {this.props.google}>
      
      <Marker
      onClick={this.onMarkerClick}
      name={'Current Location'}
      />
      <InfoWindow
      marker={this.state.activeMarker}
      visible={this.state.showingInfoWindow}
      onClose={this.onClose}
      >
      <div>
        <h5>{this.state.selectedPlace.name}</h5>
      </div>
      </InfoWindow>
      </CurrentLocation>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB0K6-vbNo4AC2Wbz1b8cF_Y-EqaWuzGg0'
})(MapContainer);