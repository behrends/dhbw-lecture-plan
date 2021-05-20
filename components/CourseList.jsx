import Link from 'next/link';
import { Box, Stack, Text } from '@chakra-ui/react';

export default function CourseList({ courses }) {
  return (
    <Stack spacing={3}>
      {courses.map((course) => (
        <Box
          key={course.id}
          p={3}
          w="50%"
          shadow="md"
          borderWidth="1px"
          borderRadius="4px"
        >
          <Link href={`/courses/${course.id}`}>
            <Text cursor="pointer">{course.name}</Text>
          </Link>
        </Box>
      ))}
    </Stack>
  );
}
