import { Stack } from '@chakra-ui/react';
import ActionButton from '../../components/buttons/ActionButton';
import CourseList from '../../components/CourseList';

export default function Courses({ courses }) {
  return (
    <Stack>
      <ActionButton title="Neuer Kurs" />
      <CourseList courses={courses} />
    </Stack>
  );
}
