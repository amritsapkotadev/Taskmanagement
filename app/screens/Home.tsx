import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notes from './Notes';
import setting from './setting';
import Report from './Report';
import Add from './Add';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon from 'react-native-vector-icons/MaterialIcons'; // Import an icon set
 
const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Hello, Amrit</Text>
        <Text style={styles.subtitle}>Good Morning</Text>
      </View>
      <View style={styles.dashboard}>
        <Text style={styles.progresstext}>Your progress for the task you added</Text>
        <TouchableOpacity style={styles.viewtaskbutton}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>View Task</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taskinfocontainer}>
        <View style={styles.taskinfo}>
          <TouchableOpacity style={styles.viewtaskbutton}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>View Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} 
      options ={{
        headerShown: false,
        tabBarIcon: ({color}) => (
          <Icon name="home" color={color} size={30} />
        )
      }}
      />
      <Tab.Screen name="Report" component={Report} options ={{
        tabBarIcon: ({color}) => (
          <Icon name="analytics" color={color} size={30} />
        )
      }}
      />
       <Tab.Screen name="Add" component={Add} options ={{
        headerShown: false,
        tabBarIcon: ({color}) => (
          <Icon name="add" color={color} size={40} />
        )
      }}
      />
  
      <Tab.Screen name="Notes" component={Notes} options ={{
        headerShown: false,
        tabBarIcon: ({color}) => (
          <Icon name="note" color={color} size={30} />
        )
      }}
      />
    <Tab.Screen name="setting" component={setting}
    options ={{ 
      headerShown: false,
      tabBarIcon: ({color}) => (
        <Icon name="settings" color={color} size={30} />
      )
    }} />


    </Tab.Navigator>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
  dashboard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: 'blue',
    margin: 10,
    padding: 10,
    borderRadius: 30,
  },
  progresstext: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    margin: 10,
  },
  viewtaskbutton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
});
