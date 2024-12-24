import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ModalComponente() {
  const [selectedDate, setSelectedDate] = useState(1); 
  const [selectedEventType, setSelectedEventType] = useState(0); 
  const [startTime, setStartTime] = useState(''); 
  const [endTime, setEndTime] = useState(''); 

  // Datas disponíveis
  const dates = [
    { id: 1, day: 'Seg', date: '21' },
    { id: 2, day: 'Ter', date: '22' },
    { id: 3, day: 'Qua', date: '23' },
    { id: 4, day: 'Qui', date: '24' },
    { id: 5, day: 'Sex', date: '25' },
    { id: 6, day: 'Sáb', date: '26' },
    { id: 7, day: 'Dom', date: '27' },
  ];

  // Tipos de eventos
  const eventTypes = ['Missas', 'Confissão', 'Adoração'];

  useEffect(() => {
    
    setSelectedDate(1);
    setSelectedEventType(0);
  }, []);

  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={styles.modalContainer}>
        <View style={styles.content}>
          {/* Cabeçalho */}
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

          {/* Corpo */}
          <View style={styles.body}>
            {/* Datas */}
            <View style={styles.datesContainer}>
              {dates.map((date) => (
                <TouchableOpacity
                  key={date.id}
                  style={[
                    styles.dateBox,
                    selectedDate === date.id && styles.selectedBox, 
                  ]}
                  onPress={() =>
                    setSelectedDate(selectedDate === date.id ? null : date.id)
                  } 
                >
                  <Text
                    style={[
                      styles.dateBoxText,
                      selectedDate === date.id && styles.selectedText, 
                    ]}
                  >
                    {date.date}
                  </Text>
                  <Text
                    style={[
                      styles.dayBoxText,
                      selectedDate === date.id && styles.selectedText,
                    ]}
                  >
                    {date.day}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Título de Evento */}
            <Text style={styles.eventTitle}>Tipo de Evento</Text>
            <View style={styles.optionsContainer}>
              {eventTypes.map((event, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    selectedEventType === index && styles.selectedBox, 
                  ]}
                  onPress={() =>
                    setSelectedEventType(
                      selectedEventType === index ? null : index
                    )
                  } 
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedEventType === index && styles.selectedText,  
                    ]}
                  >
                    {event}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Horários */}
            <Text style={styles.eventTitle}>Horários</Text>
            <View style={styles.timeContainer}>
              <TextInput
                style={styles.timeInput}
                placeholder="Início (ex: 13:00)"
                value={startTime}
                onChangeText={setStartTime} 
                keyboardType="numeric" 
              />
              <Text style={styles.timeDivider}>até</Text>
              <TextInput
                style={styles.timeInput}
                placeholder="Término (ex: 17:00)"
                value={endTime}
                onChangeText={setEndTime} 
                keyboardType="numeric" 
              />
            </View>
            {/* Botão Buscar Resultados */}
            <TouchableOpacity style={styles.searchButton} onPress={() => { /* Ação do botão */ }}>
              <Text style={styles.searchButtonText}>Buscar Resultados</Text>
            </TouchableOpacity>

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
    height: '70%',
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
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 40,
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
    borderColor: '#000',
    backgroundColor: '#FFF',
  },
  selectedBox: {
    backgroundColor: '#333', 
    borderColor: '#333', 
  },
  dateBoxText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  dayBoxText: {
    fontSize: 10,
    color: '#555',
  },
  selectedText: {
    color: '#FFF', 
  },
  eventTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 30,
    marginBottom: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  timeInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  timeDivider: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
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
    borderColor: '#000',
    backgroundColor: '#FFF',
  },
  optionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },

  searchButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#333', 
    borderRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45, 
    elevation: 5, 
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', 
  },
});
