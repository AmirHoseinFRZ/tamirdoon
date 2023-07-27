import {
  Box,
  Button,
  HStack,
  Heading,
  Switch,
  useColorMode,
  Text,
  Flex,
  useColorModeValue,
  Show,
} from "@chakra-ui/react";
import LabeledSwitch from "./LabeledSwitch";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      bgColor={useColorModeValue("gray.50", "gray.900")}
      justify="space-between"
    >
      <Heading margin={2} as="h1" fontSize="2xl">
        تعمیردون
      </Heading>
      <HStack margin={2}>
        <Button marginLeft={2} colorScheme="green">
          ثبت نام
        </Button>
        <Button marginLeft={4} colorScheme="teal">
          ورود
        </Button>
        <Show above="md">
          <LabeledSwitch
            onToggle={() => toggleColorMode()}
            isChecked={colorMode === "dark"}
          />
        </Show>
      </HStack>
    </HStack>
  );
};

export default Navbar;
