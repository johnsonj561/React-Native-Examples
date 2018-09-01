import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = (props) => (
  <View style={styles.container}>
    <Text style={styles.label}>{props.label}</Text>
    <TextInput
      autoCapitalize="none"
      secureTextEntry={props.secureTextEntry}
      style={styles.textInput}
      value={props.value}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      autoCorrect={false}
      autoFocus={props.autoFocus}
    />
  </View>
);

const styles = {
  container: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    paddingLeft: 20,
    fontSize: 18,
    flex: 1,
  },
  textInput: {
    flex: 2,
    lineHeight: 23,
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5
  }
};

export { Input };
