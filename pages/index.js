import { Box, Heading, Text } from '@chakra-ui/react';
import PageHead from '../src/components/PageHead';

export default function Home() {
  return (
    <Box>
      <PageHead title="DHBW Studienplan" />
      <Heading as="h1" size="3xl">
        DHBW Studienplan
      </Heading>
      <Heading as="h2" size="lg">
        Digitalisierung des Studienbetriebs
      </Heading>
      <Text>
        Ein Beispiel-Projekt u.a. für die Lehrveranstaltungen
        Web-Engineering und Anwendungsprojekt.
      </Text>
      <Text>
        Code bei GitHub:{' '}
        <a
          href="https://github.com/behrends/dhbw-lecture-plan/"
          target="blank"
          style={{ color: 'blue' }}
        >
          github.com/behrends/dhbw-lecture-plan
        </a>
      </Text>
    </Box>
  );
}
