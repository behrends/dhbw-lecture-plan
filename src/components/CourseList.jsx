import Link from 'next/link';
import { Stack } from '@chakra-ui/react';
import Card from './card/Card';

export default function CourseList({ courses }) {
  return (
    <Stack spacing={3}>
      {courses.map((course) => (
        <Link
          key={course.id}
          href={{
            pathname: `/courses/${course.id}`,
            query: { course: course.name },
          }}
        >
          <Card cursor="pointer" title={course.name} />
        </Link>
      ))}
    </Stack>
  );
}
