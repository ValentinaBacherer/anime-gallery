import { ApolloProvider } from '@apollo/client'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import client from '../../common/apollo-client'
import theme from '../../common/styles/theme'
import Home from './Home'

describe('When I am in the home page', () => {
  it('Im provided with a list of all the animes', async () => {
    render(
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </ApolloProvider>
    )
    const cardsList = await screen.findAllByRole('img')
    expect(cardsList).toHaveLength(12)
  })
})

describe('When I select character, Im provided with a sidebar showing all the media for that character.', () => {
  it('Im provided with a sidebar', async () => {
    render(
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </ApolloProvider>
    )
    const characterList = await screen.findAllByRole('img')
    const character = characterList[0]
    await fireEvent.click(character)
    const sidebar = await screen.findByTestId('sidebar')
    expect(sidebar).toBeInTheDocument()
  })

  it('within the sidebar I can see the character description', async () => {
    render(
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </ApolloProvider>
    )
    const characterList = await screen.findAllByRole('img')
    const character = characterList[0]
    await fireEvent.click(character)

    const sidebar = await screen.findByTestId('sidebar')
    const description = await within(sidebar).findByText(/Spike Spiegel is a tall and lean/i)
    expect(description).toBeInTheDocument()
  })

  it('within the sidebar I can see the number of media', async () => {
    render(
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </ApolloProvider>
    )
    const characterList = await screen.findAllByRole('img')
    const character = characterList[0]
    await fireEvent.click(character)

    const sidebar = await screen.findByTestId('sidebar')
    const numberOfMedia = await within(sidebar).findByText(/500/i)
    expect(numberOfMedia).toBeInTheDocument()
  })

  it('within the sidebar I can see a list of media displaying both the name, type and start date', async () => {
    render(
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </ApolloProvider>
    )
    const characterList = await screen.findAllByRole('img')
    const character = characterList[0]
    await fireEvent.click(character)
    const sidebar = await screen.findByTestId('sidebar')

    const mediaTypes = await within(sidebar).findAllByText(/anime/i)
    expect(mediaTypes).toHaveLength(3)
    const mediaCards = await within(sidebar).findAllByTestId('media-card')
    const media = mediaCards[0]
    const startedAt = within(media).getByText(/May 3, 1998/i)
    expect(startedAt).toBeInTheDocument()
    const title = within(media).getByText(/cowboy bebop/i)
    expect(title).toBeInTheDocument()
  })
})
