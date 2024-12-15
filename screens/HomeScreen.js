import React, { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { Appbar, TextInput, Button, FAB } from "react-native-paper";
import TaskItem from "../components/TaskItem";

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: taskText }]);
      setTaskText("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="My Tasks" />
      </Appbar.Header>

      <TextInput
        mode="outlined"
        label="Add a Task"
        value={taskText}
        onChangeText={setTaskText}
        style={styles.input}
      />
      <Button mode="contained" onPress={addTask} style={styles.addButton}>
        Add Task
      </Button>

      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item) => item.id}
      />

      <FAB style={styles.fab} icon="plus" onPress={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
  input: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  addButton: {
    marginHorizontal: 16,
    marginTop: 8,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
