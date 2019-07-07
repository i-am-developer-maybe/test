import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { Photo } from '$navigator/AppStack/constants';
import { withNavigation } from 'react-navigation';
import { styles } from './ImageCard.style';

class ImageCard extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
    name: PropTypes.string,
    uri: PropTypes.string.isRequired
  };

  handleOpenImage = () => {
    const { navigation } = this.props;
    navigation.navigate(Photo);
  };

  render() {
    const { author, name, uri } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.content} onPress={this.handleOpenImage}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={{ uri }} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{name || 'withot name'} </Text>
            <Text style={styles.author}> author:{` ${author}`}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(ImageCard);
