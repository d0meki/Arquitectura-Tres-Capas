
function getTodasLasCategorias(){
    fetch('http://localhost:3000/api/categoria/get-categoria', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.query);
        llenarTablaCategoria(data.query);

    })
    .catch((error) => console.error(error));
}

function llenarTablaCategoria(data) {
    const tabla = document.getElementById('table-categiria');
    const tbody = tabla.querySelector('tbody');
  
    // Recorre los datos y crea filas para la tabla
    data.forEach(item => {
      const fila = document.createElement('tr');
  
      // Crea las celdas de la fila
      const idCelda = document.createElement('td');
      idCelda.textContent = item.id;
  
      const categoriaCelda = document.createElement('td');
      categoriaCelda.textContent = item.nombre;
  
      const fechaCelda = document.createElement('td');
      fechaCelda.textContent = item.created_at;
  
      // Agrega las celdas a la fila
      fila.appendChild(idCelda);
      fila.appendChild(categoriaCelda);
      fila.appendChild(fechaCelda);
  
      // Agrega la fila al cuerpo de la tabla
      tbody.appendChild(fila);
    });
  }
  

function enviar(){
    console.log('enviar');
    var nombre_nueva_categoria = document.getElementById('nombre_categoria');
    const today = new Date();
    const data = {
        nombre: nombre_nueva_categoria.value,
        created_at: today.toISOString().substring(0, 10),
        updated_at: today.toISOString().substring(0, 10)
    }
    console.log(data);
    fetch('http://localhost:3000/api/categoria/add', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            return response.json();
        })
        .then((resp) => {
            const id = resp.data.record.insertId;
            fetch(`http://localhost:3000/api/categoria/by/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.query);
                llenarTablaCategoria(data.query);
                nombre_nueva_categoria.value = '';
            })
            .catch((error) => console.error(error));
        })
        .catch((error) => {
            console.log(error);
        });
}