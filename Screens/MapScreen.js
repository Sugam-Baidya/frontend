// HomeScreen.js

import React from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Constants } from "expo";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 27.6708,
          longitude: 85.3399,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={MapView.PROVIDER_GOOGLE} // Use Google Maps provider
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker Title"
          description="Marker Description"
        />
        {/* Add more markers as needed */}
      </MapView>
    </View>
  );
};

export default HomeScreen;
