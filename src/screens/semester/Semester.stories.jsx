import Semester from './Semester';

export default {
  title: 'Screens/Semester',
  component: Semester,
};

const Template = (args) => <Semester {...args} />;

export const Default = Template.bind({});
Default.args = {
  course: 'TIF20A',
  semester: [
    { number: 3, start: '2021-10-04', end: '2021-12-19' },
    { number: 4, start: '2022-03-28', end: '2022-06-12' },
  ],
};
