import React, {Component} from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet,Text,View} from 'react-native';
import  Colors  from '../utils/Colors';


export default class LoadingFooter extends Component {
    constructor(props){
        super(props)
    }

    render() {
        if (this.props.isEndCatalogue){
            return (
                <View><Text style={styles.textEndCatalogue}>~ end of catalogue ~</Text></View>
            )
        }
        else{
            return (
                <View style={styles.container}>
                    <Text style={styles.textLoading}>Loading</Text>
                    <LottieView height={'100%'} width={'100%'} resizeMode='contain' source={require('../assets/loading-more.json')} autoPlay loop />
                </View>
            )
        }
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
        textAlignVertical : "center",
        fontSize : 10,
        height : 100,
        color : Colors.orange,
        elevation : 1
    },
    textEndCatalogue : {
        flex : 1,
        fontSize : 20,
        color : Colors.orange,
        textAlign : "center",
        textAlignVertical : "center",
        marginBottom : 15
    }
})