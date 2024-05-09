async function getAllCourses() {
  // const response = await fetch('http://127.0.0.1:5500/crud/public/cursos');
  const response = await fetch('http://localhost:3000/cursos');
  const data = await response.json();

  const resDiv1 = document.querySelector('.res1');
  resDiv1.innerHTML = '';
  data.forEach(curso => {
    const cursosElement = document.createElement('p');
    cursosElement.textContent = curso;
    resDiv1.appendChild(cursosElement);
  })
  console.log(data);
}

async function getOne(index) {
  const response = await fetch(`http://localhost:3000/cursos/${index}`)
  const data = await response.json();

  const resDiv2 = document.querySelector('.res2');
  resDiv2.innerHTML = '';
  const cursoElement = document.createElement('p');
  cursoElement.textContent = data;
  resDiv2.appendChild(cursoElement);

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

  const resDiv3 = document.querySelector('.res3');
  resDiv3.innerHTML = '';
  const novoCursoElement = document.createElement('p');
  novoCursoElement.textContent = name;
  resDiv3.appendChild(novoCursoElement);

  console.log(data);
}

async function uptadeCourse(index) {
  const name = 'Atualizado';
  const response = await fetch(`http://localhost:3000/cursos/${index}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name })
  });
  const data = await response.json()

  const resDiv4 = document.querySelector('.res4');
  resDiv4.innerHTML = ''
  const updateCurso = document.createElement('p');
  updateCurso.textContent = name;
  resDiv4.appendChild(updateCurso); 

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

  const resDiv5 = document.querySelector('.res5');
  resDiv5.innerHTML = '';
  const cursoElement = document.createElement('p');
  cursoElement.textContent = data.message;
  resDiv5.appendChild(cursoElement);

  console.log(data);
}
