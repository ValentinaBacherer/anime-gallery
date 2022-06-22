import { Flex } from '../styles/Flex.styled'
import { StyledImage } from '../styles/Image.styled'
import { DateTime } from 'luxon'
import { Box } from '../styles/Box.styled'
import { MediaFragment } from '../../common/interfaces/media.interface'

interface MediaCardProps {
  media: MediaFragment
}

const MAX_LENGTH = 35

export const MediaCard: React.FC<MediaCardProps> = ({ media }: MediaCardProps) => {
  const {
    type,
    title: { english },
    startDate: { day, year, month },
  } = media
  const date = day && year && month ? new Date(year, month, day) : null
  const formattedDate = date ? DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED) : null

  return (
    <Flex alignItems='center' data-testid='media-card'>
      <StyledImage height='40px' width='40px' src={'./images/anime.svg'} alt='' />

      <Box padding='8px'>
        {english ? (
          <h2>
            {english.length <= MAX_LENGTH
              ? english
              : `${english.substring(0, MAX_LENGTH - 3)}${
                  english.length > MAX_LENGTH ? '...' : ''
                }`}
          </h2>
        ) : (
          <h2>Not available</h2>
        )}

        <p>{`${type}, Started: ${formattedDate ? formattedDate : 'available soon...'}`}</p>
      </Box>
    </Flex>
  )
}
