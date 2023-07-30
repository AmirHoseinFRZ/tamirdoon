import {
  Button,
  HStack,
  Heading,
  Show,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LabeledSwitch from "./LabeledSwitch";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justify="space-between">
      <Link to="/">
        <Heading
          margin={2}
          as="h1"
          fontSize={useBreakpointValue({ base: "3xl", md: "4xl", lg: "5xl" })}
          bgGradient="linear(to-r, red.400, pink.400)"
          bgClip="text"
        >
          تعمیردون
        </Heading>
      </Link>
      <HStack margin={2}>
        <Link to="/signup">
          <Button
            marginLeft={2}
            bgGradient="linear(to-r, red.400, pink.400)"
            color="white"
            _hover={{
              bgGradient: "linear(to-r, red.400, pink.400)",
              boxShadow: "xl",
            }}
          >
            ثبت نام
          </Button>
        </Link>
        <Link to="/signin">
          <Button
            marginLeft={4}
            bgGradient="linear(to-r, pink.400, blue.300)"
            color="white"
            _hover={{
              bgGradient: "linear(to-r, pink.400, blue.300)",
              boxShadow: "xl",
            }}
          >
            ورود
          </Button>
        </Link>
        <Show above="md">
          <LabeledSwitch
            label="حالت شب"
            onToggle={() => toggleColorMode()}
            isChecked={colorMode === "dark"}
          />
        </Show>
      </HStack>
    </HStack>
  );
};

export default Navbar;
