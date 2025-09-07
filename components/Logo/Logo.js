import React from 'react';
import { Image } from 'react-native';
import Styles from './Style'

function Logo() {
    return (
    <Image
        style={Styles.logo}
        source={require('../../images/Crash_Twinsanity_Wumpa_Fruit.png')}
    />
    );
}

export default Logo;