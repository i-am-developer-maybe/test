import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1
  },
  btnContainer: {
    padding: 10,
    position: 'absolute',
    top: 20,
    right: 20,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: ' rgba(100, 100, 100, 0.3)',
    borderRadius: 30,
    zIndex: 2
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    borderWidth: 1,
    borderColor: 'transparent',
    paddingRight: 5,
    fontFamily: 'PantonRegular',
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4
  },
  img: {
    resizeMode: 'cover',
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    backgroundColor: 'black'
  }
});
