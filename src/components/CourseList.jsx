import Link from 'next/link';
import { SimpleGrid } from '@chakra-ui/react';
import Card from './card/Card';

export default function CourseList({ courses }) {
  return (
    <SimpleGrid columns={4} spacing={10}>
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
    </SimpleGrid>
  );
}
