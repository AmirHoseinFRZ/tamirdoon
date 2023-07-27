import { Box, Flex, Text, Switch } from "@chakra-ui/react";

interface Props {
  onToggle: () => void;
  isChecked: boolean;
}

const LabeledSwitch = ({ onToggle, isChecked }: Props) => {
  return (
    <Flex direction="row" as={Box} borderRadius={10} padding={2}>
      <Text paddingLeft={2}>حالت شب</Text>
      <Switch onChange={() => onToggle()} isChecked={isChecked} />
    </Flex>
  );
};

export default LabeledSwitch;
