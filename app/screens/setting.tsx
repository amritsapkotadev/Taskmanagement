import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
          <TouchableOpacity key={index} style={styles.optionButton} activeOpacity={0.7}>
            <Text style={styles.settingoptiontext}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.otheroptions}>
        <TouchableOpacity style={styles.logout} activeOpacity={0.7}>
          <Text style={styles.settingoptionstext}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteaccount} activeOpacity={0.7}>
          <Text style={styles.settingoptionstext}>Delete Account</Text>
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
    backgroundColor: '#f9f9f9',
  },
  profilecontainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  profileImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  profileeditoption: {
    marginTop: 10,
  },
  editprofilebutton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  editProfileText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingoptions: {
    width: '100%',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#fff',
    padding: 18,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  settingoptiontext: {
    fontSize: 18,
    fontWeight: '500',
    color: '#444',
  },
  otheroptions: {
    width: '50%',
    marginTop: 20,
  },
  logout: {
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: 'blue',
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  deleteaccount: {
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#ff4d4d',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  settingoptionstext: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
