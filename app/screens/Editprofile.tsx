import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const EditProfile = () => {
  return ( 
    <View style={styles.editProfileContainer}>
      <Text style={styles.title}>Edit Profile</Text>
      <View style={styles.form}>
        {/* Name */}
        <TextInput
          style={styles.input}
          placeholder="Name"
          accessible={true}
          accessibilityLabel="Name input field"
        />

        {/* Email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          accessible={true}
          accessibilityLabel="Email input field"
        />

        {/* Password */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          accessible={true}
          accessibilityLabel="Password input field"
        />

        {/* Confirm Password */}
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          accessible={true}
          accessibilityLabel="Confirm password input field"
        />

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.8}
          accessible={true}
          accessibilityLabel="Update Profile Button"
        >
          <Text style={styles.addButtonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  editProfileContainer: {
    flex: 1,
    backgroundColor: '#f2f4f7', // Light gray for a clean look
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#3a3d5c', // Dark blue-gray
    textAlign: 'center',
  },
  form: {
    marginTop: 30,
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc', // Subtle border
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#3a3d5c', // Dark blue-gray
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  addButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
