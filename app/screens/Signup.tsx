import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Enter a valid email')
    .label('Email'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .label('Password'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  phonenumber: Yup.string()
    .optional()
    .matches(/^[0-9]+$/, 'Phone number must be only digits')
    .length(10, 'Phone number must be exactly 10 digits')
    .label('Phone Number'),
});

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '', phonenumber: '' }}
        onSubmit={(values) => console.log('Submitted Values:', values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
          <>
            {/* Email Input */}
            <View style={styles.inputContainer}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="Email"
                placeholderTextColor="#aaa"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={[
                  styles.textInput,
                  !values.email && styles.placeholderText
                ]}                textContentType="emailAddress"
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

            {/* Phone Number Input */}
            <View style={styles.inputContainer}>
              <TextInput
                autoCapitalize="none"
                keyboardType="phone-pad"
                placeholder="Phone Number (Optional)"
                placeholderTextColor="#aaa"
                onChangeText={handleChange('phonenumber')}
                onBlur={handleBlur('phonenumber')}
                value={values.phonenumber}
                style={[
                  styles.textInput,
                  !values.phonenumber && styles.placeholderText
                ]}
                textContentType="telephoneNumber"
              />
              {errors.phonenumber && touched.phonenumber && (
                <Text style={styles.errorText}>{errors.phonenumber}</Text>
              )}
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <TextInput
                autoCapitalize="none"
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#aaa"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={[
                  styles.textInput,
                  !values.password && styles.placeholderText
                ]}                textContentType="password"
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>

            {/* Confirm Password Input */}
            <View style={styles.inputContainer}>
              <TextInput
                autoCapitalize="none"
                placeholder="Confirm Password"
                secureTextEntry
                placeholderTextColor="#aaa"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                style={[
                  styles.textInput,
                  !values.confirmPassword && styles.placeholderText
                ]}              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
            </View>

            {/* Signup Button */}
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  placeholderText: {
    color: '#w3w3w3',
    fontSize: 20,
  },
  
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  textInput: {
    width: '100%',
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#333',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: 'purple',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
