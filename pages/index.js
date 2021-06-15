import Head from 'next/head';
import { Box, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>DHBW Studienplan</title>
        <meta name="description" content="DHBW Studienplan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading>DHBW Studienplan</Heading>
    </Box>
  );
}
