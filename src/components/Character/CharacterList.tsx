import { CharacterFragment } from '../../common/interfaces/character.interface'
import { Box } from '../styles/Box.styled'
import { Flex } from '../styles/Flex.styled'
import { Grid } from '../styles/Grid.styled'
import { LinkButton } from '../styles/LinkButton.styled'
import { CharacterCard } from './CharacterCard'

interface CharacterListProps {
  characters?: CharacterFragment[]
  onSelect?: (id: number) => void
  onNextPage?: () => void
  onPreviousPage?: () => void
  currentPage?: number
  selectedId?: number
}

export const CharacterList: React.FC<CharacterListProps> = ({
  characters,
  onSelect,
  onNextPage,
  onPreviousPage,
  currentPage,
  selectedId,
}: CharacterListProps) => {
  return (
    <Grid gap='12px'>
      {characters ? (
        <Grid
          gridTemplateColumns={`repeat(${characters.length / 3},1fr)`}
          gap='20px'
          justifyContent='start'
        >
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onSelect={onSelect}
              selected={selectedId === character.id}
            />
          ))}
        </Grid>
      ) : (
        <Box height='640px' width='860px'>
          <p>No characters found</p>
        </Box>
      )}
      <Flex justifyContent='space-between'>
        <Box></Box>
        <Flex>
          <LinkButton width='100px' onClick={onPreviousPage}>
            &lt;&nbsp;&nbsp; Previous
          </LinkButton>
          <Box width='24px' />
          <LinkButton width='100px' onClick={onNextPage}>
            Next&nbsp;&nbsp; &gt;
          </LinkButton>
        </Flex>
        <LinkButton width='100px'>Page {currentPage}</LinkButton>
      </Flex>
    </Grid>
  )
}
