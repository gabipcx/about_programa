import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',  
  },
   header: {
    fontSize: 30,
    marginBottom: 20,
    color: '#38a7bf',
    fontWeight: 'bold',
   },
    text: {
      fontSize: 18, // Aumentando o tamanho da fonte do título
      marginBottom: 20,
      color: 'black',
    },

    loginButton: {
      backgroundColor: '#1E88E5',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5, 
      alignItems: 'center',
      marginBottom: 10,
      elevation: 2, 
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },

    },
    loginButtonText: {
      color: '#FAF0E6', // Texto branco no botão
      fontSize: 16,
      fontWeight: 'bold',
    },

    betania: {
      color: '#A7A7A7',
      fontSize: 12,
      marginTop: 25,
  },

    navbar: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      backgroundColor: '#f8f8f8',
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    
    navText: {
      fontSize: 16,
      color: '#555',
    },
   
  });

export default styles;