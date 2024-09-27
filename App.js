import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';

// Custom Button Component
function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

// Onboarding Screen
function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../react-native/assets/welcomeimage.png')} />
      <Text style={styles.heading}>Discover Your Dream Job Here!</Text>
      <Text style={styles.subHeading}>Explore all the existing job roles based on your interest and study major</Text>
      <CustomButton title="Go to Login" onPress={() => navigation.navigate('Login')} />
      <CustomButton title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
}

// Login Screen
function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.loginHeading}>Login Here</Text>
      <Text style={styles.subHeading}>Welcome Back! You Have Been Missed</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton title="Sign In" onPress={() => alert('Login Successful!')} />

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or Continue With</Text>
        <View style={styles.line} />
      </View>

      <Image
        source={require('../react-native/assets/social media.png')}  // Replace with the path to your image
        style={styles.socialLogos}
      />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.linkText}>Create New Account</Text>
      </TouchableOpacity>
    </View>
  );
}

// Signup Screen
function SignupScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.signupHeading}>Create a New Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton title="Sign Up" onPress={() => alert('Signup Successful!')} />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already Have an Account?</Text>
      </TouchableOpacity>
    </View>
  );
}

// Forgot Password Screen
function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reset Your Password</Text>
      <Text style={styles.subHeading}>Enter your registered email to receive the password reset link.</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <CustomButton title="Submit" onPress={() => alert('Password reset link sent!')} />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Go back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

// Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Forgot Password' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  heading: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  loginHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4C68FF',
    marginBottom: 20,
    textAlign: 'center',
  },
  signupHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4C68FF',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    width: '85%',
    marginBottom: 20,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  customButton: {
    backgroundColor: '#4C68FF',
    padding: 15,
    borderRadius: 8,
    width: '85%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  forgotPasswordText: {
    color: '#4C68FF',
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  linkText: {
    color: '#4C68FF',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 30,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    marginVertical: 20,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#666',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  socialLogos: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
    marginVertical: 30,
  },
});
