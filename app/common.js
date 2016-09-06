/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ToolbarAndroid
} from 'react-native';

export class TextBlock extends Component {
	render() {
		return (
            <Text style={this.props.style}>Hi {this.props.name}</Text>
		);
	}
}

export class MyToolbar extends Component {
	render() {
		return (
			<View style={styles.containerToolbar}>
                <ToolbarAndroid
                    title={"Hi"}
                    style={styles.toolbar}
                    titleColor={'#000'}
                    actions={[
                        {title: 'Settings'},
                        {title: 'About'},
                    ]}/>
            </View>
		);
	}
}

export class BlinkText extends Component {
	constructor(props) {
		super(props);
		this.state = {showText: true};
		
		// toggle state every second
		setInterval(() => {
			this.setState({showText: !this.state.showText});
		}, 1000);
	}
	
	render() {
		let display = this.state.showText ? this.props.text : ' ';
		return (
			<Text>{display}</Text>
		);
	}
}

export const styles = StyleSheet.create({
outerContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'pink',
},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  randomText: {
    color: 'red',
  },
  containerToolbar: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#000',
    flexDirection: 'row',
  },
  toolbar: {
    flex: 1,
    backgroundColor: 'steelblue',
    height: 56,
  },
});

export const strings = {
	'Greeting': 'Welcome to my app!',
	'Instructions': 'To get started, edit index.android.js',
	'Instructions2': "Double tap R on your keyboard to reload,\nShake or press menu button for dev menu",
};