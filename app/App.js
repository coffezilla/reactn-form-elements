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
	ScrollView,
} from 'react-native';
import { useState } from 'react';

//
import {
	RadioInput,
	CheckInput,
	CheckInputGroup,
	RadioInputGroup,
	SwitchInputGroup,
	TextInputGroup,
	TextInputGroupReadonly,
	TextareaInputGroup,
} from './components/FormInputs';

export default function App() {
	const [form, setForm] = useState({
		isSigned: false,
		colors: 'red',
		agree: false,
		notification: false,
		genre: 'm',
		password: '',
		passwordConfirm: '',
		name: '',
		email: '',
		phone: '',
		message: '',
		file: '',
		saved: 'my app v10.00',

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
		<ScrollView style={styles.container}>
			<Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 7 }}>
				Inputs sample
			</Text>

			<View>
				<View style={styles.division}>
					<Text>CheckInput: isSigned</Text>
					<CheckInput
						value={form.checked}
						style={{ marginRight: 7 }}
						onPress={() => handleInputForm(form.checked, 'checked', true)}
					/>
				</View>

				<View style={styles.division}>
					<Text>RadioInput: colors</Text>
					<RadioInput
						value={form.colors}
						name='blue'
						style={{ marginRight: 7, marginBottom: 7 }}
						onPress={() => handleInputForm('blue', 'colors')}
					/>
					<RadioInput
						value={form.colors}
						name='red'
						style={{ marginRight: 7, marginBottom: 7 }}
						onPress={() => handleInputForm('red', 'colors')}
					/>
					<RadioInput
						value={form.colors}
						name='yellow'
						style={{ marginRight: 7, marginBottom: 7 }}
						onPress={() => handleInputForm('yellow', 'colors')}
					/>
				</View>

				<View style={styles.division}>
					<Text>CheckInputGroup: colors</Text>
					<CheckInputGroup
						label='Agree'
						name='checked'
						value={form.checked}
						handleInputForm={handleInputForm}
					/>
				</View>

				<View style={styles.division}>
					<Text>RadioInputGroup: colors</Text>
					<RadioInputGroup
						label='Female'
						name='F'
						group='genre'
						value={form.genre}
						handleInputForm={handleInputForm}
					/>
					<RadioInputGroup
						label='Male'
						name='M'
						group='genre'
						value={form.genre}
						handleInputForm={handleInputForm}
					/>
				</View>

				<View style={styles.division}>
					<SwitchInputGroup
						value={form.mySwitch}
						label='Switch'
						name='mySwitch'
						handleInputForm={handleInputForm}
					/>
				</View>

				<View style={styles.division}>
					<TextInputGroup
						label='Nome'
						placeholder='Ex.: Carl John'
						name='name'
						handleInputForm={handleInputForm}
						keyboardType='default'
						value={form.name}
					/>

					<TextInputGroup
						label='E-mail'
						placeholder='Ex.: my@email.com'
						name='email'
						handleInputForm={handleInputForm}
						keyboardType='email-address'
						autoCapitalize='none'
						value={form.email}
					/>

					<TextInputGroup
						label='Senha'
						name='password'
						placeholder='******'
						secureTextEntry={true}
						handleInputForm={handleInputForm}
						value={form.password}
					/>

					<TextInputGroupReadonly
						label='Só leitura'
						name='saved'
						value={form.saved}
					/>

					<TextInputGroup
						label='Phone'
						placeholder='(00) 0000-0000'
						handleInputForm={handleInputForm}
						keyboardType='numeric'
						maxLength={12}
						name='phone'
						value={form.phone}
					/>

					<TextareaInputGroup
						label='Mensagem'
						placeholder='This is...'
						name='message'
						multiline={true}
						handleInputForm={handleInputForm}
						keyboardType='default'
						value={form.message}
					/>
				</View>

				<Text>{JSON.stringify(form, null, 1)}</Text>
			</View>
			<StatusBar style='auto' />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 23,
		paddingHorizontal: 17,
		paddingVertical: 10,
		backgroundColor: '#fff',
	},
	division: {
		marginBottom: 10,
	},
});
