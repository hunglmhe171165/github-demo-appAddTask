import React , {useState}from 'react'
import { View , Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert, Keyboard} from 'react-native'
import styles from './style'
const Form = (props) => {
  const [task, setTask] = useState();
  const addTask = () => {
       if(task.length==0) {
        alert('Add không thành công!');
        return false;
       }
       props.onAddTask(task);
       alert('add thành công !');
       setTask('');
       Keyboard.dismiss();
  }
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS ==='ios' ? 'padding': "height" }
    keyboardVerticalOffset = {10}
    style = {styles.addTask}>
        <TextInput 
        value={task}
        onChangeText={text => setTask(text)}
        placeholder= "Enter Task"
        style = {styles.input}/>
        <TouchableOpacity 
        onPress={addTask}
        style = {styles.iconWraper}>
            <Text style = {styles.icon}>+</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default Form
