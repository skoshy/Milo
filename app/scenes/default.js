/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict'
import React, { Component } from 'react';
import {
	Text,
	Image,
	View
} from 'react-native';
import {
	TextBlock,
	BlinkText,
	MyToolbar,
	styles,
	strings
} from '../common';

export class DefaultScene extends Component {
	static get defaultProps() {
        return {
            title: 'MyScene',
        };
    }
    
    render() {
        let pic = {
    		uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    	};
        return (
            <View style={styles.outerContainer}>
    			<MyToolbar/>
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
    		</View>
		);
	}
}