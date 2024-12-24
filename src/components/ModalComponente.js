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
  const [selectedDate, setSelectedDate] = useState(1); // Inicializa com o primeiro dia (ID: 1)
  const [selectedEventType, setSelectedEventType] = useState(0); // Inicializa com o primeiro evento (índice: 0)
  const [startTime, setStartTime] = useState(''); // Horário de início
  const [endTime, setEndTime] = useState(''); // Horário de término

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
    // Garante que o primeiro dia e o primeiro evento estarão selecionados ao abrir o modal
    setSelectedDate(1); // Define o primeiro dia como selecionado
    setSelectedEventType(0); // Define o primeiro evento como selecionado
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
                    selectedDate === date.id && styles.selectedBox, // Adiciona estilo quando clicado
                  ]}
                  onPress={() =>
                    setSelectedDate(selectedDate === date.id ? null : date.id)
                  } // Seleciona ou desmarca a data
                >
                  <Text
                    style={[
                      styles.dateBoxText,
                      selectedDate === date.id && styles.selectedText, // Muda a cor do texto ao selecionar
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
                    selectedEventType === index && styles.selectedBox, // Adiciona estilo quando clicado
                  ]}
                  onPress={() =>
                    setSelectedEventType(
                      selectedEventType === index ? null : index
                    )
                  } // Seleciona ou desmarca o evento
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedEventType === index && styles.selectedText, // Muda a cor do texto ao selecionar
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
                onChangeText={setStartTime} // Atualiza o horário de início
                keyboardType="numeric" // Apenas números
              />
              <Text style={styles.timeDivider}>até</Text>
              <TextInput
                style={styles.timeInput}
                placeholder="Término (ex: 17:00)"
                value={endTime}
                onChangeText={setEndTime} // Atualiza o horário de término
                keyboardType="numeric" // Apenas números
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
    backgroundColor: '#333', // Cor de fundo ao selecionar
    borderColor: '#333', // Cor da borda ao selecionar
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
    color: '#FFF', // Cor do texto ao selecionar
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
    backgroundColor: '#333', // Cor de fundo do botão
    borderRadius: 25, // Arredondar os cantos
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45, // Espaço entre os elementos
    elevation: 5, // Sombras
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // Cor do texto
  },
});
