import React from 'react';
import { Image } from 'react-native';
import Styles from './Style';

function ImgReprovado() {
    return (
        <Image
            style={Styles.ImgReprovado}
            source={require('../../images/reprovado.png')}
        />
    );
}

export default ImgReprovado;
