import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TermsAndConditions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms and Conditions</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          1. **Introduction**: Welcome to our app. By using our services, you agree to these terms.
        </Text>
        <Text style={styles.text}>
          2. **Privacy**: Your privacy is important to us. We collect and use your information in accordance with our Privacy Policy.
        </Text>
        <Text style={styles.text}>
          3. **User Responsibilities**: You are responsible for maintaining the confidentiality of your account credentials and for any activity under your account.
        </Text>
        <Text style={styles.text}>
          4. **Prohibited Activities**: You may not misuse our services, including attempting to harm, disrupt, or exploit them for unauthorized purposes.
        </Text>
        <Text style={styles.text}>
          5. **Termination**: We may suspend or terminate your access to the app for violations of these terms.
        </Text>
        <Text style={styles.text}>
          6. **Modifications**: We reserve the right to modify these terms at any time. Continued use of the app constitutes acceptance of the revised terms.
        </Text>
        <Text style={styles.text}>
          7. **Limitation of Liability**: We are not responsible for any damages or losses resulting from your use of our app.
        </Text>
        <Text style={styles.text}>
          8. **Contact Us**: If you have any questions, please contact our support team at support@example.com.
        </Text>
        <Text style={styles.footerText}>
          Thank you for choosing our app. We hope you enjoy the experience!
        </Text>
      </ScrollView>
      <Button
        title="Accept and Continue"
        onPress={() => navigation.goBack()}
        color="#007BFF"
      />
    </View>
  );
};

export default TermsAndConditions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: '#555',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
    textAlign: 'center',
  },
});
