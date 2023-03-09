import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '80%',
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
      name={'Kenyatta International Convention Centre'}
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