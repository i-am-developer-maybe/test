import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';
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
    return <View style={styles.itemContainer} />;
  };
  keyExtractor = item => item.id;

  componentDidMount() {
    const { getImages, infoLoadGallery } = this.props;
    const { isLoading, isLoad, isErrorLoad } = infoLoadGallery;
    if (!isLoading && !isLoad && !isErrorLoad) {
      console.log('yasdessss!!!!!!!!!!!! flag-one---');
      getImages();
    }
  }
  render() {
    console.log('@@@@@@@@@@@flag-one---');
    const { data } = this.props;
    return (
      <View style={styles.container}>
        {/* <FlatList
          data={data}
          renderItem={this.renderPreOrderList}
          removeClippedSubviews={true}
          initialNumToRender={5}
          keyExtractor={this.keyExtractor}
        /> */}

        <Text>Gallery############################</Text>
        <Text>Gallery############################</Text>
        <Text>Gallery############################</Text>
        <Text>Gallery############################</Text>
        <Text>Gallery############################</Text>
        <Text>Gallery############################</Text>
        <Text>Gallery############################</Text>
        <Text>Gallery############################</Text>
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
