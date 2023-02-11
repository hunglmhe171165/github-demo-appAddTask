
import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    item : {
        flexDirection : 'row',
        backgroundColor : '#fff',
        paddingVertical : 14,
        borderRadius : 105,
        justifyContent : 'space-around',
        marginBottom : 20
      },
      square : {
        width : 43,
        height: 36,
        marginHorizontal : 10,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
      },
      odd : {
        
        backgroundColor : '#4cf04a',
      },
      even : {
        
        backgroundColor : '#4ad0ec',
      },
      indexWork : {
        fontSize : 15,
        color : '#fff',
        fontWeight : 'bold'
      },
      content : {
        flex : '80%',
        marginLeft : 20,
        justifyContent : 'center',
      },
      textContent : {
        alignItems : 'center',
        fontSize : 17,
      }
})
export default styles;
