//Parte CRUD
const API_URL = "http://localhost:8080/apiAduana";


export async function getAduana(){
    const res = await fetch(`${API_URL}/datosAduana`);
    return res.json();
}

export async function createAduana(data) { 
    //"data" son los datos que se guardan
    await fetch(`${API_URL}/agregarAduana`, {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
}

export async function updateAduana(id, data) {
    //el "id" se usa para saber cual actualizaremos y "data" para recibir los datos
    await fetch(`${API_URL}/actualizarAduana/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
}

export async function deleteAduana(id) {
    await fetch(`${API_URL}/eliminarAduana/${id}`, {
        method: "DELETE"
    });
}
