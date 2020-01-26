import React, {Component} from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet,Text,View} from 'react-native';
import  Colors  from '../utils/Colors';


export default class LoadingPage extends Component {
  render() {
    return (
        <View style={styles.container}>
            <LottieView source={require('../assets/Face1.json')} autoPlay loop />
            <Text style={styles.textLoading}>Loading...</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignContent : "flex-end",
        
    },
    textLoading : {
        flex : 1,
        textAlign : "center",
        textAlignVertical : "bottom",
        marginBottom : 100,
        fontSize : 25,
        color : Colors.orange
    }
})