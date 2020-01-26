'use strict';

import React from 'react';
import { SafeAreaView, View, KeyboardAvoidingView, StyleSheet, StatusBar, Dimensions } from 'react-native';


function isIPhoneXSize(dim) {
    return dim.height == 812 || dim.width == 812;
}
  
function isIPhoneXrSize(dim) {
    return dim.height == 896 || dim.width == 896;
}

  
function isIPhone(model = null) {
    const dim = Dimensions.get('window');
  
    if (model === 'X') {
      return (
          // This has to be iOS
          Platform.OS === 'ios' &&
  
          // Check either, iPhone X or XR
          (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
      );
    } else {
      return Platform.OS === 'ios';
    }
}

const StatusBarHeight = Platform.select({
    ios: isIPhone('X') ? 44 : 44,
    android: StatusBar.currentHeight + 32,
    default: 0
});

const Container = ({ safeArea, style, headerTransparent, children }) => {
    let mainStyle = [styles.container, style];
    if (headerTransparent)
        mainStyle.push(styles.headerTransparent);

    let ContainerElement =
        <KeyboardAvoidingView style={mainStyle} behavior={isIPhone() ? 'padding' : null}>
            {children}
        </KeyboardAvoidingView>;

    if (safeArea === true)
        ContainerElement = <SafeAreaView style={styles.container}>{ContainerElement}</SafeAreaView>;
    else
        ContainerElement = <View style={styles.container}>{ContainerElement}</View>;

    return (
        ContainerElement
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerTransparent: {
        paddingTop: StatusBarHeight
    }
});

export { Container }
