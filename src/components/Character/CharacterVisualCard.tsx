import { CharacterFragment } from '../../common/interfaces/character.interface'
import { Box } from '../styles/Box.styled'
import { StyledImage } from '../styles/Image.styled'
import { TransCover } from '../styles/TransCover.styled'

interface CharacterCardProps {
  character: CharacterFragment
  onSelect?: (id: number) => void
  selected?: boolean
}
const MAX_LENGTH = 20

export const CharacterVisualCard: React.FC<CharacterCardProps> = ({
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
    <Box
      position='relative'
      width='200px'
      height='150px'
      onClick={() => onSelect?.(id)}
      outline={selected}
      shadow={true}
    >
      <StyledImage
        src={medium}
        alt='anime'
        width='100%'
        height='100%'
        borderRadius='16px'
        opacity='0.85'
      />
      <TransCover>
        <Box
          color='white'
          fontSize='20px'
          position='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
        >
          {full && (
            <>
              {full?.length <= MAX_LENGTH
                ? full
                : `${full.substring(0, MAX_LENGTH - 3)}${full.length > MAX_LENGTH ? '...' : ''}`}
            </>
          )}
        </Box>
        <Box
          color='white'
          fontSize='12px'
          position='absolute'
          bottom='0%'
          right='0%'
          transform='translate(-20%, -50%)'
        >
          Favorites: {favourites} ♥
        </Box>
      </TransCover>
    </Box>
  )
}
