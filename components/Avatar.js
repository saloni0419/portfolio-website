import { Box, Image, Flex, keyframes, useDisclosure } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useAccount, useEnsName } from "wagmi"

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`

export const Avatar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [hasMounted, setMounted] = useState(false)
  const { data: ensName } = useEnsName({})

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!hasMounted) return null

  return (
    <Box
      as="button"
      onClick={onOpen}
      type="button"
      transition="0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
      _hover={{
        transform: "scale(1.03)",
      }}
    >
      <Flex alignItems="center" justifyContent="center" position="relative">
        <Flex
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          animation={`${spin} infinite 2.5s paused linear`}
          _hover={{
            animationPlayState: "running",
          }}
        />
        <Image
          borderRadius="full"
          width={{ base: "50%", sm: "40%", md: "30%", lg: "full" }}
          src="/profile.png"
          alt="Saloni"
        />
      </Flex>
    </Box>
  )
}
