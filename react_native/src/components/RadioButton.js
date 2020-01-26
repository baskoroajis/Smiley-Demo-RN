import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View,Text} from 'react-native';
// import {Text} from 'react-native-elements';
import colors from '../utils/Colors';

class RadioButton extends Component {
  render() {
    const {style, checked, title, onPress} = this.props;
    const {container, radioStyle} = styles;
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPress}>
          <View style={[container]}>
            <Image key={title} style={radioStyle} source={
              checked ? require('../assets/ic_filled_circle.png')
                : require('../assets/ic_circle.png')}/>
            <Text style={{
              textAlign: 'left',
              flex: 1,
              marginLeft: 18,
              fontSize: 14,
              fontWeight: 'bold',
              color: colors.grey50,
            }}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  radioStyle: {
    width: 20, height: 20, justifyContent: 'center',
  },
  buttonContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 15,
    paddingTop: 15,
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#794F9B',
  },
});

export default RadioButton;
