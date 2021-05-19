import { useEffect, useState } from 'react';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { supabase } from '../lib/initSupabase';

export default function Lectures() {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    fetchLectures();
  }, []);

  const fetchLectures = async () => {
    if (!supabase) return;
    let { data: lectures, error } = await supabase
      .from('Lectures')
      .select('id, title')
      .eq('semester', 1); // TIF20A, 3. Semester
    if (error) console.log('error', error);
    else setLectures(lectures);
  };

  return (
    <Stack spacing={3}>
      <Heading>Vorlesungen in TIF20A 3. Semester</Heading>
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
