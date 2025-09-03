import React from 'react';
import { Image } from 'react-native';
import Styles from './Style';

function ImgAprovado() {
    return (
        <Image
            style={Styles.ImgAprovado} 
            source={require('../../images/aprovado.jpg')}
        />
    );
}

export default ImgAprovado;
