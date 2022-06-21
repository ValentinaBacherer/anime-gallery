import { Flex } from '../styles/Flex.styled'
import { StyledImage } from '../styles/Image.styled'
import { DateTime } from 'luxon'
import { Box } from '../styles/Box.styled'
import { MediaFragment } from '../../common/interfaces/media.interface'

interface MediaCardProps {
  media: MediaFragment
}

export const MediaCard: React.FC<MediaCardProps> = ({ media }: MediaCardProps) => {
  const {
    type,
    title: { english },
    startDate: { day, year, month },
  } = media
  const date = day && year && month ? new Date(year, month, day) : null
  const formattedDate = date ? DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED) : null

  return (
    <Flex alignItems='center' data-testid='flight-card'>
      <StyledImage height='40px' width='40px' src={'./images/anime.svg'} alt='' />

      <Box padding='8px'>
        <h2>{english ?? 'Not available'}</h2>
        <p>{`${type}, Started: ${formattedDate ? formattedDate : 'available soon...'}`}</p>
      </Box>
    </Flex>
  )
}
