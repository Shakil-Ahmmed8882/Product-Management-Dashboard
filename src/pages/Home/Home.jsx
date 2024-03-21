import { Helmet } from 'react-helmet-async'
import { TitleAndDescription } from '../../components/Shared/Title&Description/TitleAndDescription'
import Container from '../../components/Shared/Container'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Project Name || Home</title>
      </Helmet>
      {/* Categories section  */}
      <Container>
      <TitleAndDescription position={""}/>
      </Container>
    </div>
  )
}

export default Home
