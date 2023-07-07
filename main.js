import fetch from 'node-fetch';

export default async function getFestivalByDepartment(department){
    const response = await fetch("https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&refine.departement=" + department);
    const data = await response.json();
    return data.records;
}