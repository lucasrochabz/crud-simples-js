async function getAllCourses() {
  // const response = await fetch('http://127.0.0.1:5500/crud/public/cursos');
  const response = await fetch('http://localhost:3000/cursos');
  const data = await response.json();
  console.log(data);
}
