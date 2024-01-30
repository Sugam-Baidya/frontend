// Import necessary components from React and Expo
import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const MapScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [destinationLocation, setDestinationLocation] = useState(null);

  useEffect(() => {
    // Get the current user's location using expo-location
    const fetchUserLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          console.log("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserLocation();
  }, []);

  const chooseOnMap = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setDestinationLocation({
      latitude,
      longitude,
    });
  };

  const goToDestination = () => {
    if (userLocation && destinationLocation) {
      mapViewRef.current?.fitToCoordinates(
        [userLocation, destinationLocation],
        {
          edgePadding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50,
          },
          animated: true,
        }
      );
    }
  };

  const mapViewRef = React.createRef();

  return (
    <View style={styles.container}>
      {userLocation && (
        <MapView
          ref={mapViewRef}
          style={styles.map}
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          onPress={chooseOnMap} // Call chooseOnMap when the map is tapped
        >
          {/* Add a Marker for the user's location */}
          <Marker
            coordinate={userLocation}
            title="Your Location"
            description="You are here!"
          />

          {/* Add a Marker for the destination location */}
          {destinationLocation && (
            <Marker
              coordinate={destinationLocation}
              title="Destination"
              description="Your destination is here!"
            />
          )}
        </MapView>
      )}

      {/* Go to Destination Button */}
      <TouchableOpacity
        style={styles.goToDestinationButton}
        onPress={goToDestination}
      >
        <Text style={styles.buttonText}>Go to Destination</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  goToDestinationButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

// Export the component
export default MapScreen;
