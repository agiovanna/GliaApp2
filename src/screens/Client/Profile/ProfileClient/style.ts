// styles.ts
import { StyleSheet } from 'react-native';
import theme from '../../../../theme';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  profileHeader: {
    alignItems: 'center', 
    justifyContent: 'center',
  },

  userName: {
    marginTop: 45,
    marginBottom: 30,
    fontSize: 22,
    fontWeight: '600',
    color: 'white', 
  },
 
  anamnesisTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black', 
    marginLeft: 20, 
  
  },
  button: {
    width: '88%',
    marginTop: 8,
    backgroundColor: '#F1F1F1',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: 25, 
  },

  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20, 
  },

  icon1: {
    marginLeft: 200, 
  },
  icon2: {
    marginLeft: 186, 
  },
  icon3: {
    marginLeft: 198, 
  },
  icon4: {
    marginLeft: 150, 
  },
  icon5: {
    marginLeft: 195, 
  },
  icon6: {
    marginLeft: 158, 
  },
  scrollViewContent: {
    paddingBottom: 20,
 },



profileImage:{
width: 200,
height: 200,
borderRadius: 100,
marginTop: 50,
},

Header: {
  marginBottom: 10,
  width: '100%',
  borderBottomRightRadius: 80,
  backgroundColor: '#451952',
  alignItems: 'center', 
  justifyContent: 'center',
}, 
PicIcon:{
  alignItems: 'center'
}
});

export default styles;
