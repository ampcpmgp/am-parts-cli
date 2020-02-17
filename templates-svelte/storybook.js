module.exports = ({name}) => `import { withKnobs } from '@storybook/addon-knobs'
import ${name} from './${name}.svelte'

export default {
  title: '${name}',
  component: ${name},
  decorators: [withKnobs],
}

export const Main = () => ({
  Component: ${name},
  props: { text: 'dummy-text' }
})
`