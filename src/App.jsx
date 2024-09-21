import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  SimpleGrid,
  Heading,
  VStack,
  Link,
  Divider,
  IconButton,
  HStack,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaStar, FaBars, FaTimes } from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    photo: "https://via.placeholder.com/150",
    review: "Amazing quality! Really satisfied with the purchase.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    photo: "https://via.placeholder.com/150",
    review: "The product is decent but the shipping took too long.",
    rating: 3,
  },
  {
    name: "Raj Patel",
    photo: "https://via.placeholder.com/150",
    review: "Great customer service and good value for money!",
    rating: 4,
  },
  {
    name: "Priya Sharma",
    photo: "https://via.placeholder.com/150",
    review: "Loved it! Will definitely shop again.",
    rating: 5,
  },
];

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      {/* Navbar */}
      <Box bg="gray.100" px={{ base: 4, md: 10 }} py={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="lg">ShopLogo</Heading>
          
          {/* Hamburger menu for mobile */}
          <IconButton
            display={{ base: "block", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            icon={isOpen ? <FaTimes /> : <FaBars />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />

          {/* Desktop Links */}
          <HStack
            spacing={6}
            display={{ base: "none", md: "flex" }}
          >
            <Link href="#">Home</Link>
            <Link href="#">Shop</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </HStack>
        </Flex>

        {/* Mobile Menu */}
        {isOpen && (
          <Box pb={4} display={{ base: "block", md: "none" }}>
            <Stack as="nav" spacing={4}>
              <Link href="#">Home</Link>
              <Link href="#">Shop</Link>
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
            </Stack>
          </Box>
        )}
      </Box>

      {/* Hero Section */}
      <Flex
        bg="gray.200"
        align="center"
        justify="center"
        minHeight="70vh"
        direction={{ base: "column", md: "row" }}
        px={10}
        py={10}
        textAlign={{ base: "center", md: "left" }}
      >
        <VStack spacing={4} align="start" flex="1" maxW="500px">
          <Heading size="2xl" lineHeight="shorter">
            Discover the Latest Trends
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Find your style with our exclusive collection of clothing and
            accessories.
          </Text>
          <Button colorScheme="teal" size="lg">
            Shop Now
          </Button>
        </VStack>
        <Image
          src="https://via.placeholder.com/500"
          alt="Fashion Banner"
          boxSize={{ base: "300px", md: "400px", lg: "500px" }}
          objectFit="cover"
          mt={{ base: 8, md: 0 }}
        />
      </Flex>

      {/* Product Categories */}
      <Box bg="gray.50" py={10} px={{ base: 4, md: 10 }}>
        <Heading textAlign="center" mb={8}>
          Shop by Category
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
          {["Clothing", "Shoes", "Accessories", "Bags"].map((category) => (
            <Box key={category} textAlign="center">
              <Image
                src={`https://via.placeholder.com/200?text=${category}`}
                alt={category}
                borderRadius="md"
                mb={4}
              />
              <Text fontSize="lg" fontWeight="bold">
                {category}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Featured Products */}
      <Box py={10} px={{ base: 4, md: 10 }}>
        <Heading textAlign="center" mb={8}>
          Featured Products
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
          {[1, 2, 3, 4].map((product) => (
            <Box key={product} p={4} borderWidth="1px" borderRadius="md">
              <Image
                src="https://via.placeholder.com/200"
                alt={`Product ${product}`}
                mb={4}
                borderRadius="md"
              />
              <Text fontWeight="bold">Product {product}</Text>
              <Text color="gray.500">Rs. 999</Text>
              <Button mt={4} colorScheme="teal" width="full">
                Add to Cart
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Reviews Section */}
      <Box py={10} px={{ base: 4, md: 10 }} bg="gray.50">
        <Heading textAlign="center" mb={8}>
          Customer Reviews
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {reviews.map((review, index) => (
            <Box
              key={index}
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              bg="white"
              shadow="md"
              textAlign="center"
            >
              <Image
                src={review.photo}
                alt={review.name}
                borderRadius="full"
                boxSize="100px"
                mx="auto"
                mb={4}
              />
              <Text fontWeight="bold" fontSize="lg" mb={2}>
                {review.name}
              </Text>
              <Flex justify="center" mb={2}>
                {Array(review.rating)
                  .fill("")
                  .map((_, i) => (
                    <FaStar key={i} color="gold" />
                  ))}
              </Flex>
              <Text color="gray.600">{review.review}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10} px={{ base: 4, md: 10 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <VStack align="start">
            <Heading size="md">ShopLogo</Heading>
            <Text>Follow us on social media for the latest updates.</Text>
            <HStack spacing={4}>
              <IconButton
                as="a"
                href="#"
                icon={<FaFacebook />}
                aria-label="Facebook"
                colorScheme="facebook"
              />
              <IconButton
                as="a"
                href="#"
                icon={<FaInstagram />}
                aria-label="Instagram"
                colorScheme="pink"
              />
              <IconButton
                as="a"
                href="#"
                icon={<FaTwitter />}
                aria-label="Twitter"
                colorScheme="twitter"
              />
            </HStack>
          </VStack>
          <VStack align="start">
            <Heading size="sm">Customer Service</Heading>
            <Link href="#">Help Center</Link>
            <Link href="#">Returns & Refunds</Link>
            <Link href="#">Track Orders</Link>
          </VStack>
          <VStack align="start">
            <Heading size="sm">Contact Us</Heading>
            <Text>Email: support@shoplogo.com</Text>
            <Text>Phone: +91 9876543210</Text>
          </VStack>
        </SimpleGrid>
        <Divider my={4} borderColor="gray.600" />
        <Text textAlign="center">© 2024 ShopLogo. All Rights Reserved.</Text>
      </Box>
    </Box>
  );
};

export default HomePage;
