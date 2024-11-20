import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Signup: React.FC = () => {
  const navigation = useNavigation<any>();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>

      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Phone Number" style={styles.input} keyboardType="phone-pad" />

      {/* Password Input with Toggle */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          style={styles.passwordInput}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.toggleButton}
        >
          <Text style={styles.toggleText}>
            {passwordVisible ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input with Toggle */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Confirm Password"
          style={styles.passwordInput}
          secureTextEntry={!confirmPasswordVisible}
        />
        <TouchableOpacity
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          style={styles.toggleButton}
        >
          <Text style={styles.toggleText}>
            {confirmPasswordVisible ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Terms and Conditions */}
      <View style={styles.checkboxContainer}>
        <CheckBox value={isChecked} onValueChange={setIsChecked} />
        <Text style={styles.checkboxLabel}>
          I agree to the{' '}
          <Text style={styles.link} onPress={() => navigation.navigate('TermsAndConditions')}>
            Terms and Conditions
          </Text>
        </Text>
      </View>

      {/* Signup Button */}
      <TouchableOpacity
        style={[styles.signupButton, !isChecked && styles.disabledButton]}
        onPress={() => {
          if (isChecked) navigation.navigate('Home');
        }}
        disabled={!isChecked}
      >
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* OR Separator */}
      <Text style={styles.orText}>OR</Text>

      {/* Google Sign-Up */}
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.buttonText}>Sign Up with Google</Text>
      </TouchableOpacity>

      {/* Facebook Sign-Up */}
      <TouchableOpacity style={styles.facebookButton}>
        <Text style={styles.buttonText}>Sign Up with Facebook</Text>
      </TouchableOpacity>

      {/* Already have an account */}
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.link}>Log In</Text>
      </Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    height: 50,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  toggleButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    color: '#007BFF',
    fontWeight: '600',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginVertical: 15,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 14,
    color: '#555',
  },
  link: {
    color: '#007BFF',
    fontWeight: '600',
  },
  signupButton: {
    marginTop: 20,
    width: '90%',
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#aaa',
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    marginVertical: 10,
    fontSize: 16,
    color: '#555',
  },
  googleButton: {
    marginTop: 10,
    width: '90%',
    padding: 15,
    backgroundColor: '#DB4437',
    borderRadius: 8,
    alignItems: 'center',
  },
  facebookButton: {
    marginTop: 10,
    width: '90%',
    padding: 15,
    backgroundColor: '#3b5998',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#555',
  },
});
