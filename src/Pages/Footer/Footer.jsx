import {
  Box,
  Link,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../../components/Logo/Logo";
import style from "./Footer.module.css";
import { 
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io"; 
import insta from "./insta.png"; 

const Footer = () => {
  return (
    <div className={style.ft}>
      <Box className={style.footer}>
        {/* footer */}
        <Box className={style.footer_description} >
          <Box >
            <h2>Business Line</h2>
            <Link href={"#"}>Buy</Link>
            <Link href={"#"}>Rent </Link>
            <Link href={"#"}>Sale</Link>
            <Link href={"#"}>Home Loan </Link>
            <Link href={"#"}>Advertise </Link>
            <Link href={"#"}>Agent Finder </Link>
          </Box>
          <Box >
            <h2>Company</h2>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>About Assetorix</Link>
            <Link href={"#"}>Corporate Service</Link>
            <Link href={"#"}> Developer Partners </Link>
            <Link>  </Link>
          </Box>
          <Box >
            <h2>Help Center</h2>
            <Link href={"#"}>Purchase Term & Condition</Link>
            <Link href={"#"}>Disclaimer</Link>
            <Link href={"#"}>Privacy</Link>
            <Link href={"#"}>Terms of use this website</Link>

          </Box>
          <Box>
            <h2>CONTACT</h2>
            <Box display={"flex"} alignItems={"flex-start"} w={"100%"} justifyContent={"center"} >
              <Box flex={1} paddingTop={1} >
                <IoIosArrowForward size={"16px"} />
              </Box>
              <Box flex={9} textAlign={"left"} >
                <p>Ametheus Holdings Pvt Ltd Address: 27, 2nd Floor, Hauz Khas Village, New Delhi 110016, India  Phone: +91-11-41670666, +91-1140074433, +91-9999099538</p>
              </Box>
            </Box>
            <Box display={"flex"} alignItems={"flex-start"} w={"100%"}>
              <Box flex={1} paddingTop={1}>
                <IoIosArrowForward size={"16px"} />
              </Box>
              <Box flex={9} textAlign={"left"}>
                <p>Email: info@ametheus.com</p>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box py={4}>
          <Flex
            align={"center"} 
            _before={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              ml: 8,
            }}
          >
            {/* company Logo */}
            <Logo />
          </Flex>
        </Box>
        {/* some company info */}
        <Text className={style.groupof}>
          ©2010 - 2023 All rights reserved with Ametheus Holdings Pvt Ltd.
        </Text>

        {/* line with logo */}
        <Box className={style.contact}>
          <h1>
            <BiLogoLinkedin size={"24px"} />
          </h1>
          <h1>
            <BsTwitter size={"24px"} />
          </h1>
          <h1>
            <BsFacebook size={"24px"} />
          </h1>
          <h1>
            <BsInstagram size={"24px"} className={style.insta_icon} />    
            <img src={insta} alt="imstagram" className={style.insta_logo} width={"24px"} /> 
          </h1>
        </Box>
      </Box>
      <div className={style.location_detail}>
        <Box>
          <h3> <span className={style.blue}>assetorix.com</span>  - a concern of Ametheus Holdings Limited <br />
            Marketing partner - <br className={style.br} /> <span className={style.red}>Unifie Entertainment technology LLP </span>
          </h3>
        </Box>
        <Box >
          Email: info@assetorix.com | Call Us at: +91-9999099538
        </Box>
        <Box>
          <button>LOCATE US <IoIosArrowForward size={"26px"} /> </button>
        </Box>
      </div>
    </div>
  );
};

export default Footer;
