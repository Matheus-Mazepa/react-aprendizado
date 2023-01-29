import React, {useState} from 'react'

import {
  Flex,
  Heading,
  Stack,
  Box,
  Link,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  Container,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'
import {useAuth} from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const { signIn, authenticated } = useAuth()

  if (authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ showPassword, setShowPassword ] = useState(false)
  const handleShowClick = () => setShowPassword(!showPassword)
  const navigate = useNavigate();

  function submitLogin () {
    signIn()

    navigate("/");
  }

  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={{ base: 'transparent', sm: 'bg-surface' }}
        boxShadow={{ base: 'none', sm: 'md' }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <Flex flexDirection="column" justifyContent="center" alignItems="center">
              <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
                w={'300px'}
              >
                <Heading>Login</Heading>
                <Box width={'100%'}>
                  <form>
                    <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900">
                      <FormControl>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none" />
                          <Input
                            type="email"
                            placeholder="Email"
                            onChange={event => setEmail(event.target.value)}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none" color="gray.300" />
                          <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Senha"
                            onChange={event => setPassword(event.target.value)}
                          />
                          <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                              {showPassword ? 'Esconder' : 'Mostrar'}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                        <FormHelperText textAlign="right">
                          <Link>Esqueci minha senha</Link>
                        </FormHelperText>
                      </FormControl>
                      <Button
                        onClick={submitLogin}
                        borderRadius={0}
                        type="button"
                        variant="solid"
                        width="full"
                        className={'btn-primary'}
                      >
                        Login
                      </Button>
                    </Stack>
                  </form>
                </Box>
              </Stack>
              <Box>
                <Link color="teal.500" href="/new/register">
                  Cadastre-se
                </Link>
              </Box>
            </Flex>
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}