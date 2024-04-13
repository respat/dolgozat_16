/*
File: App.js
Author: Resperger Patrik
Copyright: 2024, Resperger Patrik
Group: Szoft II/1/E
Date: 2024-04-13
Github: https://github.com/respat/
Licenc: GNU GPL */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getStudents } from "./service/studentsService";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";

export default function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getStudents().then((data) => {
      console.log(data);
      setStudents(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Tanulók</Text>
      <FlatList
        data={students}
        renderItem={({ item }) => (
          <View style={styles.studentList}>
            <Text style={styles.cityText}>Név: {item.name}</Text>
            <View style={styles.footer}>
              <Text style={styles.cityText}>Település: {item.city} </Text>
            </View>
            <View>
              <Text style={styles.birthText}>Születési idő: {item.birth}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  studentList: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    width: 300,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 5,
  },
  cityText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  birthText: {
    fontSize: 16,
    color: "#666",
  },
});
