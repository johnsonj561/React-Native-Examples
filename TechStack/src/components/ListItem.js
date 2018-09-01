import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  handlePress = () => {
    const { library, selectLibrary } = this.props;
    const { id, title } = library;
    selectLibrary(id);
    console.log(title);
  }

  renderDescription = () => {
    const { library, expanded } = this.props;
    return (expanded) ?
      (<CardSection>
        <Text style={{ flex: 1 }}>
          {library.description}
        </Text>
      </CardSection>) :
      null;
  }

  render() {
    console.log(this.props);
    const { library } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.handlePress}>
        <View>
          <CardSection>

            <Text style={styles.title}>
              {library.title}
            </Text>

          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15,
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
