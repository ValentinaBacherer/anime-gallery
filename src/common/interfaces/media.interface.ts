import { PageInfo } from './page.interface'

export type MediaFragment = Pick<Media, 'id' | 'title' | 'type' | 'startDate'>

export interface Media {
  id: number
  title: MediaTitle
  type: string
  popularity: number
  startDate: FuzzyDate
}

interface FuzzyDate {
  year: number
  month: number
  day: number
}
interface MediaTitle {
  english: string
  usePrefered: string
}

export interface Paginated<T> {
  nodes: T[]
  pageInfo: PageInfo
}
