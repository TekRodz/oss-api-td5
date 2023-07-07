import getFestivalByDepartment from "./main";

test('You should get an array', async () => {
    var randomDepartment = Math.round(Math.random() * 95);
    randomDepartment = randomDepartment.toString();
    
    if(randomDepartment == "1" || randomDepartment == "2" || randomDepartment == "3" || randomDepartment == "4" || randomDepartment == "5" || randomDepartment == "6" || randomDepartment == "7" || randomDepartment == "8" || randomDepartment == "9"){
        randomDepartment = "0" + randomDepartment
    }
    
    const festivalByDepartment = await getFestivalByDepartment(randomDepartment);

    festivalByDepartment.forEach(festival => {
        expect(festival['fields']['departement']).toBe(randomDepartment);
    });
})