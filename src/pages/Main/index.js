import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import './style.css'
import fonts from '../../res/fonts'
import Header from '../../containers/Header'
import FontCardList from '../../containers/FontCardList'
import FilterForm from '../../containers/FilterForm'

const { Row, Column } = Grid

export default class Main extends Component {
  state = {
    exampleText: 'Съешь еще этих мягких французских булок да выпей чаю',
    name: '',
    ucsRequired: false,
    allCyrillicSymbols: false,
    hasLatinicSymbols: false,
    handWriting: false,
    typografy: false,
  }

  handleChangeChechbox = (e, { name }) => {
    this.setState({ [name]: !this.state[name] })
  }

  handleChangeName = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  render() {
    return (
      <>
        <Header />
        <Container style={{ marginTop: '7em' }}>
          <Grid>
            <Row>
              <Column width={11}>
                <Container>
                  <FontCardList
                    fonts={fonts}
                    exampleText={this.state.exampleText}
                  />
                </Container>
              </Column>
              <Column width={5}>
                <Container>
                  <FilterForm
                    handleChangeChechbox={this.handleChangeChechbox}
                    handleChangeName={this.handleChangeName}
                    name={this.state.name}
                    ucsRequired={this.state.ucsRequired}
                    allCyrillicSymbols={this.state.allCyrillicSymbols}
                    hasLatinicSymbols={this.state.hasLatinicSymbols}
                    handWriting={this.state.handWriting}
                    typografy={this.state.typografy}
                  />
                </Container>
              </Column>
            </Row>
          </Grid>
        </Container>
      </>
    )
  }
}
