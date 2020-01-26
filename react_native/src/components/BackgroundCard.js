import React, {Component} from 'react'
import {View, StyleSheet,TouchableHighlight} from 'react-native'


const BackgroundCard = (props) => {

    const topBorderRadius = () =>{
        var borderRadius = props.topBorderRadius
        if (borderRadius === 'undefined'){
            return 5
        }
        else{
            return borderRadius
        }
    }

    const styles = StyleSheet.create({
        cardContainer : {
            backgroundColor : "#fff",
            height : props.height,
            width : props.width,
            shadowColor : '#000',
            shadowOffset : {width : 2, height : 2},
            shadowOpacity : 0.2,
            borderRadius : 5,
            borderTopLeftRadius : topBorderRadius(),
            borderTopRightRadius : topBorderRadius(),
            borderWidth : 0.03,
            elevation : 5
        },
        touchable : {
            height : props.height,
            width : props.width,
            backgroundColor : "#000",
        }
    })

    return (
        <View style={styles.cardContainer}></View>
    )
}


export default BackgroundCard;
