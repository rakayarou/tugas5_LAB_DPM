import React from "react";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";

export default function TaskItem({ task }) {
  return (
    <List.Item
      title={task.text}
      left={(props) => <List.Icon {...props} icon="check-circle-outline" />}
      style={styles.item}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 4,
  },
});
