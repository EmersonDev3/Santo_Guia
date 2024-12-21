import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  PanResponder,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ModalComponente({ setModalVisible }) {
  const [pan, setPan] = useState({ y: 0 });
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const windowHeight = Dimensions.get('window').height;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {},
    onPanResponderMove: (_, gestureState) => {
      setPan({ y: gestureState.dy });
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy > 150) {
        setModalVisible(false);
      }
      setPan({ y: 0 });
    },
  });

  const getNextDates = () => {
    const today = new Date();
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    let dates = [];

    for (let i = 0; i < 7; i++) {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + i);
      const day = nextDate.getDate();
      const month = nextDate.getMonth() + 1;
      const dayOfWeek = daysOfWeek[nextDate.getDay()];
      dates.push({ day, month, dayOfWeek });
    }

    return dates;
  };

  const nextDates = getNextDates();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View
          style={[
            styles.content,
            {
              transform: [{ translateY: pan.y }],
            },
          ]}
          {...panResponder.panHandlers}
        >
          <View style={styles.header}>
            <Text style={styles.title}>Agenda</Text>
            <View style={styles.dateContainer}>
              <Icon
                name="calendar-today"
                size={18}
                color="#007BFF"
                style={styles.icon}
              />
              <Text style={styles.dateText}>Jan 21/24</Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.datesContainer}>
              {nextDates.map((date, index) => (
                <View
                  key={index}
                  style={[
                    styles.dateBox,
                    {
                      backgroundColor:
                        selectedIndex === index ? '#000' : '#FFF',
                      borderColor: selectedIndex === index ? '#FFF' : '#000',
                    },
                  ]}
                  onTouchStart={() => setSelectedIndex(index)}
                  onTouchEnd={() => setSelectedIndex(null)}
                >
                  <Text
                    style={[
                      styles.dateBoxText,
                      {
                        color: selectedIndex === index ? '#FFF' : '#000',
                      },
                    ]}
                  >
                    {date.day}
                  </Text>
                  <Text
                    style={[
                      styles.dayBoxText,
                      {
                        color: selectedIndex === index ? '#FFF' : '#555',
                      },
                    ]}
                  >
                    {date.dayOfWeek}
                  </Text>
                </View>
              ))}
            </View>

            <Text style={styles.eventTitle}>Tipo de Evento</Text>
            <View style={styles.optionsContainer}>
              {['Missas', 'confissão', 'Adoração'].map((event, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    {
                      backgroundColor: selectedEvent === event ? '#333' : '#FFF',
                    },
                  ]}
                  onPress={() => setSelectedEvent(event)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      {
                        color: selectedEvent === event ? '#FFF' : '#000',
                      },
                    ]}
                  >
                    {event}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingBottom: 50,
  },
  content: {
    width: '90%',
    height: '65%',
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 10,
    overflow: 'hidden',
  },
  header: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F9FF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 15,
  },
  icon: {
    marginRight: 5,
  },
  dateText: {
    fontSize: 14,
    color: '#007BFF',
    fontWeight: '600',
  },
  body: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  datesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dateBox: {
    width: 41,
    height: 65,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
    borderWidth: 1,
  },
  dateBoxText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  dayBoxText: {
    fontSize: 10,
    color: '#555',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  optionButton: {
    width: 100,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  optionText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
