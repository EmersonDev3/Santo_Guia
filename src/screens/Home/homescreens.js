import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.rowContainer}>
                    <View style={styles.textsContainer}>
                        <Text style={styles.smallText}>Oi, Oliver CEO</Text>
                        <Text style={styles.largeText}>Find Details</Text>
                    </View>
                    <View style={styles.circle}>
                        <Icon name="user-alt" size={20} color="#fff" />
                    </View>
                </View>
            </View>

            <View style={styles.searchContainer}>
                <Icon name="search" size={20} color="#aaa" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar..."
                    placeholderTextColor="#aaa"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: '#ffff',
        paddingTop: 50,
    },
    box: {
        alignItems: 'center',
        width: '90%',
        paddingTop: 40,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#d1b3e2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textsContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    smallText: {
        fontSize: 18,
        fontWeight: '400',
        color: '#aaa',
        marginBottom: 1,
    },
    largeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 30,
        paddingHorizontal: 15,
        marginTop: 20,
        width: '90%',
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        fontSize: 18,
        color: '#333',
    },
});
