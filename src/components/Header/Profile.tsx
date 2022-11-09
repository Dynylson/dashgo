import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Dynylson Júnior</Text>
        <Text color="gray.300" fontSize="small">
          dynylsonj@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Dynylson Júnuior"
        src="https://github.com/dynylson.png"
      />
    </Flex>
  );
}
