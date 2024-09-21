// Write your code here
import {useState} from 'react'
import {
  Container,
  MainContainer,
  Heading,
  Text,
  Image,
  Button,
  Description,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [showFullText, toggleFullText] = useState(false)

  const onToggleText = () => toggleFullText(prevState => !prevState)

  const text = showFullText
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  return (
    <Container>
      <MainContainer>
        <Heading>React Hooks</Heading>
        <Text>Hooks are a new addition to React</Text>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{text}</Description>
        <Button type="button" onClick={onToggleText}>
          {showFullText ? 'Read Less' : 'Read More'}
        </Button>
      </MainContainer>
    </Container>
  )
}

export default ReadMore
