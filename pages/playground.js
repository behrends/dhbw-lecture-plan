import { supabase } from '../lib/initSupabase';
import Lectures from '../components/Lectures';

export default function Playground({ lectures }) {
  return (
    <Lectures course="TIF20A" semester={3} lectures={lectures} />
  );
}

export async function getServerSideProps() {
  if (!supabase) return { props: { lectures: [] } };
  let { data: lectures, error } = await supabase
    .from('Lectures')
    .select('id, title')
    .eq('semester', 1); // TIF20A, 3. Semester
  if (error) console.log('error', error);
  return { props: { lectures } };
}
