import {
  Input,
  InputGroup,
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  InputRightElement,
} from "@chakra-ui/react";

import { FaSearch } from "react-icons/fa";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import styled from "@emotion/styled";

import { useEffect, useState, SetStateAction } from "react";

const NavBar = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  height: 3.5rem;
  background-color: red;
  .brand-logo {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface Props {
  children: React.ReactNode;
}

interface NavbarProps {
  Logo: JSX.Element | string;
}

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Navbar({ Logo = "Swyfe App" }: NavbarProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sessionStatus, setSessionStatus] = useState(false);

  useEffect(() => {

    (() => {
      const status = (sessionStorage.getItem("status") as string && (sessionStorage.getItem("status") == "true" || sessionStorage.getItem("status") == "1")) ? true : false;
      setSessionStatus(status);
    })()
  },[])
  

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>{Logo}</Box>
          <Flex alignItems={"center"}>
            <InputGroup>
              <Input htmlSize={40} id="search-items" size="md" type="text" />
              <InputRightElement>
                <label htmlFor="search-items">
                  <FaSearch />
                </label>
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  display={(!sessionStatus) ? "none" : ""}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
              <Button colorScheme="purple" display={(sessionStatus) ? "none" : ""}>
                Login
              </Button>
              <Button colorScheme="blue" display={(sessionStatus) ? "none" : ""}>
                Registro
              </Button>
              
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
