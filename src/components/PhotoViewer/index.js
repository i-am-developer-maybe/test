import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { clearOpenImageGallery } from '$store/actions/gallery';
import { withNavigation } from 'react-navigation';
import { styles } from './PhotoViewer.style';

class Photo extends Component {
  static propTypes = {
    uri: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
    clearOpenImageGallery: PropTypes.func.isRequired
  };
  handleClose = () => {
    const { navigation, clearOpenImageGallery } = this.props;

    navigation.goBack();
    clearOpenImageGallery();
  };
  render() {
    const { uri } = this.props;
    if (!uri) return <ActivityIndicator size="large" color="#fca014" />;
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri }} />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.contentContainer}
            onPress={this.handleClose}
          >
            <View>
              <Text style={styles.btnText}>Close X</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ gallery }) => {
  return {
    uri: gallery.openImageGallery
  };
};

const mapDispatchToProps = { clearOpenImageGallery };

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Photo)
);
