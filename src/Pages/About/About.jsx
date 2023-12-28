import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  IconButton,
  createIcon,
} from "@chakra-ui/react";
import style from "./About.module.css";
import { useEffect } from "react";

export default function About() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  return (
    <Container maxW={"7xl"} margin={"0px auto"} >
      <Stack
        textAlign={"left"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 6, md: 8 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1}
            fontWeight={600}
            fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
          >
            REAL ESTATE
          </Heading>
          <Text textAlign={"justify"}>
            Assetorix® connects people & property perfectly. Assetorix® provides
            services in the acquisition and disposition of income-producing
            properties for third-party owners and corporate occupiers. By
            utilizing deep market intelligence, transaction expertise, a
            seamless execution process and deep relationships, our professionals
            can anticipate trends and command capital globally. The integration
            of property sales with lending capabilities we leads a home buyer
            from “I think” to “I own” proposition, at no extra cost. Overseas
            buyers can buy properties through direct TT payment or using
            financial instrument like LC/SBLC/BG which is an exclusive service
            offered by Ametheus to its clients to conclude the deal at utmost
            safety of money. Our Real-Estate web-portal is www.assetorix.com
          </Text>
          <Text className={style.head_line}>
            <Text>Property sales services include:</Text>
            <Text>Ω Construction management</Text>
            <Text>Ω Property marketing</Text>
            <Text>Ω Acquisitions and dispositions</Text>
            <Text>Ω Consulting</Text>
            <Text>Ω Market research</Text>
            <Text>Ω Portfolio sales</Text>
          </Text>
          <Text className={style.head_line}>
            <Text>Our clients include:</Text>
            <Text> Ω Domestic and foreign-based real estate investors</Text>
            <Text>Ω Opportunity funds</Text>
            <Text>Ω Owner/developers</Text>
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"baseline"}
          position={"relative"}
          w={"full"}
        //   border={"2px solid black"} 
        >
          <Box
            position={"relative"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            padding={"20px"}
            width={"full"}
            overflow={"hidden"} 
            className={style.untouch}
          >
            <IconButton
              aria-label={"Play Button"}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              icon={<PlayIcon w={12} h={12} />}
              size={"lg"}
              color={"white"}
              position={"absolute"}
              left={"50%"}
              top={"50%"}
              transform={"translateX(-50%) translateY(-50%)"}
            />
            <video autoPlay muted loop  >
              <source
                src={"https://www.ametheus.com/Real-Estate-Ametheus.mp4"}
                type="video/mp4"
              />
            </video>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});

export const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
