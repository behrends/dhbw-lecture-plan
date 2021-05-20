import { Heading } from '@chakra-ui/react';
import { supabase } from '../lib/initSupabase';
import CourseList from '../components/CourseList';

export default function Courses({ courses }) {
  return (
    <>
      <Heading>Kurse</Heading>
      <CourseList courses={courses} />
    </>
  );
}

export async function getServerSideProps() {
  if (!supabase) return { props: { courses: [] } };
  let { data: courses, error } = await supabase
    .from('Courses')
    .select('id, name');
  if (error) console.log('error', error);
  return { props: { courses } };
}
