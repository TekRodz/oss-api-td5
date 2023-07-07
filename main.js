import fetch from 'node-fetch';

export default async function getFestivalByDepartment(department){
    const response = await fetch("https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&refine.departement=" + department);
    const data = await response.json();
    return data.records;
}

export async function getFestivalByDomaine(domaine){
    var nomDomaine = "";
    switch(domaine){
        case '01':
            nomDomaine = "Musiques actuelles";
            break;
        case '02':
            nomDomaine = "Cinéma et audiovisuel";
            break;
        case '03':
            nomDomaine = "Musiques classiques";
            break;
        case '04':
            nomDomaine = "Cirque et Arts de la rue";
            break;
        case '05':
            nomDomaine = "Pluridisciplinaire Spectacle vivant";
            break;
        case '06':
            nomDomaine = "Livre et littérature";
            break;
        case '07':
            nomDomaine = "Transdisciplinaire";
            break;
        case '08':
            nomDomaine = "Divers Spectacle vivant";
            break;
        case '09':
            nomDomaine = "Pluridisciplinaire Musique";
            break;
        case '10':
            nomDomaine = "Danse";
            break;
        case '11':
            nomDomaine = "Arts plastiques et visuels";
            break;
        case '12':
            nomDomaine = "Théâtre";
            break;
        case '13':
            nomDomaine = "Domaines divers";
            break;
    }

    const response = await fetch("https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&refine.domaine=" + nomDomaine);
    const data = await response.json();
    return data.records;
}

export async function getFestival(departement, domaine){
    var params = ""
    if(departement != 0){
        params += "&refine.departement=" + departement;
    }
    if(domaine != 0){
        var nomDomaine = "";
        switch(domaine){
            case '01':
                nomDomaine = "Musiques actuelles";
                break;
            case '02':
                nomDomaine = "Cinéma et audiovisuel";
                break;
            case '03':
                nomDomaine = "Musiques classiques";
                break;
            case '04':
                nomDomaine = "Cirque et Arts de la rue";
                break;
            case '05':
                nomDomaine = "Pluridisciplinaire Spectacle vivant";
                break;
            case '06':
                nomDomaine = "Livre et littérature";
                break;
            case '07':
                nomDomaine = "Transdisciplinaire";
                break;
            case '08':
                nomDomaine = "Divers Spectacle vivant";
                break;
            case '09':
                nomDomaine = "Pluridisciplinaire Musique";
                break;
            case '10':
                nomDomaine = "Danse";
                break;
            case '11':
                nomDomaine = "Arts plastiques et visuels";
                break;
            case '12':
                nomDomaine = "Théâtre";
                break;
            case '13':
                nomDomaine = "Domaines divers";
                break;
        }

        params += "&refine.domaine=" + nomDomaine;
    }

    const response = await fetch("https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals" + params);
    const data = await response.json();
    return data.records;
}