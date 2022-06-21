import { MediaFragment } from '../../common/interfaces/media.interface'
import { Box } from '../styles/Box.styled'
import { Flex } from '../styles/Flex.styled'
import { Grid } from '../styles/Grid.styled'
import { LinkButton } from '../styles/LinkButton.styled'
import { MediaCard } from './MediaCard'

interface MediaListProps {
  medias?: MediaFragment[]
  onNextPage?: () => void
  onPreviousPage?: () => void
  currentPage?: number
}

export const MediaList: React.FC<MediaListProps> = ({
  medias,
  onNextPage,
  onPreviousPage,
  currentPage,
}: MediaListProps) => {
  return (
    <Grid gap='12px'>
      <Box>
        <h3>MEDIAS</h3>
        {medias ? (
          medias.map((media) => <MediaCard key={media.id} media={media} />)
        ) : (
          <Box height='345px'>
            <p>Loading...</p>
          </Box>
        )}
      </Box>
      <Flex justifyContent='space-between'>
        <Box width='50px'></Box>
        <Flex>
          <LinkButton onClick={onPreviousPage}>&lt;&nbsp;&nbsp; Previous</LinkButton>
          <Box width='12px' />
          <LinkButton onClick={onNextPage}>Next&nbsp;&nbsp; &gt;</LinkButton>
        </Flex>
        <Box width='50px'>
          {currentPage && <LinkButton onClick={onNextPage}>Page {currentPage}</LinkButton>}
        </Box>
      </Flex>
    </Grid>
  )
}
