import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'; // Importando o ícone da biblioteca

export default function createScreen() {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.navigate('IntroScreen'); // Redireciona para IntroScreen
    };

    return (
        <View style={styles.container}>
            {/* Botão de voltar */}
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                <Icon name="arrow-left" size={32} color="#333" /> {/* Ícone elegante */}
            </TouchableOpacity>

            {/* Restante da tela */}
            <View style={styles.content}>
                {/* Título principal */}
                <Text style={styles.title}>Welcome to Santo Guia</Text>
                {/* Subtítulo */}
                <Text style={styles.subtitle}>
                    Enter your email address and password to login.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#f5f5f5',
    },
    backButton: {
        marginTop: 50,
        marginLeft: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'flex-start', // Garante alinhamento à esquerda
        paddingHorizontal: 20, // Espaçamento das bordas
    },
    title: {
        fontSize: 28, // Tamanho maior para o título
        fontWeight: 'bold', // Texto forte
        color: '#333',
        marginBottom: 8, // Pequeno espaçamento entre os textos
        textAlign: 'left', // Alinhado à esquerda
        paddingTop: 40
    },
    subtitle: {
        fontSize: 16, // Tamanho menor para o subtítulo
        color: '#666', // Cor mais clara
        textAlign: 'left', // Alinhado à esquerda para manter consistência
    },
});
