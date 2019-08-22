import axios from 'axios';

export function getAll() {
    return axios.get('http://localhost:8080/api/plans/')
        .then((response) => response.data)
}

export function getById(id) {
    return axios.get('http://localhost:8080/api/plans/' +id)
        .then((response) => response)
}

export function addNew(plan) {
    return axios.post('http://localhost:8080/api/plans', plan, {
        headers: {
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbm5hIiwiZXhwIjoxNTY3MjUwOTE4fQ.ZEnYLeY6ZKJSqF7oDfkUU-h9SunhYQSrlnxVE_hsuqgB2J4CSLY_C_NokKCUyPcSNS39JERIbr0Pfgw3QtwkjA"
            /* "Content-Type": "multipart/form-data" */
        }
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        });
}


export function updatePlan(id, plan) {
    return axios.put('http://localhost:8080/api/plans/'+ id, plan)
}

export function deletePlan(id) {
    return axios.delete('http://localhost:8080/api/plans/' +id)
}