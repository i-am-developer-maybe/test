import React from 'react';
import { View } from 'react-native';
import PhotoViewer from '$components/PhotoViewer';
import { styles } from './PhotoScreen.style';

function PhotoScreen() {
  return (
    <View style={styles.container}>
      <PhotoViewer />
    </View>
  );
}

export default PhotoScreen;
