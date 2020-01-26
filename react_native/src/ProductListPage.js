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
            isLoadingMore : false,
        }
        this.page = 1
        this.limit = 20
        this.sort = ''
        this.props.getProducts(this.page,this.limit)
        this.onEndReachedCalledDuringMomentum = true
    }

    componentDidUpdate(prevProps){
        if (this.props !== prevProps){
            if (typeof this.props.products !== 'undefined'){
                var newProduct = this.state.listData.concat(this.props.products)
                console.log('newproduct ',newProduct)
                this.setState({listData:newProduct})
            }
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

    _renderFooter(){
        return <LoadingFooter/>
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
                ListFooterComponent={this._renderFooter}
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

/**
 * 
 * {"index": 47, "item": {"date": "Mon Jan 13 2020 15:37:38 GMT+0700 (Western Indonesia Time)", "face": "(｀◔ ω ◔´)", "id": "59710-t0qfwgzm6vl", "price": 859, "size": 24}
 */