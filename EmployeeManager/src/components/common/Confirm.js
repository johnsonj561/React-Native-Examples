import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = (props) => {
  const { children, visible, onAccept, onDismiss } = props;
  const noop = () => {};
  return (
    <Modal
      transparent
      animationType="slide"
      onRequestClose={noop}
      visible={visible}
    >
      <View style={styles.containerStyle}>
        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.textStyle}>
            {children}
          </Text>
        </CardSection>
        <CardSection>
          <Button onPress={onAccept}>
            Yes
          </Button>
          <Button onPress={onDismiss}>
            No
          </Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    justifyContent: 'center',
    flex: 1
  }
};

export { Confirm };
