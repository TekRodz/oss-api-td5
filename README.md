# Call API Festival in France

With this library you can find festival in France with the "https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/" API.

## Installation

For install

```
npm install oss-api-td5
```

## Use functions

I. Get festival by departments

Use the function :

```
getFestivalByDepartment(x)
```

This function search in the API for the festival in the department you enter in the params

x = department number (exemple : 01, 25 or 65)