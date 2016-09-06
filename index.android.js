/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	Navigator,
} from 'react-native';
import {
	DefaultScene,
} from './app/scenes/default';

class Milo extends Component {
	render() {
		return (
			<Navigator
				initialRoute={{ title: 'My Initial Scene', index: 0 }}
				renderScene={(route, navigator) => {
					return <DefaultScene title={route.title} />
				}}
			/>
		);
	}
}

AppRegistry.registerComponent('Milo', () => Milo);
