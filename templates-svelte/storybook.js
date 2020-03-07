module.exports = ({group, name}) => {
  function title () {
    if (group) return `${group}/${name}`
    return name
  }

  return `import { withKnobs } from '@storybook/addon-knobs'
import ${name} from './${name}.svelte'

export default {
  title: '${title()}',
  component: ${name},
  decorators: [withKnobs],
}

export const Main = () => ({
  Component: ${name},
  props: { text: 'dummy-text' }
})
`
}
