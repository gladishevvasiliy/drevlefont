import React, { Component } from 'react'
import { filter, intersection, difference } from 'lodash'

const checkFontProperties = (font, properties) => {
  const isPropertiesExist = properties.properties.length !== 0

  if (properties.name.length !== 0) {
    if (!font.name.toLowerCase().includes(properties.name.toLowerCase()))
      return false
  }

  if (!isPropertiesExist) return true

  if (
    difference(
      properties.properties,
      intersection(properties.properties, font.properties)
    ).length !== 0
  )
    return false

  return true
}

const filterList = (list, properties) => {
  const filteredList = filter(list, font =>
    checkFontProperties(font, properties)
  )
  return filteredList
}

export default class FilterdList extends Component {
  render() {
    const { Component, list, properties, exampleText } = this.props

    const filteredList = filterList(list, properties)

    return <Component fonts={filteredList} exampleText={exampleText} />
  }
}
