import { withDesign } from 'storybook-addon-designs';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [withDesign],
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'TIF20A',
};

Default.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/A4gYFKN6hZwnNqLo3M5NMr/DHBW-Lecture-Plan?node-id=3%3A2',
  },
};
