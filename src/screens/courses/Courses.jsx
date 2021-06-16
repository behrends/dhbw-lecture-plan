import { Stack } from '@chakra-ui/react';
import ActionButton from '../../components/buttons/ActionButton';
import CourseList from '../../components/CourseList';

export default function Courses({ courses }) {
  return (
    <Stack>
      <CourseList courses={courses} />
      <ActionButton title="Neuer Kurs" />
    </Stack>
  );
}
