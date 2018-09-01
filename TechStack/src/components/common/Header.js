import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#fff',
    display: 'flex',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    position: 'relative',
    zIndex: 2
  },
  textStyle: {
    fontSize: 24
  }
};

export { Header };
