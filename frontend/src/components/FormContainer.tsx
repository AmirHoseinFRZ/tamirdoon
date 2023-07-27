import { Center, VStack, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

const FormContainer = ({ children }: Props) => {
  return (
    <Center>
      <VStack
        padding={10}
        marginTop={10}
        borderRadius={15}
        borderWidth="1px"
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        boxShadow="lg"
      >
        {children}
      </VStack>
    </Center>
  );
};

export default FormContainer;
