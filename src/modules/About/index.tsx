import React, { Component } from 'react';
import { View, Text, AppConfig, Button } from 'react-native';
import { connect } from 'react-redux';
import * as countActions  from './../../redux/actions';
import { bindActionCreators } from 'redux';

interface AboutConfig {
  route: { params: { name: string } }
}

class About extends Component {
  constructor(props: AppConfig) {
    super(props);
    console.log('props -------',props.count)
  }

  incrementCount(): void {
    let { count, actions } = this.props;
    count++;
    actions.changeCount(count);
  }

  decrementCount(): void {
    let { count, actions } = this.props;
    console.log('decrement: ', count)
    count--;
    console.log('decrement blah: ', count)
    actions.changeCount(count);
  }

  render() {
    const { count } = this.props; //destructuring
    return (
      <View>
        <Text>
          name goes here:
            {this.props.route.params.name} {count} paarak
        </Text>
        <Button
          title="increment"
          onPress={() => this.incrementCount()}
        />
        <Button
          title="decrement"
          onPress={() => this.decrementCount()} />
        <Text>This is About page</Text>
      </View>
    )
  } 
}

const mapStateToProps = state => {
  console.log('state ---- stateToPtrps: ', state)
  return ({
  count: state.countReducer.count,
})};

const ActionCreators = Object.assign(
  {},
  countActions,
);

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
