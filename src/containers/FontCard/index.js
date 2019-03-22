import React from 'react'
import { Grid, Card, Icon } from 'semantic-ui-react'
const { Row, Column } = Grid

const FontCard = ({ font, exampleText }) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>{font.name}</Card.Header>
      <Grid>
        <Row>
          <Column width={14}>
            <p className="example" style={{ fontFamily: font.name }}>
              {exampleText}
            </p>
            {/* <Card.Meta>{font.properties.join(', ')}</Card.Meta> */}
          </Column>
          <Column width={2} textAlign="center" verticalAlign="middle">
            <a href={font.url}>
              <Icon size="big" name="arrow alternate circle down" />
            </a>
          </Column>
        </Row>
      </Grid>
    </Card.Content>
  </Card>
)

export default FontCard
