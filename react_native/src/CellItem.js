
import {View, Text, StyleSheet,Image} from 'react-native';
import React from 'react';
import Colors from './utils/Colors';
import {centToDollars, dateToRelative} from './utils/Helper';
import {BASE_URL} from './utils/ApiRequest'

export default CellItem = ({item})=>{
    if (typeof item.type !== 'undefined'){
        console.log('iteeem ', item.url)
        return(
            <View style={styles.cellContainer}>
                <View style={styles.imageContainerAds}>
                    <Image  style={styles.imageAds} source={{uri:BASE_URL+'ads/?r='+item.url}}></Image>
                </View>
            </View>
        )
    }
    else{
        return(
            <View style={styles.cellContainer}>
                <View style={styles.imageContainer}>
                    <Text  style={[{fontSize:item.size},styles.textThumbnail]}>{item.face}</Text>
                </View>
                <Text style={styles.textPrice}>{'$ '+centToDollars(item.price)}</Text>
                <Text style={styles.textSize}>{'Size '+item.size}</Text>
                <Text style={styles.textDate}>{''+dateToRelative(new Date(), item.date)}</Text>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    cellContainer : {
        alignItems : "stretch",
        borderRadius: 5,
        flex : 1,
        padding : 16,
        maxWidth: '50%'
    },
    imageContainer : {
        flexGrow : 1,
        height : 104,
        borderRadius: 5,
        borderColor : "#c7c7c7",
        borderWidth : 1,
        padding: 1
    },
    textSize: {
        color : Colors.grey50,
        marginTop : 2,
        marginLeft : 8,
        fontSize : 13,
        fontWeight : "bold",
    },
    textPrice: {
        color : "#ff5811",
        marginTop : 2,
        marginLeft : 8,
        fontSize : 14,
        fontWeight : "bold",
    },
    textDate: {
        color : Colors.grey40,
        marginTop : 2,
        marginLeft : 8,
        fontSize : 11,
    },
    textThumbnail : {
        flex : 1,
        fontWeight : 'bold',
        borderRadius: 5,
        alignSelf : 'center',
        textAlignVertical : 'center'
    },
    imageContainerAds : {
        flexGrow : 1,
        height : 104,
        padding: 1
    },
    imageAds : {
        height: 100,
        resizeMode:'cover', 
        width : '100%'
    }
})