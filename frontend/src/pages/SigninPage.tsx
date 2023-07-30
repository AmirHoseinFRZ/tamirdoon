import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import FormContainer from "../components/FormContainer";

const SigninPage = () => {
  return (
    <FormContainer>
      <Heading>
        ورود به{" "}
        <Text
          as="span"
          bgGradient="linear(to-r, red.400, pink.400)"
          bgClip="text"
        >
          تعمیردون
        </Text>
      </Heading>
      <VStack
        as="form"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event);
        }}
      >
        <FormControl marginTop={5} isRequired>
          <FormLabel>نام کاربری</FormLabel>
          <Input placeholder="نام کاربری" dir="ltr" />
        </FormControl>
        <FormControl marginTop={5} isRequired>
          <FormLabel>رمز عبور</FormLabel>
          <Input type="password" placeholder="رمز عبور" dir="ltr" />
        </FormControl>
        <Button
          marginTop={5}
          paddingX={10}
          bgGradient="linear(to-r, pink.400, blue.300)"
          color="white"
          _hover={{
            bgGradient: "linear(to-r, pink.400, blue.300)",
            boxShadow: "xl",
          }}
          type="submit"
        >
          ورود
        </Button>
      </VStack>
    </FormContainer>
  );
};

export default SigninPage;
