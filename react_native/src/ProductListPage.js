import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {Container} from './components/Container';
import CellItem from './CellItem';
import ProductHeader from './ProductHeader';
import NavigationBar from './components/NavigationBar';
import SortingDialog from './SortingDialog';
import LoadingPage from './components/LoadingPage';
import {connect} from 'react-redux';
import {getProducts} from './redux/ApiAction';
import LoadingFooter from './components/LoadingFooter';

class ProductListPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            listData : [],
            isEndCatalogue : false
        }
        this.page = 1
        this.limit = 20
        this.sort = ''
        this.lastRandomAds = Math.floor((Math.random() * 10))
        this.lastIndexBannerAds = 0
        this.props.getProducts(this.page,this.limit,undefined)
        this.onEndReachedCalledDuringMomentum = true
    }

    componentDidUpdate(prevProps){
        if (this.props !== prevProps){
            if (typeof this.props.products !== 'undefined'){
                if (Array.isArray(this.props.products) && this.props.products.length !== 0){
                    var newProduct = this.state.listData.concat(this.props.products)
                    var adsItem = {url : this._getRandomBannerAds(), type : 'ads', id : 'ads'+this.lastIndexBannerAds}
                    var ProductWithAds = newProduct.concat(adsItem)
                    this.lastIndexBannerAds += 1
                    this.setState({listData:ProductWithAds})
    
                    //request for the next page when idle
                    this.page = this.page + 1
                    this.props.getProducts(this.page,this.limit,this.sort)
                }
                else{
                    //set when end catalogue reach
                    this.setState({isEndCatalogue : true})
                }
            }
        }
    }

    _getRandomBannerAds = () => {
        var randomIndex = Math.floor((Math.random() * 10))
        if (this.lastRandomAds !== randomIndex){
           return randomIndex;
        }
        else{
            this._getRandomBannerAds()
        }
    }

    _onEndReached = ({ distanceFromEnd }) => {
        if(!this.onEndReachedCalledDuringMomentum){
            this.page = this.page + 1
            this.props.getProducts(this.page,this.limit,this.sort)
            this.onEndReachedCalledDuringMomentum = true
        }
    }

    _onSelectFilter= (index) =>{
        if (index == 0){
           this.sort = 'size'
        }
        else if (index == 1){
            this.sort = 'price'
        }
        else if (index == 2){
            this.sort = 'id'
        }

        this.setState({listData:[]})
        this.page = 1
        this.props.getProducts(this.page,this.limit,this.sort)

    }

    _renderHeader() {
       return <ProductHeader/>
    }

    _renderItem(itemData){
        return <CellItem item={itemData.item}></CellItem>
    }

    _renderFooter(isEndCatalogue){
        return <LoadingFooter isEndCatalogue={isEndCatalogue}/>

    }

    _renderView(){
        if (Array.isArray(this.state.listData) && this.state.listData.length === 0){
            return <LoadingPage/>
        }
        else{
            return(
                <FlatList 
                ListHeaderComponent={this._renderHeader}
                data={this.state.listData}
                renderItem={this._renderItem}
                keyExtractor={this.state.listData.index}
                numColumns={2}
                onEndReached={this._onEndReached.bind(this)}
                onEndReachedThreshold={0.5}
                onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                ListFooterComponent={this._renderFooter(this.state.isEndCatalogue)}
                >
            </FlatList>
            )
        }
    }
    render(){
        return (
            <Container>
                <NavigationBar props={ {title : 'Products', onPress : this._onPressNavigationButton}}></NavigationBar>
                {this._renderView()}
                <SortingDialog setClickShow={click => this._onPressNavigationButton = click}  setHideWindow={click => this._hideDeleteDialog = click} setPositiveBtnAction={this._onSelectFilter}/>
            </Container>
            )
    }
}


const mapStateToProps = state =>{
    return ({
       products : state.api.products.data,
    });
}

const mapDispatchToProps = {
    getProducts
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);
