import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import FormContainer from "../components/FormContainer";

const SigninPage = () => {
  return (
    <FormContainer>
      <Heading>ورود به تعمیردون</Heading>
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
        <Button marginTop={5} paddingX={10} colorScheme="teal" type="submit">
          ورود
        </Button>
      </VStack>
    </FormContainer>
  );
};

export default SigninPage;
