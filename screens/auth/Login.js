import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ConnexionPhone from '../../screens/auth/ConnexionPhone';

const Login = ({navigation}) => {
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
                <Image
                    source={require('../../assets/logoVert.png')}
                    style={{ width: 36, height: 38 }}
                />
            </View>
            <View>
                <Text>Conectez-vous</Text>
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
            <View style={{ marginTop: 10, alignSelf: "flex-end" }}>
                <Text style=
                    {{
                        color: "rgba(0,0,0.8)",
                        fontSize: 12
                    }}>Mot de passe oublié ?</Text>
            </View>
            <View style={{ width: "100%", marginTop: 30 }}>
                <TouchableOpacity style={{
                    backgroundColor: "#11B09E", height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10
                }}>
                    <Text style={{ color: "#FFF" }}>se connecter</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: "100%", marginTop: 30 }}>
                <TouchableOpacity style={{
                    backgroundColor: "#fff", height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "#11BD9E",
                    borderRadius: 10, borderWidth: 1,
                }}
                onPress={()=>navigation.navigate("ConnexionPhone")}
                >
                <Text style={{}}>se connecter avec un numero</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Login
