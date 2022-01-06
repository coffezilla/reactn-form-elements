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
import { useState } from 'react';

import { RadioInput, CheckInput } from './components/FormInputs';

export default function App() {
	const [form, setForm] = useState({
		name: 'Foo Soo',
		genre: 'M',
		checked: true,
		mySwitch: false,
	});

	// handle of RadioInput, CheckInput,switch and vanilla TextInput
	const handleInputForm = (text, name, switcher = false) => {
		if (switcher) {
			text = !text;
		}
		setForm({
			...form,
			[name]: text,
		});
	};

	return (
		<View style={styles.container}>
			<Text>temos a ideia sim</Text>
			<View>
				<Pressable
					onPress={() => handleInputForm(form.checked, 'checked', true)}
					style={{
						backgroundColor: '#ccc',
						height: 40,
						justifyContent: 'flex-start',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<CheckInput value={form.checked} style={{ marginRight: 7 }} />
					<Text>Checkbox Checked</Text>
				</Pressable>

				<Pressable
					onPress={() => handleInputForm('F', 'genre')}
					style={{
						backgroundColor: '#ccc',
						height: 40,
						justifyContent: 'flex-start',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<RadioInput value={form.genre} name='F' style={{ marginRight: 7 }} />
					<Text>Radio F</Text>
				</Pressable>

				<Pressable
					onPress={() => handleInputForm('M', 'genre')}
					style={{
						backgroundColor: '#ccc',
						height: 40,
						justifyContent: 'flex-start',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<RadioInput value={form.genre} name='M' style={{ marginRight: 7 }} />
					<Text>Radio M</Text>
				</Pressable>

				<TextInput
					value={form.name}
					onChangeText={(text) => handleInputForm(text, 'name')}
					style={{
						borderWidth: 1,
						fontSize: 20,
					}}
				/>
				<Switch
					trackColor={{ false: '#cdcdcd', true: '#6edc5f' }}
					thumbColor={form.mySwitch ? '#fff' : '#fff'}
					ios_backgroundColor='#cdcdcd'
					onValueChange={() => handleInputForm(form.mySwitch, 'mySwitch', true)}
					value={form.mySwitch}
				/>

				<Text>{JSON.stringify(form, null, 1)}</Text>
			</View>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 23,
		paddingHorizontal: 17,
		paddingVertical: 10,
		backgroundColor: '#eee',
	},
});
