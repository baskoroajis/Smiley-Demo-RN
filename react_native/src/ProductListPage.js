import React, {Component} from 'react';
import {FlatList} from 'react-native';
import axios from 'axios';
import {Container} from './components/Container';
import CellItem from './CellItem';
import ProductHeader from './ProductHeader';
import NavigationBar from './components/NavigationBar';
import SortingDialog from './SortingDialog';
import LoadingPage from './components/LoadingPage';
import {connect} from 'react-redux';
import {getProducts} from './redux/ApiAction'

class ProductListPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            listData : []
        }

        this.props.getProducts()
    }

    componentDidUpdate(prevProps){
        console.log('did update')
        if (this.props !== prevProps){
            if (typeof this.props.products !== 'undefined'){
                this.setState({listData:this.props.products})
            }
        }
    }

    _renderHeader() {
       return <ProductHeader/>
    }

    _renderItem(itemData){
        return <CellItem item={itemData.item}></CellItem>
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
                numColumns={2}>
            </FlatList>
            )
        }
    }
    render(){
        return (
            <Container>
                <NavigationBar props={ {title : 'Products', onPress : this._onPressNavigationButton}}></NavigationBar>
                {this._renderView()}
                <SortingDialog setClickShow={click => this._onPressNavigationButton = click}  setHideWindow={click => this._hideDeleteDialog = click}/>
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

// const styles = StyleSheet.create({
  
// })

/**
 * 
 * {"index": 47, "item": {"date": "Mon Jan 13 2020 15:37:38 GMT+0700 (Western Indonesia Time)", "face": "(｀◔ ω ◔´)", "id": "59710-t0qfwgzm6vl", "price": 859, "size": 24}
 */