import { Box } from './components/styles/Box.styled'
import { Container } from './components/styles/Container.styled'
import { Grid } from './components/styles/Grid.styled'
import Home from './pages/Home/Home'

function App() {
  return (
    <Container width='900px'>
      <Grid gridTemplateRows='5vh 90vh 5vh' maxHeight='100vh'>
        <Box />
        <Home />
        <Box />
      </Grid>
    </Container>
  )
}

export default App
