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

    // formData.append("date", Date.now());
    formData.set("location", plan.location);
    formData.set("description", plan.description);
    formData.set("notes", plan.notes); 
    formData.set("participants", plan.participants);
    formData.append("image1", plan.referencephotos[0]);
    formData.append("image2", plan.referencephotos[1]);
    formData.append("image3", plan.referencephotos[2]);
    formData.append("image4", plan.referencephotos[3]);
    formData.append("image5", plan.referencephotos[4]);

    console.log(formData);
    console.log(plan.image1);
    console.log(plan.notes);

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