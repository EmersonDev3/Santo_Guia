import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';

const igrejas = [
    {
        id: '1',
        nome: 'Igreja Central',
        descricao: 'Uma igreja no coração da cidade.',
        imagem: 'https://via.placeholder.com/150',
    },
    {
        id: '2',
        nome: 'Igreja da Paz',
        descricao: 'Conhecida por sua arquitetura moderna.',
        imagem: 'https://via.placeholder.com/150',
    },
    {
        id: '3',
        nome: 'Igreja Nova Esperança',
        descricao: 'Famosa por suas celebrações comunitárias.',
        imagem: 'https://via.placeholder.com/150',
    },
];

export default function IgrejasProximasScroll() {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Igrejas Próximas</Text>
            <FlatList
                data={igrejas}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.lista}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingVertical: 20,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 20,
        marginBottom: 10,
    },
    lista: {
        paddingHorizontal: 10,
    },
    card: {
        width: Dimensions.get('window').width * 0.6,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginRight: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        alignItems: 'center',
        padding: 15,
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 5,
        textAlign: 'center',
    },
    descricao: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
});
