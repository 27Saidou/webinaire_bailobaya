import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';

function Intro({navigation}) {
    return <ImageBackground
        source={require("../assets/background.png")}
        style={{ flex: 1 }}
    >
        {/* placer ici une image */}
        <Image source={require("../assets/icon.png")}
            style={{ width: 68, height: 60, marginTop: 50, marginStart: 30 }}
        />
        <View style={{ 
            width: 282, 
            height: 196,
            marginStart: 30, 
            margin: 65, 
            justifyContent: 'center',
            top: 150,
            left: 5 }}>
            <Text style={{
                textTransform: "uppercase",
                lineHeight: 48,
                fontSize: 36,
                color: "#FFFFFF" }}>
                Lancer{"\n"}
                votre{"\n"}
                carrier{"\n"}
                maintenant
            </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <View style={{ padding: 10, width: "100%", flexDirection: "row", justifyContent: "space-evenly" }}>
                <TouchableOpacity style=
                    {{
                        backgroundColor: "white",
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: 'center',
                        padding: 15, 
                        width: "45%",
                        marginVertical: 10,
                    }} 
                    onPress={()=>navigation.navigate("Login")}>
                    <Text style={{
                        color: "black", textTransform: "uppercase", fontSize: 12
                        , lineHeight: 15, width: 80,
                    }}>connexion</Text>
                </TouchableOpacity>
                <TouchableOpacity style=
                    {{
                        backgroundColor: "rgb(60, 179, 113)",
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: 'center',
                        padding: 15, width: "45%",
                        marginVertical: 10,
                        borderWidth: 1,
                        borderColor:"FFFFFF",
                    }}
                    onPress={()=>navigation.navigate("Register")}
                    >
                    <Text style={{
                        color: "white", textTransform: "uppercase", fontSize: 12
                        , lineHeight: 15, width: 90,fontWeight:"bold",
                    }}>inscription</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ImageBackground>

}
const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 150,
    }
});
export default Intro;
