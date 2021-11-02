import * as React from 'react';
import { View, Text } from 'react-native';
import MapView ,{Marker }from 'react-native-maps';


function DetailsScreen({ route,navigation }) {
    const { name,state,lat,lon } = route.params;
    console.log(name,state)

  return (
    
    <MapView style={{flex:1}}
    initialRegion={{
      latitude: Number(lat),
      longitude:Number(lon),
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    >
        <Marker coordinate={{   latitude: Number(lat),
        longitude:Number(lon) }}>
</Marker>

 </MapView>
  );
}



export default DetailsScreen;