import { StatusBar } from 'expo-status-bar';
// import * as ImagePicker from 'expo-image-picker';

import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Button,
	Pressable,
	Switch,
	SafeAreaView,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export const RadioInput = ({ value, name, style, ...props }) => {
	return (
		<View
			style={[
				{
					width: 20,
					height: 20,
					borderRadius: 22,
					borderWidth: 2,
					borderColor: value === name ? '#6E00F0' : '#6E00F0',
					backgroundColor: value === name ? 'white' : 'white',
				},
				style,
			]}
			{...props}
		>
			{value === name && (
				<Ionicons
					name='ellipse'
					color='#6E00F0'
					size={13}
					type='Ionicons'
					style={{
						borderWidth: 0,
						paddingLeft: 1, // hack
						lineHeight: 16,
						textAlign: 'center',
					}}
				/>
			)}
		</View>
	);
};

export const CheckInput = ({ value, name, style, ...props }) => {
	return (
		<View
			style={[
				{
					width: 20,
					height: 20,
					borderRadius: 3,
					// borderColor: value === name ? '#6E00F0' : '#6E00F0',
					// backgroundColor: value === name ? 'white' : 'white',

					borderWidth: value ? 0 : 2,
					borderColor: value ? '#5905BC' : '#6E00F0',
					backgroundColor: value ? '#6E00F0' : 'white',
				},
				style,
			]}
			{...props}
		>
			{value && (
				<Ionicons
					name='checkmark'
					color='white'
					size={17}
					type='Ionicons'
					style={{
						borderWidth: 0,
						lineHeight: 19,
						textAlign: 'center',
					}}
				/>
			)}
		</View>
	);
};
