import {
  Button,
  HStack,
  Heading,
  Show,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import LabeledSwitch from "./LabeledSwitch";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      bgColor={useColorModeValue("gray.50", "gray.900")}
      justify="space-between"
    >
      <Link to="/">
        <Heading margin={2} as="h1" fontSize="2xl">
          تعمیردون
        </Heading>
      </Link>
      <HStack margin={2}>
        <Link to="/signup">
          <Button marginLeft={2} colorScheme="green">
            ثبت نام
          </Button>
        </Link>
        <Link to="/signin">
          <Button marginLeft={4} colorScheme="teal">
            ورود
          </Button>
        </Link>
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
