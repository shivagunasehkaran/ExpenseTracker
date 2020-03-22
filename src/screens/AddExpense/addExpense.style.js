import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, margin: 20 },
  textContainer: {
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#000",
    shadowOpacity: 0.2,
    elevation: 1,
    borderRadius: 5,
    fontSize: 20,
    paddingLeft: 15
  },
  titleText: {
    margin: 10,
    fontSize: 20,
    fontFamily: 'Avenir-Medium',
    color: '#000'
  },
  submitText: {
    margin: 10,
    fontSize: 20,
    fontFamily: 'Avenir-Medium',
    color: '#fff'
  },
  button: {
    backgroundColor: '#117FDC',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  }
});