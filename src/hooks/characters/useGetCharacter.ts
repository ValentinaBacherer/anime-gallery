import { gql, useQuery } from '@apollo/client'
import { Character } from '../../common/interfaces/character.interface'

const GET_CHARACTER = gql`
  query GetCharacter($id: Int, $page: Int, $perPage: Int) {
    Character(id: $id) {
      id
      name {
        full
      }
      image {
        large
        medium
      }
      favourites
      description
      gender
      media(page: $page, perPage: $perPage) {
        pageInfo {
          hasNextPage
          total
          currentPage
        }
        nodes {
          id
          type
          title {
            english
          }
          startDate {
            month
            day
            year
          }
        }
      }
    }
  }
`

export const useGetCharacter = (
  id: number,
  page?: number,
  perPage?: number
): { data: Character | undefined; loading: boolean } => {
  const { data, loading } = useQuery(GET_CHARACTER, {
    variables: { id: id, page: page, perPage: perPage },
  })
  return { data: data?.Character, loading }
}
