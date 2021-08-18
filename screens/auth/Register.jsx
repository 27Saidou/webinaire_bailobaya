import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import ConnexionPhone from '../../screens/auth/ConnexionPhone';
import React from 'react'

const Register = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                marginTop: 30,
                alignItems: 'center',
                backgroundColor: '#fff',
                paddingHorizontal: 20
            }}
        >
            <View style={{ margin: 20 }}>
                <Image source={require("../../assets/logo_vert.png")}
                    style={{ width: 36, height: 38 }}
                />
            </View>
            <View>
                <Text>Inscrivez-vous</Text>
            </View>
            <View
                style={{
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 50,
                    marginTop: 30,
                    width: '100%',
                    borderColor: '#F1F1F1',
                    borderRadius: 1,
                    borderRadius: 10
                }}
            >
                <TextInput
                    placeholder={'prenom & nom'}
                    placeholderTextColor={'#5A5A5A'}
                    style={{ paddingLeft: 10 }}
                />
            </View>
            <View
                style={{
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 50,
                    marginTop: 30,
                    width: '100%',
                    borderColor: '#F1F1F1',
                    borderRadius: 1,
                    borderRadius: 10
                }}
            >
                <TextInput
                    placeholder={'Adress email'}
                    placeholderTextColor={'#5A5A5A'}
                    style={{ paddingLeft: 10 }}
                />
            </View>
            <View
                style={{
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 50,
                    marginTop: 30,
                    width: '100%',
                    borderColor: '#F1F1F1',
                    borderRadius: 1,
                    borderRadius: 10
                }}
            >
                <TextInput
                    placeholder={'Mot de passe'}
                    placeholderTextColor={'#5A5A5A'}
                    style={{ paddingLeft: 10 }}
                />
            </View>
            <View
                style={{
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 50,
                    marginTop: 30,
                    width: '100%',
                    borderColor: '#F1F1F1',
                    borderRadius: 1,
                    borderRadius: 10
                }}
            >
                <TextInput
                    placeholder={'Confirmez mot de passe'}
                    placeholderTextColor={'#5A5A5A'}
                    style={{ paddingLeft: 10 }}
                />
            </View>
            <View style={{ width: "100%", marginTop: 30 }}>
                <TouchableOpacity style={{
                    backgroundColor: "#11B09E", height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10
                }}>
                    <Text style={{ color: "#FFF" }}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 50 }}>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Text>
                        Déja inscrit ?
                        <Text style={{ fontWeight: "bold" }}>Se connecter</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Register
