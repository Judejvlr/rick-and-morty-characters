import Character from "../types/character"


const baseURL = process.env.REACT_APP_API

/**
 * It takes an array of objects and returns an array of objects with the same properties
 * @param apiResponse - []: This is the response from the API.
 * @returns An array of characters
 */
const fromApiResponseToCharacter = (apiResponse: { info: {}, results: [] }) => {
  if (Array.isArray(apiResponse.results)) {
    const characters = apiResponse.results.map(character => {
      const { name, gender, status, image, id } = character
      return { name, gender, status, image, id }
    })
    return characters as Character[]
  }
  return []
}

/**
 * It takes the response from the API, converts it to JSON, and then converts it to a Character object.
 * @returns A promise that resolves to an array of characters.
 */
export default function getCharacters(page: number = 0): Promise<Character[]> {
  const apiURL = `${baseURL}/character/?page=${page}`
  return fetch(apiURL)
    .then(response => response.json())
    .then(fromApiResponseToCharacter)
}

