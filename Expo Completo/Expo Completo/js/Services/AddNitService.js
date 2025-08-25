//Parte CRUD
export const API_URL = "http://localhost:8080/apiClientes";

export async function getCliente() {
    try {
        const res = await fetch(`${API_URL}/clientes`);
        if (!res.ok) throw new Error(`Error en la petición: ${res.status} ${res.statusText}`);
        return await res.json();
    } catch (error) {
        console.error("Ha ocurrido un error al cargar los clientes:", error);
        throw error;
    }
}

export async function createCliente(data) { 
    //"data" son los datos que se guardan
    await fetch(`${API_URL}/agregarCliente`, {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
}

export async function updateCliente(id, data) {
    //el "id" se usa para saber cual actualizaremos y "data" para recibir los datos
    await fetch(`${API_URL}/actualizarCliente/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
}

export async function deleteCliente(id) {
    await fetch(`${API_URL}/eliminarCliente/${id}`, {
        method: "DELETE"
    });
}
