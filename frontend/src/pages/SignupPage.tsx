import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import FormContainer from "../components/FormContainer";

const Signup = () => {
  return (
    <FormContainer>
      <Heading>
        ثبت نام در{" "}
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
          <FormLabel>ایمیل</FormLabel>
          <Input placeholder="ایمیل" dir="ltr" />
        </FormControl>
        <FormControl marginTop={5} isRequired>
          <FormLabel>رمز عبور</FormLabel>
          <Input type="password" placeholder="رمز عبور" dir="ltr" />
        </FormControl>
        <FormControl marginTop={5} isRequired>
          <FormLabel>تکرار رمز عبور</FormLabel>
          <Input type="password" placeholder="تکرار رمز عبور" dir="ltr" />
        </FormControl>
        <Button
          bgGradient="linear(to-r, red.400, pink.400)"
          color="white"
          _hover={{
            bgGradient: "linear(to-r, red.400, pink.400)",
            boxShadow: "xl",
          }}
          marginTop={5}
          paddingX={10}
          type="submit"
        >
          ثبت نام
        </Button>
      </VStack>
    </FormContainer>
  );
};

export default Signup;
