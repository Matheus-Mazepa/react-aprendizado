import { IconType } from 'react-icons';
import {
  FiHome
} from 'react-icons/fi';

import { Link as LinkRouter } from "react-router-dom";

import {
  BsCart,
  BsBag
} from 'react-icons/bs';

import {
  Flex,
  CloseButton,
  Icon,
  Text
} from '@chakra-ui/react';

import { NavItemProps } from './nav-item-props';

export function Content() {
  interface LinkItemProps {
    name: string;
    icon: IconType;
    path: string;
  }

  const LinkItems: Array<LinkItemProps> = [
    { name: 'Dashboard', icon: FiHome, path: '/' },
    { name: 'Pedidos', icon: BsCart, path: '/orders'},
    { name: 'Produtos', icon: BsBag, path: '/products' },
  ];

  const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
      <div style={{ textDecoration: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </div>
    );
  };

  return (
    <div>
      {LinkItems.map((link) => (
      <LinkRouter key={link.name} to={link.path}>
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      </LinkRouter>
    ))}
    </div>
  );
}