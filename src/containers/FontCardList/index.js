import React from 'react'
import FontCard from '../FontCard'
import { Card } from 'semantic-ui-react'

const FontCardList = ({ fonts, exampleText }) => (
  <Card.Group>
    {fonts.map(font => (
      <FontCard font={font} exampleText={exampleText} />
    ))}
  </Card.Group>
)
export default FontCardList
