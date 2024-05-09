async function getAllCourses() {
  // const response = await fetch('http://127.0.0.1:5500/crud/public/cursos');
  const response = await fetch('http://localhost:3000/cursos');
  const data = await response.json();
  const resDiv = document.querySelector('.res');
  resDiv.innerHTML = '';
  data.forEach(curso => {
    const cursoElement = document.createElement('p');
    cursoElement.textContent = curso;
    resDiv.appendChild(cursoElement);
  })
  console.log(data);
}

async function getOne(index) {
  const response = await fetch(`http://localhost:3000/cursos/${index}`)
  const data = await response.json();
  console.log(data);
}

async function createCourse() {
  const name = 'Node.js'
  const response = await fetch('http://localhost:3000/cursos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name })
  });

  const data = await response.json();
  console.log(data);
}

async function uptadeCourse(index) {
  const name = 'Atualização';
  const response = await fetch(`http://localhost:3000/cursos/${index}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name })
  });

  const data = await response.json()
  console.log(data);
}

async function deleteCourse(index) {
  const response = await fetch(`http://localhost:3000/cursos/${index}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json()
  console.log(data);
}
