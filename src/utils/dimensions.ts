import {Dimensions, PixelRatio, Platform} from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const isSmallScreen = WINDOW_WIDTH < 375;

export const platform = {
    isAndroid: Platform.OS === 'android',
    isIOS: Platform.OS === 'ios',
    name: Platform.OS as 'android' | 'ios',
};

export const DESIGN_DIMENSIONS = {
    android: {HEIGHT: 731, WIDTH: 412},
    ios: {HEIGHT: 731, WIDTH: 412},
};

export const convertHeight = (height: number) => {
    const elemHeight = typeof height === 'number' ? height : parseFloat(height);

    const calculatedHeight = PixelRatio.roundToNearestPixel(
        (WINDOW_HEIGHT * elemHeight) / DESIGN_DIMENSIONS[platform.name].HEIGHT,
    );

    if (DESIGN_DIMENSIONS.ios.HEIGHT < height) {
        return calculatedHeight / 0.7;
    }

    return calculatedHeight;
};

export const convertWidth = (width: number) => {
    const elemWidth = typeof width === 'number' ? width : parseFloat(width);

    const calculatedWidth = PixelRatio.roundToNearestPixel(
        (WINDOW_WIDTH * elemWidth) / DESIGN_DIMENSIONS[platform.name].WIDTH,
    );

    return calculatedWidth;
};

export const isIphoneX = (): boolean => {
    const dim = Dimensions.get('window');

    return (
        (Platform.OS === 'ios' && (dim.height === 780 || dim.width === 780)) ||
        dim.height === 812 ||
        dim.width === 812 ||
        dim.height === 844 ||
        dim.width === 844 ||
        dim.height === 896 ||
        dim.width === 896 ||
        dim.height === 926 ||
        dim.width === 926
    );
};

export const IPHONE_X_TOP_PADDING = convertHeight(44);
export const IPHONE_X_STATUSBAR_HEIGHT = convertHeight(36);
export const ANDROID_WITH_STATUSBAR_PADDING = convertHeight(24);
export const ANDROID_HEIGHT_STATUSBAR_PADDING = convertHeight(24);
export const TAB_BAR_HEIGHT = convertHeight(platform.isAndroid ? 86 : 106);

export const HEADER_HEIGHT = convertHeight(55);
export const FILTER_TITLE_HEIGHT = convertHeight(22);

export const WORK_SPACE_HEIGHT =
    WINDOW_HEIGHT -
    TAB_BAR_HEIGHT -
    HEADER_HEIGHT -
    FILTER_TITLE_HEIGHT -
    (platform.isIOS
        ? IPHONE_X_STATUSBAR_HEIGHT
        : ANDROID_HEIGHT_STATUSBAR_PADDING);

export const defaultBorderRadius = platform.isIOS ? 10 : 4;
