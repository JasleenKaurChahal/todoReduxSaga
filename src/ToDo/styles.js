import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    margin: scale(20),
  },
  contain: {
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    margin: scale(15),
    height: scale(40),
    borderColor: '#7a42f4',
    borderWidth: 1,
    padding: scale(10),
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: scale(10),
    margin: scale(15),
    height: scale(40),
    borderRadius: scale(20),
  },
  heading: {
    color: '#9a73ef',
    textAlign: 'center',
    fontSize: scale(14),
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginVertical: scale(10),
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  itemBlock: {
    height: scale(40),
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: scale(5),
  },
  itemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  completeBox: {
    height: scale(30),
    width: scale(30),
    borderRadius: scale(15),
    borderWidth: 1,
  },
  completedBox: {
    backgroundColor: '#7a42f4',
  },
  itemName: {
    color: '#7a42f4',
    marginLeft: scale(20),
    fontSize: scale(13),
  },
  deleteBox: {
    height: scale(30),
    width: scale(70),
    backgroundColor: '#7a42f4',
    justifyContent: 'center',
    borderRadius: scale(10),
  },
  deleteTextBox: {
    color: 'white',
    textAlign: 'center',
  },
});
