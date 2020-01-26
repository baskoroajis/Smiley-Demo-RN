import React from 'react'
import {View, StyleSheet, Text, Image, } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


export default ProductHeader = () => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={[Colors.bannerGradient1,Colors.bannerGradient1]} style={styles.background}>
                <Image style={styles.image} source={require('./assets/smiley.png')}/>
                <Text style={styles.text}> Buy your favourite FACES</Text>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        marginLeft: 16, 
        marginRight: 16,
    },
    background : {
        marginTop : 20,
        width: '100%',
        height: 272,
        borderRadius: 8,
        padding: 16,
        justifyContent: 'space-between',
    },
    image : {
        height: 50,
        flex:1,
        width:'100%', 
        resizeMode : 'contain'
    },
    text : {
        fontSize: 20,
        fontWeight: 'bold', 
        color: '#ff5811', 
        textAlign : 'center'
    }

})