import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export const Header = () => {
  const [hasMounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!hasMounted) return false

  return (
    <Flex
      position="fixed"
      top={0}
      width="full"
      p={4}
      as="header"
      alignItems="center"
      justifyContent="space-between"
    >
      <iframe 
        src="https://giphy.com/embed/TjAcxImn74uoDYVxFl" 
        width="60"  // Reduced width
        height="60"  // Reduced height
        style={{ border: 'none' }} 
        allowFullScreen
        title="GIF Logo"
      ></iframe>
    </Flex>
  )
}
