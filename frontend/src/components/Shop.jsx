"use client";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

export default function Shop() {
  const products = [
    {
      image:
        "https://www.decalsextremeonline.com/cdn-cgi/image/quality%3D100/assets/images/texasamhelmet.jpg",
      brand: "A&M",
      title: "Aggie Helmet Sticker",
      price: "10 TamuTokens",
    },
    {
      image:
        "https://images.footballfanatics.com/texas-a-and-m-aggies/texas-a-and-m-aggies-state-shape-keychain_pi2750000_ff_2750131_full.jpg?_hv=2&w=340",
      brand: "A&M",
      title: "Aggie Keychain",
      price: "20 TamuTokens",
    },
    {
      image:
        "https://cdn11.bigcommerce.com/s-6gssxq8qcf/images/stencil/1280x1280/products/11113/24434/W101738__70930.1666983881.jpg?c=1",
      brand: "A&M",
      title: "A&M Maroon Coffee Mug",
      price: "30 TamuTokens",
    },
    {
      image:
        "https://images.footballfanatics.com/texas-a-and-m-aggies/mens-new-era-maroon-texas-a-and-m-aggies-two-tone-vintage-wave-9fifty-snapback-hat_pi4601000_altimages_ff_4601176-bc87cb86fd2dba41da7balt3_full.jpg?_hv=2&w=900",
      brand: "A&M",
      title: "Classic Aggie Baseball Cap",
      price: "40 TamuTokens",
    },
    {
      image:
        "https://cdn.mall.adeptmind.ai/https%3A%2F%2Fimages.footballfanatics.com%2Ftexas-a-and-m-aggies%2Fmens-homefield-maroon-texas-a-and-m-aggies-vintage-cotton-t-shirt_pi4406000_altimages_ff_4406410-1acd271731e8fc82f50dalt1_full.jpg%3F_hv%3D2_medium.webp",
      brand: "A&M",
      title: "Vintage A&M T-shirt",
      price: "50 TamuTokens",
    },
    {
      image:
        "https://images.footballfanatics.com/texas-a-and-m-aggies/texas-a-and-m-aggies-infant-socks_ss10_p-101253654+u-uoushxpoyh6kstpynlah+v-kw5zy0fqyzmsappx0nx1.jpg?_hv=2&w=600",
      brand: "A&M",
      title: "12th Man Socks",
      price: "60 TamuTokens",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0042/4958/3662/products/PhotoJun30_114949AM_2048x.jpg?v=1664488549",
      brand: "A&M",
      title: "Kyle Field Poster",
      price: "70 TamuTokens",
    },
    {
      image:
        "https://www.tshaonline.org/images/handbook/entries/TT/texas-am-1876.jpg",
      brand: "A&M",
      title: "History of A&M Book",
      price: "80 TamuTokens",
    },
    {
      image:
        "https://www.aggiesjersey.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/t/e/texas-a_m-aggies-12-premier-maroon-strategy-jersey.jpg",
      brand: "A&M",
      title: "Football Jersey #12",
      price: "100 TamuTokens",
    },
    {
      image:
        "https://images.footballfanatics.com/texas-a-and-m-aggies/mojo-texas-a-and-m-aggies-ultimate-fan-backpack_pi5034000_ff_5034222-05674207008e21f261d7_full.jpg?_hv=2&w=600",
      brand: "A&M",
      title: "Aggie Travel Backpack",
      price: "120 TamuTokens",
    },
    {
      image:
        "https://images.footballfanatics.com/texas-a-and-m-aggies/texas-a-and-m-aggies-50-x-60-stripe-flannel-fleece-blanket_pi5103000_ff_5103800-bae20e607822569c77b8_full.jpg?_hv=2&w=340",
      brand: "A&M",
      title: "Aggie Maroon Blanket",
      price: "140 TamuTokens",
    },
    {
      image:
        "https://images.footballfanatics.com/texas-a-and-m-aggies/mens-texas-a-and-m-aggies-cufflinks_pi2532000_ff_2532680_full.jpg?_hv=2&w=600",
      brand: "A&M",
      title: "A&M Cufflinks",
      price: "160 TamuTokens",
    },
    {
      image:
        "https://images.footballfanatics.com/texas-a-and-m-aggies/maroon-texas-a-and-m-aggies-competitor-two-tone-anochrome-watch_pi3938000_ff_3938729-b8c78c0f4c3cd49d32ee_full.jpg?_hv=2&w=340",
      brand: "A&M",
      title: "Aggie Wrist Watch",
      price: "180 TamuTokens",
    },
    {
      image:
        "https://i.ebayimg.com/thumbs/images/g/nDQAAOSwWI5kkdMh/s-l640.jpg",
      brand: "A&M",
      title: "Signed Football",
      price: "200 TamuTokens",
    },
    {
      image:
        "https://cfcdn.zulily.com/images/cache/product/452x1000/227331/zu45556726_main_tm1487179878.jpg",
      brand: "A&M",
      title: "Aggie Cowboy Boots",
      price: "250 TamuTokens",
    },
    {
      image:
        "https://m.collegebabyshop.com/DSN/wwwcollegebabyshopcom/Commerce/ProductImages/lg1_028078.jpg",
      brand: "A&M",
      title: "A&M Letterman Jacket",
      price: "300 TamuTokens",
    },
    {
      image:
        "https://www.tamu.edu/traditions/images/aggie-culture/aggie-ring/dyk.jpg",
      brand: "A&M",
      title: "Aggie Ring Replica",
      price: "350 TamuTokens",
    },
    {
      image:
        "https://media.sweetwater.com/api/i/q-82__ha-d5478ffe8fde9248__hmac-ab70c75bfa67eca4bd98907b54cd0444da206ed9/images/items/750/RG5121BCF-large.jpg",
      brand: "A&M",
      title: "Aggie Guitar",
      price: "400 TamuTokens",
    },
    {
      image:
        "https://www.mlahart.com/cdn/shop/products/93233.s3.590_590x.jpg?v=1658270670",
      brand: "A&M",
      title: "Handcrafted Aggie Desk",
      price: "600 TamuTokens",
    },
    {
      image: "https://reveille.tamu.edu/assets/img/210205_NewRev_JKE_3.jpg",
      brand: "A&M",
      title: "Reveille",
      price: "Priceless :)",
    },
  ];

  return (
    <Center py={12}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10}>
        {products.map((product, index) => (
          <Box
            key={index}
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${product.image})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={product.image}
                alt={product.title}
                textAlign="center"
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
                textAlign="center"
              >
                {product.brand}
              </Text>
              <Heading
                fontSize={"2xl"}
                fontFamily={"body"}
                fontWeight={500}
                textAlign="center"
              >
                {product.title}
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={800} fontSize={"xl"}>
                  {product.price}
                </Text>
                <Text textDecoration={"line-through"} color={"gray.600"}>
                  {product.discountPrice}
                </Text>
              </Stack>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Center>
  );
}