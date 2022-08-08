import { TitleProps } from "./title-props";
import { Heading } from '@chakra-ui/react'

export function Title({text}: TitleProps) {
  return <Heading>{text}</Heading>;
}