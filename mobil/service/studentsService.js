/*
File: studentService.js
Author: Resperger Patrik
Copyright: 2024, Resperger Patrik
Group: Szoft II/1/E
Date: 2024-04-13
Github: https://github.com/respat/
Licenc: GNU GPL */

const host = "http://localhost:3000/";
const endpoint = "students";

export async function getStudents() {
  const url = host + endpoint;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
