import React from 'react'
import { Container, Menu } from 'semantic-ui-react'

const Header = () => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item as="a" header>
        DrevleFont
      </Menu.Item>
    </Container>
  </Menu>
)
export default Header
