import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoBack = () => {
        navigation.navigate('IntroScreen');
    };

    const handleLogin = () => {
        console.log("Login Attempted with:", email, password);
    };

    const handleSignUp = () => {
        navigation.navigate('CreateScreen');  // Navegar para a tela de criação de conta
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                <Icon name="arrow-left" size={32} color="#333" />
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.title}>Welcome to Santo Guia</Text>
                <Text style={styles.subtitle}>
                    Enter your email address and password to login.
                </Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                <View style={styles.linksContainer}>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>Forgot password ?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.orTextContainer}>
                    <Text style={styles.orText}>OR Login with</Text>
                </View>

                <View style={styles.grayFieldsContainer}>
                    <TouchableOpacity style={styles.grayField}>
                        <View style={styles.iconContainer}>
                            <View style={[styles.iconCircle, { backgroundColor: '#4267B2' }]}>
                                <FontAwesome name="facebook" size={20} color="#fff" />
                            </View>
                        </View>
                        <Text style={styles.grayFieldText}>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.grayField}>
                        <View style={styles.iconContainer}>
                            <View style={[styles.iconCircle, { backgroundColor: '#DB4437' }]}>
                                <FontAwesome name="google" size={20} color="#fff" />
                            </View>
                        </View>
                        <Text style={styles.grayFieldText}>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>
                        Don't have an account? <Text style={styles.signupLink} onPress={handleSignUp}>Sign Up</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    backButton: {
        marginTop: 50,
        marginLeft: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
        textAlign: 'left',
        paddingTop: 40,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'left',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
        marginTop: 15,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#555',
        marginBottom: 8,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    linksContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        marginTop: 10,
    },
    linkText: {
        fontSize: 14,
        color: '#000',
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
    },
    loginButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    orTextContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    orText: {
        fontSize: 15,
        color: '#949494',
        textAlign: 'center',
    },
    grayFieldsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    grayField: {
        width: '45%',
        height: 50,
        backgroundColor: '#F8F8FF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    grayFieldText: {
        fontSize: 16,
        color: '#666',
        marginLeft: 10,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    signupText: {
        fontSize: 14,
        color: '#666',
    },
    signupLink: {
        fontSize: 14,
        color: '#FA8072',
        fontWeight: 'bold',
    },
});
