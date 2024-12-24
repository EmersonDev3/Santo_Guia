import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavbarComponent from '../../components/NavbarComponent'; // Certifique-se de que este componente foi exportado corretamente.
import ModalComponente from '../../components/ModalComponente'; // Certifique-se de que este componente foi exportado corretamente.

export default function HomeScreen() {
  const [activeButton, setActiveButton] = useState('Home');
  const [isModalVisible, setModalVisible] = useState(false);
  const textInputRef = useRef(null);

  const openModal = () => {
    setModalVisible(true);
    if (textInputRef.current) {
      textInputRef.current.blur(); // Remove o foco do TextInput ao abrir o modal
    }
  };

  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.textsContainer}>
          <Text style={styles.largeText}>Explore Locations</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          style={styles.profileIcon}
          imageStyle={styles.profileImage}
        />
      </View>

      {/* Campo de Busca */}
      <View style={styles.searchContainer}>
        <TextInput
          ref={textInputRef}
          style={styles.searchInput}
          placeholder="Buscar..."
          placeholderTextColor="#aaa"
          onFocus={openModal}
        />
        <Icon name="search" size={20} color="#aaa" style={styles.searchIcon} />
      </View>

      {/* Modal de Busca */}
      {isModalVisible && (
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}
        >
          <ModalComponente setModalVisible={setModalVisible} />
        </Modal>
      )}

      {/* Botões de Navegação */}
      <View style={styles.buttonsContainer}>
        {['Home', 'Liturgia', 'Eventos', 'Favoritos'].map((button) => (
          <TouchableOpacity
            key={button}
            style={[
              styles.button,
              activeButton === button && styles.activeButton,
            ]}
            onPress={() => setActiveButton(button)}
          >
            <Text
              style={[
                styles.buttonText,
                activeButton === button && styles.activeText,
              ]}
            >
              {button}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Navbar */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={0}
      >
        <NavbarComponent />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  textsContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  largeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    marginLeft: 5,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    paddingHorizontal: 20,
    height: 50,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    width: '90%',
    marginHorizontal: '5%',
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 18,
    color: '#333',
  },
  searchIcon: {
    marginLeft: 10,
  },
  buttonsContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    marginTop: 5,
    paddingVertical: 10,
  },
  button: {
    width: '22%',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 0,
  },
  activeButton: {
    backgroundColor: '#222',
    borderColor: '#444',
    borderWidth: 1,
    elevation: 2,
  },
  buttonText: {
    fontSize: 14,
    color: '#B0B0B0',
    fontWeight: 'bold',
  },
  activeText: {
    color: '#fff',
  },
});
