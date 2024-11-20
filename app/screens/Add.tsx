import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AddTask = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Task</Text>
      <View style={styles.form}>
        {/* Task Description */}
        <TextInput
          style={styles.input}
          placeholder="Task Description"
          multiline
          numberOfLines={3}
        />

        {/* Start Time */}
        <TextInput
          style={styles.input}
          placeholder="Start Time (e.g., 10:00 AM)"
        />

        {/* End Time */}
        <TextInput
          style={styles.input}
          placeholder="End Time (e.g., 12:00 PM)"
        />

        {/* Date */}
        <TextInput style={styles.input} placeholder="Date (e.g., 2024-11-20)" />

        {/* Additional Notes */}
        <TextInput
          style={[styles.input, styles.notes]}
          placeholder="Additional Notes (Optional)"
          multiline
          numberOfLines={4}
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Light background
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Shadow for Android
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    fontSize: 16,
    color: '#495057',
  },
  notes: {
    height: 100,
    textAlignVertical: 'top', // Ensures text starts at the top
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
