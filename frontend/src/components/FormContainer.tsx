import { Center, VStack, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import Blur from "./Blur";

interface Props {
  children: ReactNode | ReactNode[];
}

const FormContainer = ({ children }: Props) => {
  return (
    <>
      <Center>
        <VStack
          padding={10}
          marginTop={10}
          borderRadius={15}
          borderWidth="1px"
          borderStyle="solid"
          borderColor={useColorModeValue("gray.200", "gray.700")}
          boxShadow="lg"
          bgColor={useColorModeValue("white", "gray.800")}
        >
          {children}
        </VStack>
      </Center>
      <Blur
        position="absolute"
        top="120px"
        right={-10}
        style={{ filter: "blur(70px)" }}
      />
    </>
  );
};

export default FormContainer;
