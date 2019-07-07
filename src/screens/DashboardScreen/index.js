import React from 'react';
import { View } from 'react-native';
import Gallery from '$components/Gallery';
import { styles } from './DashboardScreen.style';

function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Gallery />
    </View>
  );
}

export default DashboardScreen;
