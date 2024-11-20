import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Report = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Report</Text>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
