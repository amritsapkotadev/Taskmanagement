import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const Setting = () => {
  const navigation = useNavigation();

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
      <View style={styles.profileContainer}>
        <View style={styles.profileImagePlaceholder} />
        <View style={styles.profileEditOption}>
          <Text style={styles.profileName}>Amrit Sapkota</Text>
          <Text style={styles.emailText}>test@test.com</Text>
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={() => navigation.navigate('Editprofile')}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.settingOptions}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            activeOpacity={0.7}
            accessible={true}
            accessibilityLabel={option}
          >
            <Text style={styles.settingOptionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.otherOptions}>
        <TouchableOpacity
          style={styles.logout}
          activeOpacity={0.7}
          accessible={true}
          accessibilityLabel="Logout"
        >
          <Text style={styles.settingOptionsText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteAccount}
          activeOpacity={0.7}
          accessible={true}
          accessibilityLabel="Delete Account"
        >
          <Text style={styles.settingOptionsText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  emailText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
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
  profileEditOption: {
    alignItems: 'center',
  },
  editProfileButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    marginTop: 10,
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
  settingOptions: {
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
  settingOptionText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#444',
  },
  otherOptions: {
    width: '100%',
    marginTop: 20,
  },
  logout: {
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#007BFF',
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  deleteAccount: {
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
  settingOptionsText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
