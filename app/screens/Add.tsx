import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');

  const handleAddTask = () => {
    const task = {
      taskName,
      startTime,
      endTime,
      date,
      notes,
    };
    console.log('Task Added:', task);
    // Add your logic to save the task here
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        {/* Task Description */}
        <Text style={styles.optiontitle}>Task Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Task Name"
          value={taskName}
          onChangeText={setTaskName}
        />

        {/* Start Time */}
        <Text style={styles.optiontitle}>Start Time</Text>
        <DatePicker date={startTime} onDateChange={setStartTime} mode="time" />

        {/* End Time */}
        <Text style={styles.optiontitle}>End Time</Text>
        <TextInput
          style={styles.input}
          placeholder="End Time (e.g., 12:00 PM)"
          value={endTime}
          onChangeText={setEndTime}
        />

        {/* Date */}
        <Text style={styles.optiontitle}>Date</Text>
        <DatePicker date={date} onDateChange={setDate} mode="date" />

        {/* Additional Notes */}
        <Text style={styles.optiontitle}>Additional Notes</Text>
        <TextInput
          style={[styles.input, styles.notes]}
          placeholder="Additional Notes (Optional)"
          value={notes}
          onChangeText={setNotes}
          multiline
          numberOfLines={4}
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
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
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#3a3d5c',
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
    borderColor: '#e4e7eb',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d9e6',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#f9fafc',
    fontSize: 16,
    color: '#495057',
  },
  notes: {
    height: 120,
    textAlignVertical: 'top',
  },
  addButton: {
    backgroundColor: '#5a67d8',
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
  optiontitle: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 10,
  },
});
