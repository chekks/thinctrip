import React, { Component } from 'react'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import Icon_4 from '../assets/images/icons/marker.png'

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    data: this.props.data,
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {

    return (
      <Map google={this.props.google} onClick={this.onMapClicked} initialCenter={{ lat: 42.39, lng: -72.52}}>


        <Marker 
        // label={{text: "1", color: "#fff", fontWeight: "bold"}} 
        name={'Dolores park'} 
        position={{}} 
        icon={{ url: Icon_4, size: {width: 40, height: 40}, scaledSize: {width: 40, height: 40}, }}/>

        <InfoWindow marker={this.state.activeMarker}visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
      
      
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCDygUMFAcpVrx9r0PNI4Yk0pq0pUOT0b0")
})(MapContainer)