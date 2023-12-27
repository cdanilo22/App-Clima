import {ref, computed} from 'vue'
import axios from 'axios'

export default function useClima() {

    
const clima = ref({})

    const obtenerClima = async ({ciudad, pais}) => {
         //Importar el Api key

        const key = import.meta.env.VITE_API_KEY

         //Obtener la lat, longitud

         try{
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`
            const {data} = await axios(url)
            const {lat, lon} = data[0]

            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
            const {data: resultado} = await axios(urlClima) //Renombrar la variable data como resultado para que no de conflicto con el anterior destructuring
            
            clima.value = resultado;

         }catch(error) {
            console.log(error); 
         }
    }
    
    const mostrarClima = computed(() => {
        return Object.values(clima.value).length > 0
    })

    return {
        obtenerClima,
        clima, 
        mostrarClima
    }
}
