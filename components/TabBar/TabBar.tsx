import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';

import posed from 'react-native-pose';

import {styles} from './TabBar.styles'
import R from '../../src/resources/R';

interface IProps {
    navigation?: any;
    state?: any;
    activeTintColor?: string;
    inactiveTintColor?: string;
}

interface IState {

}

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth/5;
const SpotLight = posed.View({
    route0: {x: 0},
    route1: {x: tabWidth},
    route2: {x: tabWidth * 2},
    route3: {x: tabWidth * 3},
    route4: {x: tabWidth * 4}
})

const Scaler = posed.View({
    active: { scale: 1.25},
    inactive: {scale: 1}
})

class TabBar extends React.Component<IProps, IState> {

    constructor(props:IProps) {
        super(props);
    }

    render() {
        const {navigation, state: {routes, index: activeIndex}} = this.props;
        return(
            <View style = {styles.tabBarContainer}>
                <View style={StyleSheet.absoluteFillObject}>
                    <SpotLight style={styles.spotLight} pose={`route${activeIndex}`}>
                        <View  style = {styles.spotLightInner}/>
                    </SpotLight>
                </View>
                {routes.map((route : any, index : number) => {
                    const isFocused = activeIndex === index;

                    const onPress = () => {
                        const event = navigation.emit({
                          type: 'tabPress',
                          target: route.key,
                        });
              
                        if (!isFocused && !event.defaultPrevented) {
                          navigation.navigate(route.name);
                        }
                    };

                    return (
                        <TouchableOpacity
                            key = {route.key}
                            accessibilityRole = "button"
                            accessibilityStates = {isFocused ? ['selected'] : []}
                            style = {[isFocused && styles.activeImageContainer, {flex: 1}]}
                            onPress={onPress}
                        >
                            <Scaler style={[styles.scaler, isFocused && {backgroundColor:'transparent',justifyContent: 'flex-start'}]} pose={isFocused ? "active" : "inactive"}>
                                {this.renderIcon(route.name, isFocused)}
                            </Scaler>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }

    renderIcon = (routeName: string, isFocused: boolean) => {
        const {activeTintColor, inactiveTintColor} = this.props;
        const color = isFocused ? activeTintColor : inactiveTintColor;
        let image : any;
        switch (routeName) {
            case 'MainTab':
                image = R.image.tabBar.main;
                break;
            case 'FavoritesTab':
                image = R.image.tabBar.favorites;
                break;
            case 'NotificationsTab':
                image = R.image.tabBar.notifications;
                break;
            case 'CabinetTab':
                image = R.image.tabBar.cabinet;
                break;
            case 'BasketTab':
                image = R.image.tabBar.basket;
                break;
            default:
                image = '';
                break;
        }
        return <Image source={image} style={{tintColor: color} }/>
    }
    
}

export {TabBar}