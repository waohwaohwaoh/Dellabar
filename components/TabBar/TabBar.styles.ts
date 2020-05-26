import {ViewStyle, Dimensions, TextStyle, View, ImageStyle} from 'react-native';
import {StyleGuide} from '../../src/resources/StyleGuide';

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth/5;

class Styles {
    tabBarContainer: ViewStyle = {
        flexDirection: 'row',
        height: 52
    }
    spotLight: ViewStyle = {
        width: tabWidth,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
    activeImageContainer: ViewStyle = {
        justifyContent: 'flex-start',
    }
    spotLightInner: ViewStyle = {
        position:'absolute',
        bottom: 20, 
        width: tabWidth/1.7,
        height: tabWidth/1.7,
        backgroundColor: StyleGuide.colors.red,
        borderRadius: 24
    }
    scaler: ViewStyle = {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
}

export const styles = new Styles();