import { withDesign } from 'storybook-addon-designs';
import ActionButton from './ActionButton';

export default {
  title: 'Components/Buttons',
  component: ActionButton,
  decorators: [withDesign],
};

const Template = (args) => <ActionButton {...args} />;

export const Action = Template.bind({});
Action.args = {
  title: 'Action',
};

Action.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/A4gYFKN6hZwnNqLo3M5NMr/DHBW-Lecture-Plan?node-id=27%3A10',
  },
};
