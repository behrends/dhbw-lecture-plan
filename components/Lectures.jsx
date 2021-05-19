import { Box, Heading, Stack, Text } from '@chakra-ui/react';

export default function Lectures({ course, semester, lectures }) {
  return (
    <Stack spacing={3}>
      <Heading>
        Vorlesungen in {course} {semester}.Semester
      </Heading>
      {lectures.map((lecture) => (
        <Box
          key={lecture.id}
          p={3}
          w="50%"
          shadow="md"
          borderWidth="1px"
        >
          <Text>{lecture.title}</Text>
        </Box>
      ))}
    </Stack>
  );
}
