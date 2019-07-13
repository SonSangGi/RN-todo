import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar,TextInput,Dimensions,Platform,ScrollView } from 'react-native';
import ToDo from "./ToDo.js"
/* Dimensions를 통해 디바이스의 화면 정보를 받을 수 있음 */
const {height, width} = Dimensions.get("window");

export default class App extends Component {
  state = {
    newToDo: ""
  };
  render() {

  const {newToDo} = this.state;
  return (
    <View style={styles.container}>
      <StatusBar barStayle="light-content" />
      <Text style={styles.title}>SangGi's To Do</Text>
      <View style={styles.card}>
        <TextInput
        style={styles.input}
        placeholder={"메모하세요!"}
        value={newToDo}
        onChangeText={this._controllNewToDo}
        placeholderTextColor={"#999"}
        returnKeyType={"done"}
        autoCorrect={false}
        />
        <ScrollView>
          <ToDo />
        </ScrollView>
      </View>
    </View>
  );
}
  _controllNewToDo = text => {
    this.setState({
      newToDo: text
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 30
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    /* Ploatform.select({}) 플랫폼에 다라서 설정 */
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset:{
        height:-1,
        width:0
        }
      },
      android: {
        // elevation : shodow랑 같은 기능 0 ~ 5 까지
        elevation: 3
      }
    })
  },
  input: {
  padding: 20,
  borderBottomColor: "#bbb",
  borderBottomWidth: 1,
  fontSize: 25,
}

});
