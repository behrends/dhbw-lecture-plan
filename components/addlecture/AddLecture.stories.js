import AddLecture from './AddLecture';

export default {
  title: 'Components/AddLecture',
  component: AddLecture,
};

const Template = (args) => <AddLecture {...args} />;

export const Default = Template.bind({});
Default.args = {};
