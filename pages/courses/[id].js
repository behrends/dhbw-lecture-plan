import { useRouter } from 'next/router';
import { supabase } from '../../src/dbapi';
import PageHead from '../../src/components/PageHead';
import Semester from '../../src/screens/semester/Semester';

export default function Course({ semester }) {
  const router = useRouter();
  const { course } = router.query;
  return (
    <>
      <PageHead title={`${course} Semester`} />
      <Semester course={course} semester={semester} />
    </>
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
