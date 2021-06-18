import Link from 'next/link';
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Td,
  Th,
  Tr,
} from '@chakra-ui/react';
import moment from 'moment';
import 'moment/locale/de';

moment.locale('de');

export default function Semester({ course, semester }) {
  return (
    <>
      <Heading>
        {course} &mdash; Theoriephasen / Vorlesungszeiten
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Semester</Th>
            <Th>Beginn</Th>
            <Th>Ende</Th>
          </Tr>
        </Thead>
        <Tbody>
          {semester.map((semester) => (
            <Link
              href={{
                pathname: `/courses/${semester.course}/semester/${semester.id}`,
                query: { course: course, semester: semester.number },
              }}
            >
              <Tr key={semester.id} cursor="pointer">
                <Td>{semester.number}</Td>
                <Td>
                  {moment(semester.start).format(
                    'dddd, Do MMMM YYYY'
                  )}
                </Td>
                <Td>
                  {moment(semester.end).format('dddd, Do MMMM YYYY')}
                </Td>
              </Tr>
            </Link>
          ))}
        </Tbody>
      </Table>
    </>
  );
}
