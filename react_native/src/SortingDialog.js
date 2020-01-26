import React, {Component} from 'react';
import {Animated, Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import BackgroundCard from './components/BackgroundCard';
import RadioButton from './components/RadioButton';
import Colors from './utils/Colors';
import {Button} from 'react-native-elements';

class SortingDialog extends Component {

    constructor(props) {
        super(props);
        this.DEFAULT_OFFSET = 360;
        this.moveAnimation = new Animated.ValueXY({x: 0, y: this.DEFAULT_OFFSET});
        this._hideWindow = this._hideWindow.bind(this);
        this._showWindow = this._showWindow.bind(this);
        this._continueBtnClicked = this._continueBtnClicked.bind(this);
        // this._negativeBtnClicked = this._negativeBtnClicked.bind(this);
        this.state = {
            isWindowShowed: false,
            selectedPosition: -1,
        };
    }

    _hideWindow() {
        console.log('hide window called!')
        Animated.timing(this.moveAnimation, {
            toValue: {x: 0, y: this.DEFAULT_OFFSET},
            duration: 150,
        }).start(() => {
            this.setState({isWindowShowed: false});
        });
    }

    _showWindow() {
        this.setState({isWindowShowed: true});
        Animated.timing(this.moveAnimation, {
            toValue: {x: 0, y: 0},
            duration: 250,
        }).start();
    }

    _continueBtnClicked() {
        this.props.setPositiveBtnAction();
    }

    // _negativeBtnClicked() {
    //     this.props.setNegativeBtnAction();
    // }

    componentDidMount() {
        this.props.setClickShow(this._showWindow);
        this.props.setHideWindow(this._hideWindow);
    }

    _renderView() {
        const containerHeight = (2 * 48) + 156 + 40;
        const {isWindowShowed, selectedPosition} = this.state;
        if (isWindowShowed === true) {
            return (
              <View style={styles.windowContainer}>
                  <TouchableWithoutFeedback onPress={() => this._hideWindow()}>
                      <View style={styles.grayBackground}/>
                  </TouchableWithoutFeedback>
                  <Animated.View style={[this.moveAnimation.getLayout()]}>
                      <View style={[styles.container, {height: containerHeight}]}>
                          <BackgroundCard height='100%' width='100%' topBorderRadius={30}/>
                          <View style={styles.contentContainer}>
                              <View style={styles.grayRect}/>
                              <View style={styles.topContainer}>
                                  <Text style={styles.popupTitle}>Sorting</Text>
                                  <TouchableOpacity onPress={() => this._hideWindow()}>
                                      <Image style={styles.buttonClose}
                                             source={require('./assets/ic_close.png')}/>
                                  </TouchableOpacity>
                              </View>
                              <Text style={{
                                  marginLeft: 16,
                                  marginRight: 16,
                                  marginTop: 8,
                                  marginBottom: 7,
                                  fontSize: 14,
                                  color: Colors.grey40,
                              }}>Please select sorting you want to use :</Text>
                              <RadioButton onPress={() => {
                                this.setState({selectedPosition: 0})
                              }} checked={selectedPosition === 0} title='Sort By Size'/>
                              <RadioButton onPress={() => {
                                  this.setState({selectedPosition: 1})
                              }} checked={selectedPosition === 1} title='Sort By Price'/>
                               <RadioButton onPress={() => {
                                  this.setState({selectedPosition: 1})
                              }} checked={selectedPosition === 1} title='Sort By Id'/>
                              <Button title='Select' buttonStyle={styles.selectButton} ></Button>
                           
                          </View>
                      </View>
                  </Animated.View>
              </View>
            );
        } else {
            return null;
        }
    }

    render() {
        return this._renderView();
    }
}

const styles = StyleSheet.create({
    windowContainer: {
        top: 0, bottom: 0, left: 0, right: 0,
        position: 'absolute',
    },
    grayBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(0,0,0)',
        opacity: 0.5,
    },
    container: {
        position: 'absolute',
        width: '100%',
        alignSelf: 'baseline',
        bottom: 0,
    },
    contentContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        elevation: 10,
    },
    grayRect: {
        marginTop: 12,
        height: 4,
        width: 48,
        backgroundColor: '#bfc9d8',
        alignSelf: 'center',
        borderRadius: 10,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 23,
        paddingLeft: 16,
        paddingRight: 10,
    },
    buttonClose: {
        width: 24,
        height: 24,
    },
    popupTitle: {
        color: '#27293f',
        fontSize: 18,
        fontWeight: 'bold',
    },
    selectButton : {
        marginLeft:10,
        marginRight:10,
        backgroundColor:Colors.orange
    }
});


export default SortingDialog;
