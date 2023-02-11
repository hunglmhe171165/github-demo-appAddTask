
import React , {useState} from 'react'

import { StyleSheet, Text, View , TouchableOpacity, ScrollView,Alert} from 'react-native';
import styles from './App.components.style';
import Task from './component/body/index';
import Form from './component/input'
const App = ()  => {
  const [taskList, settaskList] = useState([])
  const handleAddTask = (task) => {
      settaskList([...taskList,task]);
  }
  const deleteHandle = (index) =>{
    Alert.alert('Thông báo!!', 'Xác nhận xóa ?', [
      {
        text: 'OK',
        onPress: () => {
          let tmp = [...taskList];
          tmp.splice(index,1);
          settaskList(tmp);
        }
      },
      {text: 'Cancel', onPress: () => {}},
    ]);
  }
  return (
    <View style = {styles.container}>
        <View style = {styles.body}>
          <View style = {styles.header}>
            <Text style = {styles.headerText}>Todo List</Text>
          </View>
          <ScrollView style = {styles.items}>
              {
                taskList.map((value, index) => {
                  return <Task index = {index + 1} content = {value} onDelete = {() => deleteHandle(index)}/>
                })
                }
          </ScrollView>
        </View>
        <Form onAddTask = {handleAddTask}/>
    </View>
  );
}


export default App;