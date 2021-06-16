import { Box, Heading, Text } from '@chakra-ui/react';
import PageHead from '../components/PageHead';

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
    </Box>
  );
}
