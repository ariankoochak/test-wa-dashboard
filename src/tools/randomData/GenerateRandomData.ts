type rowArr = [string, number];

type Output = rowArr[];

import cities from './cities.json';
const cityList: string[] = cities;

export function generateRandomData(input: number): Output {
    const result: rowArr[] = [];

    for (let i = 1; i <= input; i++) {
        const randomNumber = Math.floor(Math.random() * (999 - 11 + 1)) + 11;

        const randomIndex = Math.floor(Math.random() * cityList.length);
        const randomCity = cityList[randomIndex];
        cityList.splice(randomIndex, 1);

        result.push([randomCity,randomNumber])
    }

    return result;
}

