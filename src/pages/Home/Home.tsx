import { useState } from 'react'
import { CharacterFragment } from '../../common/interfaces/character.interface'
import { CharacterList } from '../../components/Character/CharacterList'
import { Box } from '../../components/styles/Box.styled'
import { Grid } from '../../components/styles/Grid.styled'
import { Title } from '../../components/styles/Title.styled'
import { useGetCharacters } from '../../hooks/characters/useGetCharacters'

const Home = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<undefined | CharacterFragment>()
  const [currentPage, setCurrentPage] = useState(0)
  const pageSize = selectedCharacter ? 9 : 12
  const { data, loading } = useGetCharacters(currentPage, pageSize)

  const handleSelect = (id: number) => {
    setSelectedCharacter(data?.characters.find((character) => character.id === id))
  }

  //   const handleClose = () => {
  //     setSelectedCharacter(undefined)
  //   }

  const handleNextPage = () => {
    setCurrentPage((currentPage) =>
      data?.characters && data.pageInfo.hasNextPage ? currentPage + 1 : currentPage
    )
  }

  const handlePreviousPage = () => {
    setCurrentPage((currentPage) => (currentPage > 0 ? currentPage - 1 : 0))
  }

  return (
    <Grid gridTemplateColumns='auto auto' gap='20px' justifyContent='start'>
      <Grid gap='20px'>
        <Title>Animes</Title>
        {loading ? (
          <Box height='640px' width='860px'>
            <p>Loading...</p>
          </Box>
        ) : (
          <CharacterList
            characters={data?.characters}
            onSelect={handleSelect}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
            currentPage={currentPage}
            selectedId={selectedCharacter?.id}
          />
        )}
      </Grid>
      {selectedCharacter && <div>{JSON.stringify(selectedCharacter)}</div>}
    </Grid>
  )
}
export default Home
