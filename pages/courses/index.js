import { supabase } from '../../src/dbapi';
import PageHead from '../../src/components/PageHead';
import Courses from '../../src/screens/courses/Courses';

export default function CoursePage({ courses }) {
  return (
    <>
      <PageHead title="Kurse" />
      <Courses courses={courses} />
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
