import { gql, useQuery } from '@apollo/client'
import { CharacterFragment, PaginatedCharacters } from '../../common/interfaces/character.interface'

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      characters {
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
      }
      pageInfo {
        total
        hasNextPage
      }
    }
  }
`

export const useGetCharacters = (
  page: number,
  perPage?: number
): { data: PaginatedCharacters<CharacterFragment> | undefined; loading: boolean } => {
  const { data, loading } = useQuery(GET_CHARACTERS, {
    variables: { page: page, perPage: perPage || 12 },
  })

  return { data: data?.Page, loading }
}
