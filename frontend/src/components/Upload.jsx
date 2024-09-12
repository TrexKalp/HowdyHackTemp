import {
  Button,
  Box,
  Text,
  VStack,
  HStack,
  Image,
  useToast,
  Avatar,
  Tag,
  TagLabel,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Tesseract from "tesseract.js";
import { InfoIcon } from "@chakra-ui/icons";

const gradientBoxStyles = {
  bgGradient: "linear(to-r, red.400, red.500)",

  borderRadius: "md",
  p: 6, // Increased padding for a larger box
  boxShadow: "2xl",
  display: "flex", // Make it a flex container
  flexDirection: "column", // Stack children vertically
  alignItems: "center", // Center children horizontally
  justifyContent: "center", // Center children vertically
};

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [fullRecognizedText, setFullRecognizedText] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [uploadedImages, setUploadedImages] = useState(() => {
    const savedImages = localStorage.getItem("uploadedImages");
    return savedImages ? JSON.parse(savedImages) : [];
  });
  const [points, setPoints] = useState(() => {
    const savedPoints = localStorage.getItem("points");
    return savedPoints ? JSON.parse(savedPoints) : 0;
  });

  useEffect(() => {
    // Store the points in local storage whenever they change
    localStorage.setItem("points", JSON.stringify(points));
  }, [points]);

  const imageBoxStyles = {
    width: "150px", // Increased size
    height: "150px",
    bgSize: "cover",
    bgPosition: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // subtle shadow
    border: "1px solid #E2E8F0", // light border
    transition: "transform 0.3s", // for hover effect
    "&:hover": {
      transform: "scale(1.05)", // zoom-in effect on hover
    },
  };

  const toast = useToast();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setUploadedImages((prevImages) => {
          const newImages = [...prevImages, reader.result];
          localStorage.setItem("uploadedImages", JSON.stringify(newImages));
          return newImages;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const extractTotalPrice = (text) => {
    // This pattern now looks for both "subtotal" and "sub-total"
    const pattern = /sub(-)?total[^0-9]*?(\d+\.\d{2})/i;
    const match = text.match(pattern);
    return match ? parseFloat(match[2]) : null;
  };

  const validateReceipt = (text) => {
    // This pattern now looks for both "Receipt #" or "Order #"
    const numberPattern = /(?:Order|Receipt)[ \t]*(?:Number|#)?:[ \s]*([0-9]+)/i;
    // TODO: Check if store is a valid store

    let isValidStore = false;
    const validStores = [
      "Sweet Eugene's",
      "The Beef and Reef Food Truck",
      "1541 Pastries and Coffee",
      "Sabi Boutique",
      "Stampede College Station",
      "Maroon & White Barbershop",
      "Stella Southern Cafe",
      "Raging Bull Street Taco's",
      "Kolache Rolf's",
      "E11even Bar and Grill",
      "Aggieland Scuba",
      "A Wild Hair Salon & Co",
      "What's The Buzz Specialty Coffee",
      "Brazos Cedar Works",
      "BonAppeTea",
      "The Village Cafe",
      "Gomez Shoe Repair",
      "Burdett & Son Outdoor Adventure Shop",
      "M&M Apparel",
      "Bea's Alterations",
      "BCS Asian Market",
      "iPhở",
      "University Flowers",
      "Brazos Valley Computers",
      "The String & Horn Shop",
      "Zeitman's Grocery Store",
      "Thorn Music Center"
    ];

    for (let i = 0; i < validStores.length; i++) {
      if (text.contains(validStores[i])) {
        isValidStore = true;
        break;
      }
    }

    const match = text.match(numberPattern);

    return match && isValidStore;
  };

  const [recognizedTexts, setRecognizedTexts] = useState(() => {
    const savedTexts = localStorage.getItem("recognizedTexts");
    return savedTexts ? JSON.parse(savedTexts) : [];
  });

  const handleUpload = async () => {
    if (selectedImage) {
      try {
        const result = await Tesseract.recognize(selectedImage, "eng");

        if (!validateReceipt(result.data.text)) {
          toast({
            title: "Invalid Receipt",
            description: "This receipt is not valid. Please note that only receipts from small businesses are accepted.",
            status: "warning",
            duration: 2000,
            isClosable: true,
          });
          return;
        }
        // Check if the text has been recognized before
        if (recognizedTexts.includes(result.data.text)) {
          toast({
            title: "Duplicate Receipt",
            description: "This receipt has already been recognized.",
            status: "warning",
            duration: 2000,
            isClosable: true,
          });
          return;
        }

        setFullRecognizedText(result.data.text);
        setRecognizedTexts((prevTexts) => [...prevTexts, result.data.text]);

        const newTotalPrice = extractTotalPrice(result.data.text);
        if (newTotalPrice !== null) {
          setTotalPrice((prevPrice) => prevPrice + newTotalPrice);
          setPoints((prevPoints) => prevPoints + Math.floor(newTotalPrice));
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Error recognizing text from the image.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("recognizedTexts", JSON.stringify(recognizedTexts));
  }, [recognizedTexts]);

  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        <Box
          textAlign="center"
          py={10}
          px={6}
          width="1000px"
          justifyContent="center"
        >
          <InfoIcon boxSize={"50px"} color={"blue.500"} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            What Is This Page For?
          </Heading>
          <Text color={"gray.500"}>
            Using highly-trained optical character recognition (OCR) technology,
            upload your receipts here to extract how much you paid at your local
            small businesses! From there, you gain points that you can use to
            redeem for Aggie gear!
          </Text>
        </Box>
      </Flex>
      <VStack spacing={2} mt={8}>
        <HStack spacing={4} mt={8} overflowX="auto">
          {uploadedImages.map((imageSrc, idx) => (
            <Box
              key={idx}
              width="225px"
              height="225px"
              bgSize="cover"
              bgPosition="center"
            >
              <Image src={imageSrc} boxSize="325px" alt="Uploaded preview" />
            </Box>
          ))}
        </HStack>

        {/* Gradient box around the upload */}
        <Box {...gradientBoxStyles} height="150px" width="300px">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            hidden
            id="file-upload"
          />
          <label htmlFor="file-upload">
            <Button as="span" mb={4}>
              Choose an image
            </Button>
          </label>
          <Button onClick={handleUpload} colorScheme="blue">
            Scan Receipt
          </Button>
        </Box>
      </VStack>
    </>
  );
};

export default Upload;
