import { useRouter } from 'next/router';
import { supabase } from '../../../../src/dbapi';
import Lectures from '../../../../src/components/Lectures';

export default function Semester({ lectures }) {
  const router = useRouter();
  const { course, semester } = router.query;
  return (
    <Lectures
      course={course}
      semester={semester}
      lectures={lectures}
    />
  );
}

export async function getServerSideProps({ params }) {
  if (!supabase) return { props: { lectures: [] } };
  let { data: lectures, error } = await supabase
    .from('Lectures')
    .select('id, title')
    .eq('semester', params.semid);
  if (error) console.log('error', error);
  return { props: { lectures } };
}
