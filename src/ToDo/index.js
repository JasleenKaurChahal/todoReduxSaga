import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {styles} from './styles';
import {addTodo, toggleTodo, deleteTodo, updateTodo} from '../../redux/actions';
import {connect} from 'react-redux';

interface TaskItem {
  id: any;
  task: string;
  isCompleted: boolean;
}

interface State {
  index: any;
  task: string;
  taskArray: TaskItem[];
}

class ToDo extends Component<State> {
  state = {
    index: 0,
    task: '',
    taskArray: [],
  };

  handleInput = (text) => {
    this.setState({task: text});
  };

  onSubmit = (task) => {
    //update redux store
    task === ''
      ? Alert.alert('Task should not be empty')
      : this.props.addTodoArray(task, this.props.id);
    this.setState({task: ''});
  };

  onDelete = (id) => {
    // var array = [...this.state.taskArray];
    // array.splice(index, 1);
    // this.setState({taskArray: array});
    this.props.deleteTodoItem(id);
  };

  setCompleted = (id) => {
    this.props.toggleTodoItem(id);
    // var array = [...this.state.taskArray];
    // array[index] = {...array[index], isCompleted: !array[index].isCompleted};
    // this.setState({taskArray: array});
  };

  updateTask = (id, task) => {
    this.props.updateTodoItem(id, task);
    // var array = [...this.state.taskArray];
    // array[index] = {...array[index], name: text};
    // if (array[index].name !== '') {
    //   this.setState({taskArray: array});
    // } else {
    //   Alert.alert('Task can not be empty');
    // }
  };

  renderItem = (item) => {
    return (
      <View>
        <Text>item</Text>
      </View>
    );
  };

  render() {
    //console.log('this.props.taskArray', this.props.taskArray);
    return (
      <View style={styles.container}>
        <Text>Enter the task:</Text>
        <TextInput
          value={this.state.task}
          style={styles.input}
          placeholder="Enter task here..."
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleInput}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.onSubmit(this.state.task)}>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
        {this.props.taskArray.length !== 0 && (
          <View style={styles.contain}>
            <Text style={styles.heading}>ToDo List</Text>
            <FlatList
              data={this.props.taskArray}
              renderItem={({item, index}) => (
                <View style={styles.itemBlock} key={item.id}>
                  <View style={styles.itemContainer}>
                    <TouchableOpacity
                      onPress={() => this.setCompleted(item.id)}>
                      <View
                        style={[
                          styles.completeBox,
                          item.isCompleted && styles.completedBox,
                        ]}
                      />
                    </TouchableOpacity>
                    <TextInput
                      value={item.name}
                      style={[
                        styles.itemName,
                        {
                          textDecorationLine:
                            item.isCompleted && 'line-through',
                        },
                      ]}
                      onChangeText={(text) => this.updateTask(item.id, text)}
                    />
                  </View>
                  <TouchableOpacity onPress={() => this.onDelete(item.id)}>
                    <View style={styles.deleteBox}>
                      <Text style={styles.deleteTextBox}>Delete</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  taskArray: state.todos,
  id: state.todos.length,
});

const mapDispatchToProps = (dispatch) => ({
  addTodoArray: (task, id) => dispatch(addTodo(task, id)),
  toggleTodoItem: (id) => dispatch(toggleTodo(id)),
  deleteTodoItem: (id) => dispatch(deleteTodo(id)),
  updateTodoItem: (id, task) => dispatch(updateTodo(id, task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
