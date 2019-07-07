import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { Photo } from '$navigator/AppStack/constants';
import { setOpenImageGallery } from '$store/actions/gallery';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { styles } from './ImageCard.style';

class ImageCard extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
    name: PropTypes.string,
    uri: PropTypes.string.isRequired,
    regularImageUri: PropTypes.string.isRequired,
    setOpenImageGallery: PropTypes.func.isRequired
  };

  handleOpenImage = () => {
    const { navigation, regularImageUri, setOpenImageGallery } = this.props;
    setOpenImageGallery(regularImageUri);
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
const mapDispatchToProps = { setOpenImageGallery };
export default withNavigation(
  connect(
    null,
    mapDispatchToProps
  )(ImageCard)
);
