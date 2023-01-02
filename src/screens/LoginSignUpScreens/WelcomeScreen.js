import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import logo from '../../../assets/Logo.png'
import { colors, hr80 } from '../../globals/style';




const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Yummie</Text>

      <View style={styles.logoout}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={hr80} />
      <Text style={styles.text}>Find the best food around you at lowest price.</Text>
      <View style={hr80} />

      <View style={styles.btnout}>
        <TouchableOpacity>
          <Text style={styles.btn}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btn}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#336ca1',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '200',
    // fontFamily: 'LibreBaskerville-Bold',
  },
  logoout: {
    width: "80%",
    height: "30%",
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 18,
    width: '80%',
    color: 'white',
    textAlign: 'center',
    // fontFamily: 'Metropolis-SemiBold',
  },
  btnout: {
    flexDirection: 'row',
  },
  btn: {
    fontSize: 20,
    color: '00f',
    textAlign: 'center',
    marginVertical: 30,
    marginHorizontal: 10,
    fontWeight: '700',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },

})

export default WelcomeScreen