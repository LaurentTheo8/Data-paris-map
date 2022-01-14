import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";

import { Component } from "react";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activites: [],
      dataLoading: false,
      date: props.date,
      pmr: props.pmr,
      blind: props.blind,
      deaf: props.deaf
    };
  }
  componentDidMount() {
    fetch(
      "http://localhost:5000/api/activites/filter?date=" +
        this.props.date.toISOString().split("T")[0]
    )
      .then((response) => response.json())
      .then((activites) => {
        this.setState({
          activites: activites,
          dataLoading: true,
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps) {
    let urlApi = "http://localhost:5000/api/activites/filter?date=" +
    this.props.date.toISOString().split("T")[0];
    if (this.props.date !== prevProps.date) {
      this.setState({
        dataLoading: false,
      });
      if (this.props.pmr) {
        urlApi +="&&pmr=1"
      }
      if (this.props.blind){
        urlApi +="&&blind=1"
      }
      if (this.props.deaf){
        urlApi +="&&deaf=1"
      }

      fetch(urlApi)
        .then((response) => response.json())
        .then((activites) => {
          this.setState({
            activites: activites,
            dataLoading: true,
          });
        })
        .catch((error) => console.log(error));
    }
  }
  render() {
    if (!this.state.dataLoading)
      return (
        <div>
          <h2> Pleses wait some time, Data are loading.... </h2>{" "}
        </div>
      );

    return (
      <>
        <MapContainer
          center={[48.857614, 2.3522219]}
          zoom={13}
          scrollWheelZoom={false}
          doubleClickZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.activites.map((element) => (
            <Marker
              position={element.lat_lon}
              icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41] })}
            >
              <Tooltip>{element.title}</Tooltip>
              <Popup>
                <h2>{element.title}</h2>
                <br/>
                <div>{element.lead_text}</div>
                
                <div>{element.date_description}</div>
                <div>{element.tags}</div>
                <div>{element.price_type}</div>
                <br/>
                <h2>Contact</h2>
                <div>{element.address_name}</div>
                <div>{element.address_street}</div>
                <div>{element.address_zipcode}</div>
                <div>{element.address_city}</div>
                <a>{element.contact_url}</a>
                <div>{element.contact_phone}</div>
                <div>{element.contact_mail}</div>
                <div>{element.contact_facebook}</div>
                

              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </>
    );
  }
}

export default Map;
