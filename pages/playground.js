import { useEffect, useState } from 'react';
import { supabase } from '../lib/initSupabase';
import Lectures from '../components/Lectures';

export default function Playground() {
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
    <Lectures course="TIF20A" semester={3} lectures={lectures} />
  );
}
