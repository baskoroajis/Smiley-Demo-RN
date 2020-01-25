
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default CellItem = ({item})=>{
    return(
        <View style={styles.cellContainer}>
            <View style={styles.imageContainerStyle}>
                <Text  style={[{fontSize:item.size},styles.textThumbnail]}>{item.face}</Text>
            </View>
            <Text style={styles.textPriceStyle}>{'Size : '+item.size}</Text>
            <Text style={styles.textPriceStyle}>{'$ '+item.price}</Text>
            <Text style={styles.textPriceStyle}>{'date : '+item.date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cellContainer : {
        alignItems : "stretch",
        borderRadius: 5,
        flex : 1,
        padding : 16,
        maxWidth: '50%'
    },
    imageContainerStyle : {
        flexGrow : 1,
        height : 104,
        borderRadius: 5,
        borderColor : "#c7c7c7",
        borderWidth : 1,
        padding: 8
    },
    textPriceStyle : {
        color : "#ff5811",
        marginTop : 2,
        marginLeft : 8,
        fontSize : 14,
        fontWeight : "bold",
    },
    textThumbnail : {
        flex : 1,
        fontWeight : 'bold',
        borderRadius: 5,
        alignSelf : 'center',
        textAlignVertical : 'center'
    }
})