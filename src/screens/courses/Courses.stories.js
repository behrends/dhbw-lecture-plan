import { withDesign } from 'storybook-addon-designs';
import Courses from './Courses';

export default {
  title: 'Screens/Courses',
  component: Courses,
  decorators: [withDesign],
};

const Template = (args) => <Courses {...args} />;

export const Default = Template.bind({});
Default.args = {
  courses: [
    { id: 1, name: 'TIF20A' },
    { id: 2, name: 'TIF21A' },
  ],
};

Default.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/A4gYFKN6hZwnNqLo3M5NMr/DHBW-Lecture-Plan?node-id=27%3A1',
  },
};
