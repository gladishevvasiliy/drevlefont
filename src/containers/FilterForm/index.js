import React, { Component } from 'react'
import { Button, Form, Checkbox } from 'semantic-ui-react'

export default class FilterForm extends Component {
  render() {
    const {
      ucsRequired,
      allCyrillicSymbols,
      hasLatinicSymbols,
      handWriting,
      typografy,
      name,
      handleChangeChechbox,
      handleChangeName,
    } = this.props

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            placeholder="Введите название"
            name="name"
            value={name}
            onChange={handleChangeName}
          />
          <Checkbox
            label="Раскладка UCS"
            name="ucsRequired"
            value={ucsRequired}
            onChange={handleChangeChechbox}
          />
          <Form.Checkbox
            label="Все кириллические символы"
            name="allCyrillicSymbols"
            value={allCyrillicSymbols}
            onChange={handleChangeChechbox}
          />
          <Form.Checkbox
            label="Есть латинские символы"
            name="hasLatinicSymbols"
            value={hasLatinicSymbols}
            onChange={handleChangeChechbox}
          />
          <Form.Checkbox
            label="Рукописный"
            name="handWriting"
            value={handWriting}
            onChange={handleChangeChechbox}
          />
          <Form.Checkbox
            label="Печатный"
            name="typografy"
            value={typografy}
            onChange={handleChangeChechbox}
          />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </>
    )
  }
}
