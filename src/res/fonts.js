const allCyrillicSymbols = 'allCyrillicSymbols'
const handWriting = 'handWriting'
const hasLatinicSymbols = 'hasLatinicSymbols'
const ucs = 'ucs'
const typografy = 'typografy'

const fonts = [
  {
    name: 'Lorem',
    url: '#',
    properties: [
      allCyrillicSymbols,
      handWriting,
      hasLatinicSymbols,
      typografy,
      ucs,
    ],
  },
  {
    name: 'Ipsum',
    url: '#',
    properties: [handWriting, hasLatinicSymbols, typografy, ucs],
  },
  {
    name: 'Domet',
    url: '#',
    properties: [allCyrillicSymbols, handWriting, typografy],
  },
]

export default fonts
