import { useEffect, useState } from 'react'
import { CharacterFragment } from '../../common/interfaces/character.interface'
import { useGetCharacter } from '../../hooks/characters/useGetCharacter'
import { Box } from '../styles/Box.styled'
import { StyledButton } from '../styles/Button.styled'
import { FlexCenter, StyledCard } from '../styles/Card.styled'
import { Flex } from '../styles/Flex.styled'
import { Grid } from '../styles/Grid.styled'
import { StyledImage } from '../styles/Image.styled'
import { LinkButton } from '../styles/LinkButton.styled'
import { MediaList } from '../Media/MediaList'

interface CharacterDetailsProps {
  character: CharacterFragment
  onClose?: () => void
}

const MAX_LENGTH = 180
const PAGE_SIZE = 4
export const CharacterDetailsCard: React.FC<CharacterDetailsProps> = ({
  character,
  onClose,
}: CharacterDetailsProps) => {
  const {
    name,
    description,
    id,
    image: { large },
  } = character
  const [readMore, setReadMore] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const { data, loading } = useGetCharacter(id, currentPage, PAGE_SIZE)

  useEffect(() => {
    setReadMore(false)
  }, [character])

  const handleNextPage = () => {
    setCurrentPage((currentPage) =>
      data?.media?.pageInfo?.total && Math.ceil(data.media.pageInfo.total / PAGE_SIZE) > currentPage
        ? currentPage + 1
        : currentPage
    )
  }

  const handlePreviousPage = () => {
    setCurrentPage((currentPage) => (currentPage > 1 ? currentPage - 1 : 1))
  }

  return (
    <StyledCard direction='column' data-testid='sidebar' width='400px'>
      <Flex justifyContent='flex-end' alignItems='center'>
        <StyledButton type='button' onClick={onClose}>
          X
        </StyledButton>
      </Flex>
      <Grid gap='16px'>
        <Box>
          <h1>{name.full}</h1>
          <FlexCenter>
            <StyledImage src={large} height='210px' width='210' borderRadius='50%' />
          </FlexCenter>
          <Box minHeight='100px'>
            <span>
              {readMore
                ? description
                : `${description.substring(0, MAX_LENGTH)}${
                    description.length > MAX_LENGTH ? '...' : ''
                  }`}
            </span>
            {description.length > MAX_LENGTH && (
              <LinkButton onClick={() => setReadMore(!readMore)}>
                {readMore ? 'read less' : 'read more'}
              </LinkButton>
            )}
          </Box>
        </Box>
        {loading ? (
          <Box height='300px'>
            <p>Loading...</p>
          </Box>
        ) : (
          <>
            <Box>
              <p>Number of Media</p>
              <h4>{data?.media?.pageInfo.total ? data.media.pageInfo.total : 'Loading...'}</h4>
            </Box>
            <Box>
              <MediaList
                medias={data?.media.nodes}
                onNextPage={handleNextPage}
                onPreviousPage={handlePreviousPage}
                currentPage={data?.media.pageInfo.currentPage}
              />
            </Box>
          </>
        )}
      </Grid>
    </StyledCard>
  )
}
