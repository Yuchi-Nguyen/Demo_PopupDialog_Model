import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [animationType, setAnimationType] = useState('none');

  const showModal = (type) => {
    setAnimationType(type);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Button title="Default Animation Dialog" onPress={() => showModal('none')} />
      <Button title="Scale Animation Dialog" onPress={() => showModal('fade')} />
      <Button title="Slide Animation Dialog" onPress={() => showModal('slide')} />

      <Modal
        animationType={animationType}
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Hello from Modal!</Text>
            <Text style={styles.content}>This is a simple Modal popup.</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  overlay: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)' 
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    marginBottom: 20,
    textAlign: 'center',
  },
});
