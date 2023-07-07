# Call API Festival in France

With this library you can find festival in France with the "https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/" API.

## Installation

For install

```
npm install oss-api-td5
```

## Requirements

- Node.JS
- npm

## Use functions

I. Get festival by departments

Use the function :

```
getFestivalByDepartment(x)
```

This function search in the API for the festival in the department you enter in the params

x = department number (exemple : 01, 25 or 65)

II. Get festival by domaine

Use the function :

```
getFestivalByDomaine(x)
```

This function search in the API for the festival in the domain you enter in the params

x = domaine number (refer to the table under)

| Value | Number |
| :----:|:------:|
| Musiques actuelles| 01 |
| Cinéma et audiovisuel | 02 |
| Musiques classiques | 03 |
| Cirque et Arts de la rue | 04 |
| Pluridisciplinaire Spectacle vivant | 05 |
| Livre et littérature | 06 |
| Transdisciplinaire | 07 |
| Divers Spectacle vivant | 08 |
| Pluridisciplinaire Musique | 09 |
| Danse | 10 |
| Arts plastiques et visuels | 11 |
| Théâtre | 12 |
| Domaines divers | 13 |

III. Get festival by department and domaine

```
getFestival(x, y)
```
This function search in the API for the festival with the domaine and the department.

x = department number (exemple : 01, 25 or 65)
y = domaine number (refer to the table upper)

If you don't want to use one of this params replace it by "0".
For example :
```
getFestival("0","11");
```
This will search the festival everywhere with the domaine : "Arts plastiques et visuels".