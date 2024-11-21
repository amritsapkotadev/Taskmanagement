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
    backgroundColor: '#f0f4f8', // Subtle grayish blue for a clean background
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#3a3d5c', // Dark blue-gray
    marginBottom: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e4e7eb', // Subtle border for a crisp look
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d9e6',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#f9fafc', // Slightly off-white for inputs
    fontSize: 16,
    color: '#495057',
  },
  notes: {
    height: 120,
    textAlignVertical: 'top', // Ensures text starts at the top
  },
  addButton: {
    backgroundColor: '#5a67d8', // Gradient-like vibrant blue
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#5a67d8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
