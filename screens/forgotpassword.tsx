import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

import styles from '../myComponents/welcome/welcome.style';
import { COLORS, SIZES } from '../constants';
import { set } from 'react-native-reanimated';

const auth = getAuth();

const ForgotPassword = () => {
  const [value, setValue] = useState({
    email: '',
    error: ''
  })

  async function resetPassword() {
    if (value.email === '') {
      setValue({
        ...value,
        error: 'Please enter your email address.'
      })
      return;
    }

    sendPasswordResetEmail(auth, value.email)
        .then(() => {
            setValue({
            ...value,
            email: '',
            error: ''
            });
            Alert.alert(
                'Alert',
                'Check your email to reset your password.',
                [
                  {
                    text: 'OK',
                  },
                ],
              )
        })
        .catch((error) => {
            setValue({
            ...value,
            error: error.message
            });
        });
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightBeige }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium, }}>

          <View style={styles.signupView}>
            <Text style={styles.welcomeText}>Forgot Password</Text>
          </View>

          {!!value.error && <View><Text style={styles.errorText}>{value.error}</Text></View>}

          <View>
            <Input
              style={styles.signupInput}
              placeholder='Email'
              value={value.email}
              onChangeText={(text) => setValue({ ...value, email: text })}
            />

            <View style={{ alignItems: 'center', padding: SIZES.large }}>
              <TouchableOpacity style={styles.resetButton} onPress={resetPassword} >
                <Text style={styles.signupText}>Reset Password</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ForgotPassword;