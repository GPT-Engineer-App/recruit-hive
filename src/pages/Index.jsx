import React, { useState } from "react";
import { Box, Heading, Text, Button, Input, Stack, FormControl, FormLabel, useToast } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual login/signup functionality
    toast({
      title: isLogin ? "Logged in" : "Signed up",
      description: `You have successfully ${isLogin ? "logged in" : "signed up"}.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        {isLogin ? "Login" : "Sign Up"}
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </FormControl>
          <Button type="submit" colorScheme="blue" leftIcon={<FaSignInAlt />}>
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </Stack>
      </form>
      <Text mt={4} textAlign="center">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <Button variant="link" onClick={() => setIsLogin(!isLogin)} leftIcon={isLogin ? <FaUserPlus /> : <FaSignInAlt />}>
          {isLogin ? "Sign Up" : "Login"}
        </Button>
      </Text>
    </Box>
  );
};

export default Index;
