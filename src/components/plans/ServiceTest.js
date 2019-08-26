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
    let formData = new FormData();
    formData.set("header", plan.header);
    formData.append("date", Date.now());
    formData.set("location", plan.location);
    formData.set("description", plan.description);
    formData.set("notes", plan.notes); 
    formData.set("participants", plan.participants);
    formData.append("image", plan.referencepictures);
    console.log(formData);

    return axios.post('http://localhost:8080/api/plans', formData, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("Token")
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