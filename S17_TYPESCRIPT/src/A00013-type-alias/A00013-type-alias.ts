type Age = number;

type Person = {
    name: string,
    age: Age;
    wage: number,
    favoriteColor?: FavoriteColor
}

type ColorRGB = 'red' | 'green' | 'blue'
type ColorCMYK = 'cyan' | 'magenta' | 'yellow' | 'black'
type FavoriteColor = ColorRGB | ColorCMYK

const person: Person = {
    name: 'matheus',
    age: 18,
    wage: 10000,
    favoriteColor: 'blue' 
}

export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
    return { ...person, favoriteColor: color }
}

console.log(setFavoriteColor(person, 'black')) // set color