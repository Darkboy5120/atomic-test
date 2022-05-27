import React from 'react';
import {Image} from 'react-native';

function CustomImage({resizeMode, source, width, height, size, style}) {
  const defaultSize = 20;
  const sizeStyle = {
    width: width ?? size ?? defaultSize,
    height: height ?? size ?? defaultSize,
  };
  const imageStyle = [[sizeStyle, style]];
  return <Image resizeMode={resizeMode} source={source} style={imageStyle} />;
}

export default CustomImage;
