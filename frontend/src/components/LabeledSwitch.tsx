import { Box, Flex, Text, Switch } from "@chakra-ui/react";

interface Props {
  label: string;
  onToggle: () => void;
  isChecked: boolean;
}

const LabeledSwitch = ({ label, onToggle, isChecked }: Props) => {
  return (
    <Flex direction="row" as={Box} borderRadius={10} padding={2}>
      <Text paddingLeft={2}>{label}</Text>
      <Switch onChange={() => onToggle()} isChecked={isChecked} />
    </Flex>
  );
};

export default LabeledSwitch;
