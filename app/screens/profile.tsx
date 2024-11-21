import { StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.form}>
        {/* Name */}
        <TextInput
          style={styles.input}
          placeholder="Name"
        />

        {/* Email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
        />

        {/* Password */}
        <TextInput
          style={styles.input}
          placeholder="Password"
        />

        {/* Confirm Password */}
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
<View> 
  </View>    </View>
  )
}

export default profile

const styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: '#f0f4f8', // Subtle grayish blue for a clean background
    padding: 20,
      
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#3a3d5c', // Dark blue-gray
  },
  form: {
    marginTop: 30,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#3a3d5c',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },

})