import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Timeline() {
  const times = [
    '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM',
    '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM',
    '9:00 PM', '10:00 PM', '11:00 PM', '12:00 AM',
  ];

  const formatTime = (time) => {
    const [hour, rest] = time.split(':');
    const hourFormatted = hour.length === 1 ? `0${hour}` : hour;
    return `${hourFormatted}:${rest}`;
  };

  const renderBox = (time) => {
    const boxStyles = [
      styles.box,
      time === '7:00 AM' && { backgroundColor: '#FF5733' }, 
      time === '8:00 AM' && { backgroundColor: '#FFC300' },
      time === '9:00 AM' && { backgroundColor: '#3300ff' }, 
      time === '10:00 AM' && { backgroundColor: '#8A2BE2' },
      time === '11:00 AM' && { backgroundColor: '#0f0000' },
    ];

    if (time === '7:00 AM' || time === '8:00 AM' || time === '9:00 AM' || time === '10:00 AM' || time === '11:00 AM') {
      return (
        <View style={boxStyles}>
          <Text style={styles.boxText}>Condição</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {times.map((time, index) => (
          <View key={index} style={styles.timeContainer}>
            <Text style={styles.time}>{formatTime(time)}</Text>
            <View style={styles.line} />
            {renderBox(time)}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
    height: 50,
  },
  time: {
    fontSize: 15,
    color: '#979797',
    marginRight: 10,
  },
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#d0cece',
    flex: 1,
  },
  box: {
    backgroundColor: '#FF5733',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
    marginTop: -25,
    marginBottom: 10,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    width: 120,
  },
  boxText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
