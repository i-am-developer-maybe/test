import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    alignItems: 'flex-start',
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: 'transparent',
    padding: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
      },

      android: {
        elevation: 7
      }
    })
  },
  content: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  imgContainer: {
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
      },

      android: {
        elevation: 7
      }
    })
  },

  img: {
    width: 100,
    height: 100,
    resizeMode: 'cover'
  },

  textContainer: {
    width: width - 200,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    textAlign: 'left',
    padding: 5,
    paddingTop: 0
  },

  author: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    textAlign: 'left',
    padding: 5
  }
});
