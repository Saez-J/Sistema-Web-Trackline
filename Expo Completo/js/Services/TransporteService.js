//Parte CRUD
const API_URL = "http://localhost:8080/apiTransportista";


export async function getTransportista(){
    const res = await fetch(`${API_URL}/dataTransportista`);
    return res.json();
}

export async function createTransportista(data) { 
    //"data" son los datos que se guardan
    await fetch(`${API_URL}/postTransportista`, {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
}

export async function updateTransportista(id, data) {
    //el "id" se usa para saber cual actualizaremos y "data" para recibir los datos
    await fetch(`${API_URL}/updateTransportista/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
}

export async function deleteTransportista(id) {
    await fetch(`${API_URL}/deleteTransportista/${id}`, {
        method: "DELETE"
    });
}
