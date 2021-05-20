import { useRouter } from 'next/router';

export default function Course() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Kurse: {id}</p>;
}
