import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { supabase } from '../../src/dbapi';

export default function Course({ semester }) {
  const router = useRouter();
  const { course } = router.query;
  return (
    <Stack spacing={3}>
      <Heading>{course}</Heading>
      {semester.map((semester) => (
        <Box
          key={semester.id}
          p={3}
          w="50%"
          shadow="md"
          borderWidth="1px"
        >
          <Link
            href={{
              pathname: `/courses/${semester.course}/semester/${semester.id}`,
              query: { course: course, semester: semester.number },
            }}
          >
            <Text cursor="pointer">
              {semester.number}.Semester: {semester.start} &mdash;{' '}
              {semester.end}
            </Text>
          </Link>
        </Box>
      ))}
    </Stack>
  );
}

export async function getServerSideProps({ params }) {
  if (!supabase) return { props: { semester: [] } };
  let { data: semester, error } = await supabase
    .from('Semester')
    .select('*')
    .eq('course', params.id);
  if (error) console.log('error', error);
  return { props: { semester } };
}
