import { Button } from '@chakra-ui/react';

export default function ActionButton({ title }) {
  return (
    <Button colorScheme="red" borderRadius="xl" maxW="160px">
      {title}
    </Button>
  );
}
