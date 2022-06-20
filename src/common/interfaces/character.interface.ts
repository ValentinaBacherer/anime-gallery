export type CharacterFragment = Pick<Character, 'id' | 'name' | 'image' | 'favourites'>

export interface Character {
  id: number
  age: string
  gender: string
  name: CharacterName
  image: CharacterImage
  description: string
  bloodtype: string
  dateOfBirth: FuzzyDate
  favourites: number
}

interface FuzzyDate {
  year: number
  month: number
  day: number
}

interface CharacterImage {
  large: string
  medium: string
}

interface CharacterName {
  first: string
  middle: string
  last: string
  full: string
}

export interface PaginatedCharacters<T> {
  pageInfo: {
    total: number
    hasNextPage: boolean
  }
  characters: T[]
}
