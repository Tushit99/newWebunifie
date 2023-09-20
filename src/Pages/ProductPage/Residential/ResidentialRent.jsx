import { Box, Button, Checkbox, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import style from "../ProductPage.module.css";
import React, { useEffect, useState } from 'react'
import { BsCheckLg } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';


const ResidentialRent = () => {
    const [serchParam, setSearchParam] = useSearchParams();  
    const paramBhk = serchParam.getAll("bhk");
    const paramProperty = serchParam.getAll("propertyType"); 
    const paramFurnish = serchParam.getAll("furnished");  
    const [data, setData] = useState([]); 
    const [bhk, setBhk] = useState(bhk || []); 
    const [propertyType, setPropertyType] = useState(propertyType || []);
    const [furnished, setfurnish] = useState(furnished || []);
    const [wishlist, setWishlist] = useState([]);

    const handleLike = () => { 
        let id = localStorage.getItem("usrId") || undefined;
        let authorization = localStorage.getItem("AstToken") || undefined;

        let head = { id, authorization, "Content-type": "application/json" };
        if (!id || !authorization) {
            return;
        }
        axios.get(`${process.env.REACT_APP_URL}/user/wishlistIDs`, {
            headers: head,
        }).then((e) => {
            setWishlist(e.data);
            console.log(e.data);
        }).catch((err) => console.log(err));
    }


    const handleAddToWishlist = (myid) => { 
        let id = localStorage.getItem("usrId") || undefined;
        let authorization = localStorage.getItem("AstToken") || undefined;

        let head = { id, authorization, "Content-type": "application/json" };
        if (!id || !authorization) {
            return;
        } 
        
        const axiosConfig = {  
            method: `${wishlist.includes(myid) ? "delete" : "patch"}`,
            url: `${process.env.REACT_APP_URL}/user/wishlist/${myid}`,
            headers: {
                id: head.id,
                authorization: head.authorization,
                "Content-type": head["Content-type"],
            },
            data: {},
        };

        axios(axiosConfig)
            .then((e) => {
                setWishlist(e.data); 
                setWishlist(e.data.wishlistIDs);  
                console.log(e.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }


    const ProductDetail = async () => {  
        await axios.get(`${process.env.REACT_APP_URL}/property?lookingFor=Rent`).then((e) => {
            setData(e.data.data); 
            console.log(e.data); 
        }).catch((e) => {
            console.log(e);
        });
    };



    const handleBedroom = (value) => {
        setBhk((prev) => {
            if (prev.includes(value)) {
                return prev.filter((item) => item !== value);
            } else {
                return [...prev, value];
            }
        });
    }

    const handlePropertyType = (value) => {
        console.log(value);
        setPropertyType((prev) => {
            if (prev.includes(value)) {
                return prev.filter((item) => item !== value);
            } else {
                return [...prev, value];
            }
        });
    }

  
    const handleFurnished = (value) => {
        console.log(value);
        setfurnish((prev) => {
            if (prev.includes(value)) {
                return prev.filter((item) => item !== value);
            } else {
                return [...prev, value];
            }
        });
    } 

    useEffect(() => {
        ProductDetail(); // fetching the data
        handleLike(); // wishlist 
    }, []); 


    useEffect(()=>{
        let param = {} 



    },[])


    return (
        <Box margin={"40px auto 60px auto"} w={"96%"} >
            {/* Property box */}
            <Flex display={"flex"} margin={"20px auto"} alignItems={"flex-start"} gap={4} >
                {/* ===================================  Property Sorting ================================= */}
                <Box flex={2} padding={5} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} >
                    <Heading size={"md"}> Sorting Property </Heading>
                    <Divider backgroundColor={"rgb(227, 226, 226)"} marginTop={"2px"} padding={"1px"} borderRadius={"4px"} />
                    <Box margin={"4px auto"}>
                        <Heading textAlign={"left"} size={"sm"} > No. of Bedrooms </Heading>
                        <Box display={"flex"} justifyContent={"left"} alignItems={"baseline"} flexWrap={"wrap"} gap={3} margin={"10px auto"} >
                            <button className={bhk.includes("1") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={1} > {bhk.includes("1") ? <BsCheckLg /> : <BiPlus />} 1 BHk </button>
                            <button className={bhk.includes("2") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={2} > {bhk.includes("2") ? <BsCheckLg /> : <BiPlus />} 2 BHK </button>
                            <button className={bhk.includes("3") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={3} > {bhk.includes("3") ? <BsCheckLg /> : <BiPlus />} 3 BHK </button>
                            <button className={bhk.includes("4") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={4} > {bhk.includes("4") ? <BsCheckLg /> : <BiPlus />} 4 BHK </button>
                            <button className={bhk.includes("5") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={5} > {bhk.includes("5") ? <BsCheckLg /> : <BiPlus />} 5 BHK </button>
                            <button className={bhk.includes("6") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={6} > {bhk.includes("6") ? <BsCheckLg /> : <BiPlus />} 6 BHK </button>
                            <button className={bhk.includes("7") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={7} > {bhk.includes("7") ? <BsCheckLg /> : <BiPlus />} 6+ BHK </button>
                        </Box>
                    </Box>
                    <Box margin={"15px auto"}>
                        <Heading textAlign={"left"} size={"sm"} > Property Type </Heading>
                        <Box display={"flex"} justifyContent={"left"} alignItems={"baseline"} flexWrap={"wrap"} gap={3} margin={"10px auto"} >
                            <button className={propertyType.includes("Independent/Builder Floor") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Independent/Builder Floor"} > {propertyType.includes("Independent/Builder Floor") ? <BsCheckLg /> : <BiPlus />} Independent/Builder Floor </button>
                            <button className={propertyType.includes("Residential Apartment") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Residential Apartment"} > {propertyType.includes("Residential Apartment") ? <BsCheckLg /> : <BiPlus />} Residential Apartment </button>
                            <button className={propertyType.includes("Independent House/Villa") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Independent House/Villa"} > {propertyType.includes("Independent House/Villa") ? <BsCheckLg /> : <BiPlus />} Independent House/Villa </button>
                            <button className={propertyType.includes("Farm House") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Farm House"} > {propertyType.includes("Farm House") ? <BsCheckLg /> : <BiPlus />} Farm House </button>
                            <button className={propertyType.includes("Serviced Apartments") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Serviced Apartments"} > {propertyType.includes("Serviced Apartments") ? <BsCheckLg /> : <BiPlus />} Serviced Apartments </button>
                        </Box>
                    </Box>

                    <Box margin={"15px auto"}>
                        <Heading textAlign={"left"} size={"sm"} > Furnishing Status </Heading>
                        <Box display={"flex"} justifyContent={"left"} alignItems={"baseline"} flexWrap={"wrap"} gap={3} margin={"10px auto"} >
                            <button className={furnished.includes("Semifurnished") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleFurnished(e.target.value)} value={"Semifurnished"} > {furnished.includes("Semifurnished") ? <BsCheckLg /> : <BiPlus />} Semifurnished </button>
                            <button className={furnished.includes("Unfurnished") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleFurnished(e.target.value)} value={"Unfurnished"} > {furnished.includes("Unfurnished") ? <BsCheckLg /> : <BiPlus />} Unfurnished </button>
                            <button className={furnished.includes("Furnished") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleFurnished(e.target.value)} value={"Furnished"} > {furnished.includes("Furnished") ? <BsCheckLg /> : <BiPlus />} Furnished </button>
                        </Box>
                    </Box>
                </Box>
                {/* =========================== product List ====================== */}
                <Box flex={6} w={"100%"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} textAlign={"left"} display={"grid"} gridTemplateRows={"auto"} padding={3} gridTemplateColumns={"repeat(3,1fr)"} gap={4}  >
                    {data.map((e, index) => { 
                        const colorstate = wishlist && Array.isArray(wishlist) && wishlist.includes(`${e._id}`);   
                        return ( 
                            <Box className={style.property_box} key={index}> 
                                <Box position={"relative"}>
                                    <Text cursor={"pointer"} onClick={() => handleAddToWishlist(e._id)} position={"absolute"} top={1} right={2} color={colorstate ? "green.500" : "red.500"} > <BsFillBookmarkHeartFill size={"20px"} /> </Text>
                                    <Image src="https://mediacdn.99acres.com/582/0/11640476F-1383637447-Amrit_House_-_Sant_Nagr_Delhi.jpeg" w={"100%"} alt="property image" />
                                </Box> 
                                <Heading className={style.head_line} size={"sm"} textAlign={"left"} color={"rgb(37, 37, 37)"} >  {e.address.houseNumber && e.address.houseNumber} {e.address.apartmentName && e.address.apartmentName} {e.address.locality && e.address.locality} </Heading>
                                <Text> Price: {e.countryCurrency}{e.price?.toLocaleString("en-IN")} </Text>
                            </Box>
                        )
                    })}
                </Box>
            </Flex>
        </Box>
    )
}


export default ResidentialRent;
