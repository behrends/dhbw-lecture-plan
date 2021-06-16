import { Heading } from '@chakra-ui/react';
import { supabase } from '../../src/dbapi';
import PageHead from '../../src/components/PageHead';
import CourseList from '../../src/components/CourseList';

export default function Courses({ courses }) {
  return (
    <>
      <PageHead title="Kurse" />
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
