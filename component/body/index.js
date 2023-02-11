import React from 'react'
import { View, TouchableOpacity,Text } from 'react-native'
import styles from './style'
const  Task = (props) => {
  const {index} = props;
  const indexHandle = index < 10 ? `0${index}` : index;
  const styleColor = index % 2 == 0 ? styles.even : styles.odd;
  return (
    <TouchableOpacity>
              <TouchableOpacity style = {styles.item}
              onPress = {props.onDelete}
              >
                <View style = {[styles.square,styleColor]}>
                    <Text style = {styles.indexWork}>{indexHandle}</Text>
                </View>
                <View style = {styles.content}> 
                    <Text style = {styles.textContent}>{props.content}</Text>
                </View>
              </TouchableOpacity>
     </TouchableOpacity>
  )
}

export default Task;
ahihi co y conflix day thi sao 
