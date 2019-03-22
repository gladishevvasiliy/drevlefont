import React, { Component } from 'react'
import { Form, Header } from 'semantic-ui-react'

export default class FilterForm extends Component {
  render() {
    const { name, handleChangeChechbox, handleChangeName } = this.props

    return (
      <>
        <Header as="h2">Поиск</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            placeholder="Введите название"
            name="name"
            value={name}
            onChange={handleChangeName}
            icon="search"
          />
          <Form.Checkbox
            label="Раскладка UCS"
            name="ucs"
            onChange={handleChangeChechbox}
          />
          <Form.Checkbox
            label="Все кириллические символы"
            name="allCyrillicSymbols"
            onChange={handleChangeChechbox}
          />
          <Form.Checkbox
            label="Есть латинские символы"
            name="hasLatinicSymbols"
            onChange={handleChangeChechbox}
          />
          <Form.Checkbox
            label="Рукописный"
            name="handWriting"
            onChange={handleChangeChechbox}
          />
          <Form.Checkbox
            label="Печатный"
            name="typografy"
            onChange={handleChangeChechbox}
          />
        </Form>
      </>
    )
  }
}
