import { Bounce, toast } from "react-toastify";
import swal from "sweetalert";

const urlBase = 'http://localhost:3000';

export async function getInstrumentosApi(){

    // const urlCustom = `${urlBase}/Instrumentos`;
    // const response = await fetch(urlCustom, {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json' }
    // })
    const response = await fetch('/src/instrumentos.json');
    // console.log(await response.json());

    return await response.json();
}

export async function getInstrumentoApi(id: any){

    const urlCustom = `${urlBase}/instrumentos/${id}`;
    const response = await fetch(urlCustom, {
        method: 'GET',
        headers: { 
          Accept: "application/json",
          'Content-Type': 'application/json' 
        }
    })

    return response.json();
}

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

// Función generica para obtener datos mediante una solicitud GET
export async function getData<T>(path: string): Promise<T> {
  try {
    const response = await fetch(`${urlBase}/${path}`);
    if (!response.ok) {
      toast.error('Ocurrio un error!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      throw Error(response.statusText);
    }
    return response.json(); // Retorna los datos en formato JSON
  } catch (error) {
    return Promise.reject(error); // Rechaza la promesa con el error
  }
}

// Función generica para enviar datos mediante una solicitud POST
export async function postData<T>(path: string, data: T): Promise<T> {
  try {
    const response = await fetch(`${urlBase}/${path}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Convierte los datos a JSON y los envía en el cuerpo de la solicitud
    });
    if (!response.ok) {
      toast.error('Ocurrio un error!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      throw Error(response.statusText);
    }
    return response.json(); // Intenta analizar la respuesta como JSON
  } catch (error) {
    console.error("Error:", error);
    return Promise.reject(error); // Rechaza la promesa con el error
  }
}

// Función generica para actualizar datos mediante una solicitud PUT
export async function putData<T>(path: string, data: T): Promise<T> {
  try {
    const response = await fetch(`${urlBase}/${path}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Convierte los datos a JSON y los envía en el cuerpo de la solicitud
    });

    if (!response.ok) {
      toast.error('Ocurrio un error!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      throw Error(response.statusText);
    }
    return response.json(); // Retorna los datos en formato JSON
  } catch (error) {
    return Promise.reject(error); // Rechaza la promesa con el error
  }
}

// Función generica para eliminar datos mediante una solicitud DELETE
export async function deleteData(path: string) {
  try {
    const response = await fetch(`${urlBase}/${path}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      toast.error('Ocurrio un error!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      throw Error(response.statusText);
    }
  } catch (error) {
    console.error(error); // Imprime el error en la consola
  }
}