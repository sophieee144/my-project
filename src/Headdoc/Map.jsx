import ReactMapGL, { Marker, Popup } from 'react-map-gl';

const [viewport, setViewport] = useState({
    width: '100%',
    height: '400px',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

<ReactMapGL
  {...viewport}
  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
  onViewportChange={(viewport) => {
    setViewport(viewport);
  }}
>
  <Marker latitude={37.7577} longitude={-122.4376}>
    <div className="text-red-500">Marqueur ici</div>
  </Marker>
  <Popup
    latitude={37.7577}
    longitude={-122.4376}
    closeButton={false}
    closeOnClick={false}
    anchor="bottom"
  >
    <div>Contenu du popup ici</div>
  </Popup>
</ReactMapGL>