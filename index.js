const URL_API = "https://fakestoreapi.com/"

switch(process.argv[2]){
  case "GET": 
      Get(process.argv[3]);
      break;
  case "POST": 
      Post(process.argv.slice(3));
      break;
    case "DELETE": 
      Delete(process.argv[3]);
      break;
    default: 
      console.log("ERROR, INGRESE UN MÉTODO CORRECTO");
      break;
}

function Get(parametros){
    fetch(URL_API + parametros)
    .then(response => response.json())
    .then(data => console.log(data));
}

function Post(parametros){ 
    const [parametro, titulo, precio, categoria] = parametros;
    fetch(URL_API + parametro, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(({
        "titulo": titulo,
        "precio": precio,
        "categoria": categoria
    }))
    })
    .then(response => response.json())
    .then(data => console.log(data));
}

function Delete(parametros){
  fetch(URL_API + parametros, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => console.log(data));
}

