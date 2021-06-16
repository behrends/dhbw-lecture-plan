import { Box, Center, Text } from '@chakra-ui/react';

export default function Card({ title, ...rest }) {
  return (
    <Center
      maxW="180px"
      borderColor="red.500"
      borderWidth="1px"
      borderRadius="3xl"
      boxShadow="lg"
      padding="20px"
      {...rest}
    >
      <Text fontSize="3xl">{title}</Text>
    </Center>
  );
}
