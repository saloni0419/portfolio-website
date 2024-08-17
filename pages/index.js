import { Link, Box, Text, Heading, GridItem } from "@chakra-ui/react"
import Head from "next/head"
import { Grid } from "../components/Grid"
import { Experience } from "../components/Experience"
import Cursor from "../components/Cursor"
import { Avatar } from "../components/Avatar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Saloni - Portfolio</title>
      </Head>
      <Cursor />

      <Box py="115px" px={4} maxWidth={900} mx="auto">
        <Grid fluid templateColumns="repeat(4, 1fr)" mb={10} alignItems="center">
          <GridItem colSpan={1}>
            <Avatar boxSize="100px" /> {/* Adjusted logo size */}
          </GridItem>
          <GridItem colSpan={3}>
            <Box>
              <Heading as="h1" size="lg">
                Saloni Singh
              </Heading>
              <Text> Full stack developer with a backend focus | Web3</Text>
            </Box>
          </GridItem>
        </Grid>
        
        <Box mb={14}>
          <Heading as="h2" size="md" mb={2}>
            About
          </Heading>

          <Text>
            Hey, I’m Saloni—a full stack developer with major focus on backend and
          juggling with web3. When I’m not in a code-storm, you’ll find me cheering on my
            favorite football team or getting lost in a good book. I’m open to freelance
            projects, so if you have something cool in mind, let’s chat! You can reach
            me at{" "}
            <Link color="teal.500" href="mailto:salonisingh0401@gmail.com">
              salonisingh0401@gmail.com
            </Link>
          </Text>
        </Box>
        {/* Skills Section */}
        <Box mb={14}>
          <Heading as="h2" size="md" mt={14} mb={10}>
            Skills
          </Heading>

          <Experience
            side="Frontend Development"
            title=" "
            desc="HTML • CSS • JavaScript • TypeScript • React.js • Next.js • Tailwind CSS "
          />
          <Experience
            side="Backend Development"
            title=" "
            desc="Node.js • Express.js • MongoDB • REST APIs • GraphQL • Prisma • JWT Authentication • Real-time Communication (Socket.io)
"
          />
          <Experience
            side="Blockchain & Web3"
            title=" "
            desc="Solidity • Smart Contracts • Ethereum • Web3.js "
          />
          <Experience side="DevOps & Cloud" title=" " desc="Docker • Git • Linux" />
        </Box>
        {/* Projects Section */}
        <Box mb={14}>
          <Heading as="h2" size="md" mt={14} mb={10}>
            Projects
          </Heading>

          <Experience
            href="https://github.com/saloni0419/Book-Store"
            side="Book-Store"
            title="Book-Store"
            desc="A book store project where we can do CRUD operations "
            stack="React.js • Express.js • Node.js • JavaScript "
          />
          <Experience
            href="https://moviesworld-beta.vercel.app/"
            side="Moviesworld"
            title="Moviesworld"
            desc="It is a React-based web application that allows users to explore a diverse collection of movies."
            stack="React.js • JavaScript"
          />
          <Experience
            href="https://kanban-flow.netlify.app/"
            side="Kanban-Flow"
            title="Kanban-Flow"
            desc="Lightweight and intuitive task management with drag-and-drop functionality. Organize tasks into sections, track progress, and easily delete with a click"
            stack="HTML • CSS • JavaScript"
          />
          <Experience
            href="https://expendix.netlify.app/"
            side="ExpendiX"
            title="ExpendiX"
            desc="It is a user-friendly web application to help individuals track their expenses, income, and financial history."
            stack="HTML • CSS • JavaScript"
          />
          <Experience
            href="https://mytaskbox.netlify.app/"
            side="TaskBox"
            title="TaskBox"
            desc=" A user-friendly task management project allowing task addition, completion marking, and deletion. Simplify your to-do list"
            stack="HTML • CSS • JavaScript"
          />
        </Box>
        {/* Blog Section */}
        <Box mb={14}>
          <Heading as="h2" size="md" mt={14} mb={10}>
            Blog
          </Heading>

          <Experience
            href="https://saloni1904.hashnode.dev/blockchain-technology-history-and-how-it-works"
            side="Blog 1"
            title="Blockchain Technology: History and How It Works"
            desc="A comprehensive overview of blockchain technology, its history, and how it functions."
          />
          <Experience
            href="https://saloni1904.hashnode.dev/asynchronous-javascript-a-beginners-guide-to-callbacks-promises-and-asyncawait"
            side="Blog 2"
            title="Asynchronous JavaScript: A Beginner's Guide to Callbacks, Promises, and Async/Await"
            desc="A beginner's guide to understanding asynchronous JavaScript through callbacks, promises, and async/await."
          />
          <Experience
            href="https://saloni1904.hashnode.dev/master-yaml-the-ultimate-guide-to-data-serialization"
            side="Blog 3"
            title="Master YAML: The Ultimate Guide to Data Serialization"
            desc="An ultimate guide to YAML, covering its use cases and how it simplifies data serialization."
          />
        </Box>
        {/* Education Section */}
        <Box mb={14}>
          <Heading as="h2" size="md" mt={14} mb={10}>
            Education
          </Heading>

          <Experience
            side="2020 - 2024"
            title="Galgotias University"
            desc="Bachelors of Technology (Computer Science Engineering)"
          />
          <Experience
            side="2020"
            title="Public Central School"
            desc="Senior Secondary School"
          />
        </Box>
        {/* Links Section */}
        <Box mb={14}>
          <Heading as="h2" size="md" mt={14} mb={10}>
            Links
          </Heading>

          <Experience
            side="Github"
            title="@saloni0419"
            href="https://github.com/saloni0419"
            mb={4}
          />
          <Experience
            side="Twitter"
            title="@ssalonirajput"
            href="https://twitter.com/ssalonirajput"
            mb={4}
          />
          <Experience
            side="LinkedIn"
            title="@ssalonirajput"
            href="https://www.linkedin.com/in/ssalonirajput/"
            mb={4}
          />
          <Experience
            side="Email"
            title="salonisingh0401@gmail.com"
            href="mailto:salonisingh0401@gmail.com"
            mb={4}
          />
        </Box>
      </Box>
    </>
  )
}

