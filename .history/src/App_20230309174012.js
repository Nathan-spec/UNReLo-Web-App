import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

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
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
     >
      <Marker
      onClick={this.onMarkerClick}
      name={'LoRa sensor '}
      />
      <Marker
      onClick={this.onMarkerClick}
      name={'Marker 1'}
      position = {{ lat: -1.29, lng: 36.82}}
      />
      <Marker 
      onClick={this.onMarkerClick}
      name={'Marker 2'}
      position= {{lat:-1.5, lng: 37.1}}
      />
      <Marker 
      onClick={this.onMarkerClick}
      name= {'Marker 3'}
      position = {{lat:-1.8, lng:38.0}}
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
     </Map>

     

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB0K6-vbNo4AC2Wbz1b8cF_Y-EqaWuzGg0'
})(MapContainer);