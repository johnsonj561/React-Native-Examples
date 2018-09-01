import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

const styles = {
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
