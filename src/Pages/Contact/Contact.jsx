import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import Reactw, { useEffect } from 'react';
import style from "./Contact.module.css";


const Contact = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    return (
        <Box display={{ base: "grid", lg: "flex" }} className={style.top_head}>
            <Box>
                <Heading color={"rgb(233,110,114)"} textAlign={"left"} as='h4' size='md'>CONTACT US</Heading>
                <Divider marginBottom={"30px"} />
                <Heading color={"black"} as='h4' size='md'> Ametheus Holdings Pvt Ltd </Heading>
                <Text>
                    If you ever feel like you can’t find the right product for you on our site or you need a little more information or assistance please get in touch with the sales team.
                </Text>
                <Text>
                    Call Us: <br />
                    <Box display={"flex"} gap={2} >  
                        <Text> Phone:</Text>
                        <a href="tel:+91-9990032288"> +91 9990032288,</a>
                        <a href="tel:+91-9990045588">+91 9990045588</a>
                    </Box> 
                    <br />Email: <a href="mailto:info@ametheus.com">info@ametheus.com</a>
                </Text>
                <Heading as='h4' size='md' fontWeight={"bold"}>Postal Address:</Heading>
                <Text>
                    Ametheus Holdings Pvt Ltd <br />
                    27, 2nd Floor, Hauz Khas Village, New Delhi 110016, India
                </Text>
                <Heading as={"h4"} size={"md"} fontWeight={"bold"} color={"#ff0000"}> WARNING: #THIS WEBSITE IS UNDER BETA VERSION.# </Heading>
            </Box>
            {/* <map> 
                <area shape="" coords="" href="https://www.google.com/maps/search/27a+second+floor,+hauz+khas+vilage/@28.5501009,77.1763438,14z/data=!3m1!4b1?entry=ttu" alt="this_is_map" />
            </map> */}
            <Box>
                <div className={style.mapouter}>
                    <div className={style.gmap_canvas}>
                        <iframe
                            width={600}
                            height={500}
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=27A%20hauz%20khas%20village&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                        ></iframe>
                        <a href="https://123movies-to.org"></a>
                        <br />
                        {/* <style>{`.mapouter{position:relative;text-align:right;height:${iframeHeight}px;width:${iframeWidth}px;}`}</style> */}
                        <a href="https://www.embedgooglemap.net"></a>
                        {/* <style>{`.gmap_canvas {overflow:hidden;background:none!important;height:${iframeHeight}px;width:${iframeWidth}px;}`}</style> */}
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default Contact

