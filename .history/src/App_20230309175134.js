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
      name={'Mombasa'}
      position = {{ lat:  -4.0435, lng: 39.6682 }}
      />
      <Marker 
      onClick={this.onMarkerClick}
      name={'Kisumu'}
      position= {{lat: -0.1022, lng: 34.7617}}
      />
      <Marker 
      onClick={this.onMarkerClick}
      name= {'Eldoret'}
      position = {{lat: 0.5143, lng: 35.2698}}
      />
      <Marker 
      onClick={this.onMarkerClick}
      name= {'Nakuru'}
      position = {{lat: -0.3031, lng: 36.0800}}
      />
      <Marker 
      onClick={this.onMarkerClick}
      name= {'Malindi'}
      position = {{lat: -3.2175, lng: 40.1164}}
      />
      <Marker 
      onClick={this.onMarkerClick}
      name= {'Nyeri'}
      position = {{lat: -0.4292, lng: 36.9513}}
      />
      <Marker 
      onClick={this.onMarkerClick}
      name= {'Machakos'}
      position = {{lat: -1.5067, lng: 37.2608}}
      />
      <Marker 
      onClick={this.onMarkerClick}
      name= {'Thika'}
      position = {{lat: -1.0331, lng: 37.0694}}
      />
      <Marker 
      onClick={this.onMarkerClick}
      name= {'Kitale'}
      position = {{lat: 1.0264, lng: 40.1164}}
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