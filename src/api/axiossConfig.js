import axios from 'axios';
//new api  http://13.53.37.158:8080/api/v1/movies/
//olpd api  http://localhost:8080
export default axios.create({
    baseURL:'http://13.53.37.158:8080'
})

