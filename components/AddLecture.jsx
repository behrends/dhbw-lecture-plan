import {
  Box,
  Button,
  Checkbox,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

export default function AddLecture() {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" p={3}>
      <Input placeholder="Titel der Vorlesung" mb={2} />
      <Input placeholder="Anzahl der Stunden" mb={4} />
      <Checkbox>Klausur einplanen?</Checkbox>
      <NumberInput
        step={15}
        defaultValue={30}
        min={30}
        max={120}
        mb={6}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button colorScheme="teal">Vorlesung erstellen</Button>
    </Box>
  );
}
