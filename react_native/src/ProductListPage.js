import React, {Component} from 'react';
import {View,Text, Image, StyleSheet, FlatList, TouchableHighlight} from 'react-native';
import axios from 'axios';
import {Container} from './Container';
import LinearGradient from 'react-native-linear-gradient';
import Colors from './Colors';
import CellItem from './CellItem';

class ProductListPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            listData : []
        }
    }

    static navigationOptions = ({navigation}) => ({
        header: null,
        headerTransparent: true,
    });

    componentDidMount() {
        axios.get('http://192.168.0.7:3000/products').then((response) => {
            // console.log('response is ',response.data);
            this.setState({listData:response.data})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        ;
    }


    _renderHeader() {
        return (
            <View>
                <View style={{marginLeft: 16, marginRight: 16}}>
                    <LinearGradient colors={[Colors.bannerGradient1,Colors.bannerGradient1]} style={styles.gradientHeader}>
                        <Image
                            style={{height: 50,flex:1,width:'100%', }}
                            resizeMode='contain'
                            source={require('./assets/smiley.png')}/>
                        <Text 
                            style={{fontSize: 20, fontWeight: 'bold', color: '#ff5811', textAlign : 'center'}}>
                            Buy your favourite SMILEY</Text>
                    </LinearGradient>
                </View>
            </View>
        );
    }

    _renderItem(itemData){
        return(
            <CellItem item={itemData.item}></CellItem>
        )
    }

    render(){
        return (
            <Container>
                <View style={{
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingBottom: 14,
                    paddingTop: 14,
                    flexDirection: 'row',
                }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: Colors.grey50,
                    }}>Products</Text>
                    <TouchableHighlight style={{
                        width: 34,
                        height: 34,
                        borderRadius: 17,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} underlayColor={Colors.grey300} onPress={() => this._moveToPage(PAGE_PAYMENT_HISTORY)}>
                        <Image style={{
                            width: 35,
                            height: 35,
                        }} source={require('./assets/ic_bag.png')}/>
                    </TouchableHighlight>
                </View>
                <FlatList 
                    ListHeaderComponent={this._renderHeader()}
                    data={this.state.listData}
                    renderItem={this._renderItem}
                    keyExtractor={this.state.listData.index}
                    numColumns={2}>

                </FlatList>
            </Container>
            )
    }

  
}

export default ProductListPage;

const styles = StyleSheet.create({
    gradientHeader : {
        marginTop : 20,
        width: '100%',
        height: 272,
        borderRadius: 8,
        padding: 16,
        justifyContent: 'space-between',
    },
})

/**
 * 
 * {"index": 47, "item": {"date": "Mon Jan 13 2020 15:37:38 GMT+0700 (Western Indonesia Time)", "face": "(｀◔ ω ◔´)", "id": "59710-t0qfwgzm6vl", "price": 859, "size": 24}
 */