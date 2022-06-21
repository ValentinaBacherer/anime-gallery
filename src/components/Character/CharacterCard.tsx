import { CharacterFragment } from '../../common/interfaces/character.interface'
import { Box } from '../styles/Box.styled'
import { FlexCenter, StyledCard } from '../styles/Card.styled'
import { StyledImage } from '../styles/Image.styled'

interface CharacterCardProps {
  character: CharacterFragment
  onSelect?: (id: number) => void
  selected?: boolean
}
const MAX_LENGTH = 18

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onSelect,
  selected,
}: CharacterCardProps) => {
  const {
    id,
    name: { full },
    image: { medium },
    favourites,
  } = character

  return (
    <StyledCard direction='column' width='210px' onClick={() => onSelect?.(id)} border={selected}>
      <FlexCenter style={{ display: 'flex', justifyContent: 'center' }}>
        <StyledImage height='95px' width='95px' src={medium} alt='' borderRadius='50%' />
      </FlexCenter>

      <Box>
        {full && (
          <h2>
            {full?.length <= MAX_LENGTH
              ? full
              : `${full.substring(0, MAX_LENGTH - 3)}${full.length > MAX_LENGTH ? '...' : ''}`}
          </h2>
        )}
        <p>Number of favourites {favourites}</p>
      </Box>
    </StyledCard>
  )
}
