import { withDesign } from 'storybook-addon-designs';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
  decorators: [withDesign],
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Meine Karte',
};

Default.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/A4gYFKN6hZwnNqLo3M5NMr/DHBW-Lecture-Plan?node-id=3%3A2',
  },
};
