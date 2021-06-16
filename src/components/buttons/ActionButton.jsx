import { Button } from '@chakra-ui/react';

export default function ActionButton({ title }) {
  return (
    <Button colorScheme="red" borderRadius="xl">
      {title}
    </Button>
  );
}
