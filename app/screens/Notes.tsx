import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';

const AddNotesPage = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  // Handle adding a new note
  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote(''); // Clear the input field after adding the note
    }
  };

  // Handle deleting a note
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Notes</Text>

      {/* Input field for new note */}
      <TextInput
        style={styles.input}
        placeholder="Type your note here..."
        value={note}
        onChangeText={setNote}
        multiline
      />

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton} onPress={addNote}>
        <Text style={styles.addButtonText}>Add Note</Text>
      </TouchableOpacity>

      {/* Displaying Notes */}
      <FlatList
        data={notes}
        renderItem={({ item, index }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteNote(index)}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default AddNotesPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#3a3d5c',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d9e6',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    textAlignVertical: 'top', // Aligns text to the top of the input field
    height: 120, // Give the input field enough space for multiline text
  },
  addButton: {
    backgroundColor: '#5a67d8',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
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
  noteItem: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  noteText: {
    fontSize: 16,
    color: '#495057',
    flex: 1, // Make the text flexible and push the delete button to the right
  },
  deleteButton: {
    backgroundColor: '#e53e3e',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
