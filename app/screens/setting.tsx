import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const setting = () => {
  const options = [
    'Notification',
    'Dark Mode',
    'Help',
    'Support',
    'Language',
    'Privacy Policy',
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.profilecontainer}>
        <Text style={styles.profileName}>Amrit Sapkota</Text>
        {/* Placeholder for profile image */}
        <View style={styles.profileImagePlaceholder} />
        <View style={styles.profileeditoption}>
          <TouchableOpacity style={styles.editprofilebutton}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.settingoptions}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.optionButton}>
            <Text style={styles.settingoptiontext}>{option}</Text>
          </TouchableOpacity>
        ))}

      </View>
      <View style={styles.otheroptions}>
        <TouchableOpacity style={styles.optionButton1}>
          <Text style={styles.settingoptiontext}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton2}>
          <Text style={styles.settingoptiontext}>Delete Account</Text>
            </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

export default setting;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  profilecontainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#d9d9d9',
    marginBottom: 20,
  },
  profileeditoption: {
    marginTop: 10,
  },
  editprofilebutton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  editProfileText: {
    color: 'white',
    fontWeight: 'bold',
  },
  settingoptions: {
    width: '100%',
  },
  optionButton: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  settingoptiontext: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  otheroptions: {
        marginTop: 20,
    display: 'flex',
    flexDirection: 'column',

    
  },
  optionbutton1: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  optionbutton2: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

});
