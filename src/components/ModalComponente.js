import React, { useState } from 'react';
import { View, StyleSheet, Modal, PanResponder } from 'react-native';

export default function ModalComponente({ setModalVisible }) {
  const [pan, setPan] = useState({ y: 0 });

  // Criação do PanResponder para detectar os gestos de arraste
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {},
    onPanResponderMove: (_, gestureState) => {
      setPan({ y: gestureState.moveY });
    },
    onPanResponderRelease: (_, gestureState) => {
      // Fechar o modal se arrastado mais de 150px para baixo
      if (gestureState.moveY - gestureState.y0 > 150) {
        setModalVisible(false); 
      }
      setPan({ y: 0 });
    },
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => setModalVisible(false)} 
    >
      <View style={styles.modalContainer}>
        <View
          style={[styles.content, { transform: [{ translateY: pan.y }] }]}
          {...panResponder.panHandlers} 
        >
          <View style={styles.dragHandle} />
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
  },
  content: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  dragHandle: {
    width: 60,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 2.5,
    marginBottom: 10,
  },
});
