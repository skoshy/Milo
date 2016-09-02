/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	Image,
	View
} from 'react-native';
import {
	TextBlock,
	BlinkText,
	styles,
	strings
} from './app/common';

class Milo extends Component {
  render() {
	let pic = {
		uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
	};
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
			{strings.Greeting}
        </Text>
        <Text style={styles.instructions}>
			{strings.Instructions}
        </Text>
		<TextBlock name="Dude" style={styles.randomText}/>
		<TextBlock name="Bro"/>
		<TextBlock name="Pal"/>
		<TextBlock name="Buddy"/>
		<BlinkText text="I'm blinking, look at me!"/>
		<Image source={pic} style={{width: 193, height: 110}}/>
        <Text style={styles.instructions}>
			{strings.Instructions2}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Milo', () => Milo);
