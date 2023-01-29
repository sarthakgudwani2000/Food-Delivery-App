import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import logo from '../../../assets/Logo.png'
// import dark_mode from '../../../assets/dark_mode.png'
import { colors, hr80 } from '../../globals/style';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { firebase } from '../../../Firebase/firebaseConfig'

const WelcomeScreen = ({ navigation }) => {

  const [userlogged, setUserlogged] = useState(null);

  useEffect(() => {
    const checklogin = () => {
      firebase.auth().onAuthStateChanged((user) => {
        // console.log(user);
        if (user) {
          // navigation.navigate('home');
          setUserlogged(user);
        } else {
          // No user is signed in.
          console.log('no user');
        }
      });
    }
    checklogin();
  }, [])

  let [fontsLoaded] = useFonts({
    'Metropolis-Bold': require('../../../assets/fonts/Metropolis-Bold.ttf'),
    'Metropolis-SemiBold': require('../../../assets/fonts/Metropolis-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  const handlelogout = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        setUserlogged(null);
        console.log('signed out');
    }).catch((error) => {
        // An error happened.
        console.log(error);
    });
}

  return (
    <View style={styles.container}>

      {/* <View style={styles.darkmode}>
        <Image source={dark_mode} style={styles.darkmode} />
      </View> */}

      <Text style={styles.title}>Welcome to Yummie</Text>

      <View style={styles.logoout}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={hr80} />
      <Text style={styles.text}>Find the best food around you at lowest price.</Text>
      <View style={hr80} />

      {userlogged === null ?

        <View style={styles.btnout}>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={styles.btn}>Sign UP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={styles.btn}>Log In</Text>
          </TouchableOpacity>
        </View>
        :
        <View style={styles.logged}>
          <Text style={styles.txtlog}>Signed in as <Text style={styles.txtlogin}>{userlogged.email}</Text></Text>
          <View style={styles.btnout}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
              <Text style={styles.btn}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlelogout()}>
              <Text style={styles.btn}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
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
    color: colors.col1,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '200',
    fontFamily: 'Metropolis-Bold',
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
    color: colors.col1,
    textAlign: 'center',
    fontFamily: 'Metropolis-SemiBold',
  },
  btnout: {
    flexDirection: 'row',
  },
  btn: {
    fontSize: 20,
    color: colors.text3,
    textAlign: 'center',
    marginVertical: 30,
    marginHorizontal: 10,
    fontWeight: '700',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    paddingHorizontal: 20,
  },
  logged: {
    alignItems: 'center',

},
txtlog: {
    fontSize: 16,
    color: colors.col1,
},
txtlogin: {
    fontSize: 16,
    color: colors.col1,
    fontWeight: '700',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
}


})

export default WelcomeScreen