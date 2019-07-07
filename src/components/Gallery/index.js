import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, ActivityIndicator } from 'react-native';
import ImageCard from '$components/ImageCard';
import { getImages } from '$store/actions/gallery';
import { connect } from 'react-redux';
import { styles } from './Gallery.style';

class Gallery extends Component {
  static propTypes = {
    getImages: PropTypes.func.isRequired,
    infoLoadGallery: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
  };

  renderPreOrderList = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <ImageCard
          uri={item.urls.thumb}
          regularImageUri={item.urls.regular}
          author={item.user.name}
          name={item.description}
        />
      </View>
    );
  };

  keyExtractor = item => item.id;

  componentDidMount() {
    const { getImages, infoLoadGallery } = this.props;
    const { isLoading, isLoad, isErrorLoad } = infoLoadGallery;
    if (!isLoading && !isLoad && !isErrorLoad) {
      getImages();
    }
  }

  render() {
    const {
      data,
      infoLoadGallery: { isLoading, isErrorLoad }
    } = this.props;

    if (isLoading) {
      return <ActivityIndicator size="large" color="#fca014" />;
    }

    if (isErrorLoad) {
      return <View style={styles.errContainer}> Ошибка получения данных </View>;
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={this.renderPreOrderList}
          initialNumToRender={5}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ communication, gallery }) => {
  return {
    infoLoadGallery: communication.gallery,
    data: gallery.data
  };
};

mapDispatchToProps = { getImages };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
