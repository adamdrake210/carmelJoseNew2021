import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  margin: '24px 0',
};

type Props = {
  isMarkerShown: boolean;
};

const MetroMap = ({ isMarkerShown }: Props) => {
  return (
    <LoadScript googleMapsApiKey={process.env.googleMapsApi || ''}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 40.428713, lng: -3.695751 }}
        zoom={16}>
        {/* Child components, such as markers, info windows, etc. */}
        {isMarkerShown && <Marker position={{ lat: 40.427954, lng: -3.695925 }} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MetroMap;
