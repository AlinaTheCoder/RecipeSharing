import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

function MyTextInput({ placeholder, value, onChangeText, secureTextEntry }) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        input: {
            height: 40,
            width:350,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius:10,
            padding: 10,
            margin: 10,
        }
    }
)

export default MyTextInput