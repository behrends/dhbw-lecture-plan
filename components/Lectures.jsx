import {useEffect, useState} from 'react';
import { supabase } from '../lib/initSupabase'

export default function Lectures() {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    fetchLectures()
  }, [])

  const fetchLectures = async () => {
    let { data: lectures, error } = await supabase.from('Lectures').select('*').order('id', true);
    if (error) console.log('error', error);    
    else setLectures(lectures);
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