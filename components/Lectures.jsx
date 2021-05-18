import {useEffect, useState} from 'react';
import { supabase } from '../lib/initSupabase'

export default function Lectures() {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    fetchLectures()
  }, [])

  const fetchLectures = async () => {
    if(!supabase) return;
    let { data: lectures, error } = await supabase.from('Lectures').select('*').order('id', true);
    if (error) console.log('error', error);    
    else setLectures(lectures);
    // await supabase.from('Lecturers').insert([{ last_name: 'TESTDOZI' }]);
  }

  return (
    <div>
      <h1>LECTURES</h1>
      <ul>
          {lectures.map((lecture) => <li key={lecture.id}>{lecture.title}</li>)}
      </ul>
    </div>
  );
}