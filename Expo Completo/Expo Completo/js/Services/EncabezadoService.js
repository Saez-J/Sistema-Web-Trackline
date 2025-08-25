//Parte CRUD
const API_URL = "http://localhost:8080/apiOrden";


export async function getDataOrden(){
    const res = await fetch(`${API_URL}/dataOrden`);
    return res.json();
}

export async function createOrden(data) { 
    //"data" son los datos que se guardan
    await fetch(`${API_URL}/postOrden`, {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
}

export async function updateOrden(id, data) {
    //el "id" se usa para saber cual actualizaremos y "data" para recibir los datos
    await fetch(`${API_URL}/updateOrden/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
}

export async function deleteOrden(id) {
    await fetch(`${API_URL}/deleteOrden/${id}`, {
        method: "DELETE"
    });
}
