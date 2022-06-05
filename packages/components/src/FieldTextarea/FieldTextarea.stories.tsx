import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { FieldTextarea } from './FieldTextarea'

export default {
  title: 'Base Components/Form/FieldTextarea',
  component: FieldTextarea,
} as ComponentMeta<typeof FieldTextarea>

export const Default: ComponentStory<typeof FieldTextarea> = () => (
  <FieldTextarea input={{} as any} placeholder="Text area input" meta={{}} />
)

export const WithError: ComponentStory<typeof FieldTextarea> = () => (
  <FieldTextarea
    input={{} as any}
    placeholder="Text area input"
    meta={{ error: 'What an error', touched: true }}
  />
)