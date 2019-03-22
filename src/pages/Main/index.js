import React, { Component } from 'react'
import { indexOf } from 'lodash'
import { Container, Grid, Input } from 'semantic-ui-react'
import './style.css'
import fonts from '../../res/fonts'
import Header from '../../containers/Header'
import FontCardList from '../../containers/FontCardList'
import FilterForm from '../../containers/FilterForm'
import FilterdList from '../../components/FilteredList'

const { Row, Column } = Grid

export default class Main extends Component {
  state = {
    exampleText: 'Съешь этих мягких французских булок',
    name: '',
    properties: [],
  }

  onChangeExampleInput = (e, { value }) => {
    this.setState({ exampleText: value })
  }
  handleChangeChechbox = (e, { name }) => {
    const index = indexOf(this.state.properties, name)
    if (index < 0) {
      this.setState({ properties: [...this.state.properties, name] })
    } else {
      const newPropperties = this.state.properties
      newPropperties.splice(index, 1)
      this.setState({ properties: newPropperties })
    }
  }

  handleChangeName = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  render() {
    const fontProperties = {
      name: this.state.name,
      properties: this.state.properties,
    }

    return (
      <>
        <Header />
        <Container style={{ marginTop: '7em' }}>
          <Grid>
            <Row>
              <Column width={11}>
                <Container>
                  <Input
                    fluid
                    className="input-example"
                    size="massive"
                    placeholder="Введите текст..."
                    onChange={this.onChangeExampleInput}
                    value={this.state.exampleText}
                  />
                  <FilterdList
                    Component={FontCardList}
                    list={fonts}
                    exampleText={this.state.exampleText}
                    properties={fontProperties}
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
