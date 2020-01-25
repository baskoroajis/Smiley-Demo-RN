import React from 'react'
import {View,Text,TouchableHighlight,Image, StyleSheet} from 'react-native'

export default NavigationBar = ({props}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.navigationTitle}>{props.title}</Text>
            <TouchableHighlight underlayColor= {Colors.grey300} style={styles.rightButton} onPress={props.onPress}>
                <Image style={styles.rightImage} source={require('./assets/ic_bag.png')}/>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 14,
        paddingTop: 14,
        flexDirection: 'row',
    },
    navigationTitle : {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.grey50,
    },
    rightButton : {
        width: 34,
        height: 34,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    rightImage : {
        width: 35,
        height: 35,
    }
})

