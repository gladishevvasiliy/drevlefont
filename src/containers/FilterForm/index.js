import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

export default class FilterForm extends Component {
  state = {}

  handleChange = (e, { value }) => {
    console.log(e)
    console.log(value)
    this.setState({ value })
  }

  render() {
    const { value } = this.state

    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Название"
            placeholder="Введите название шрифта"
          />
        </Form.Group>
        <label>Параметры</label>
        <Form.Checkbox label="I agree to the Terms and Conditions" />

        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      // <Form onChange={() => console.log('object')}>
      //   <Form.Field>
      //     <label>Название</label>
      //     <input placeholder="Введите название шрифта" />
      //   </Form.Field>
      //   <label>Параметры</label>
      //   <Form.Field control={Checkbox} name="ucs" label="Раскладка UCS" />
      //   <Form.Field>
      //     <Checkbox name="haveAllCyrillicSymbols" label="Все русские буквы" />
      //   </Form.Field>
      //   <Form.Field>
      //     <Checkbox name="handWritingFont" label="Рукописный" />
      //   </Form.Field>
      //   <Form.Field>
      //     <Checkbox name="styled" label="Стилизованный" />
      //   </Form.Field>
      //   <Form.Field>
      //     <Checkbox name="haveLatinSymbol" label="Есть латиница" />
      //   </Form.Field>
      // </Form>
    )
  }
}
