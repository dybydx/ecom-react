import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Grid,
  VStack,
  HStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { FaStar, FaBars, FaTimes, FaShoppingCart, FaLeaf, FaSun, FaWater, FaCreditCard } from 'react-icons/fa';

const reviews = [
  { id: 1, name: 'John Doe', rating: 5, text: 'Absolutely love it!', photo: 'https://picsum.photos/seed/review1/50/50' },
  { id: 2, name: 'Jane Smith', rating: 4, text: 'Great quality, fast shipping.', photo: 'https://picsum.photos/seed/review2/50/50' },
  { id: 3, name: 'Mike Johnson', rating: 5, text: 'Excellent customer service!', photo: 'https://picsum.photos/seed/review3/50/50' },
  { id: 4, name: 'Sarah Brown', rating: 4, text: 'Very satisfied with my purchase.', photo: 'https://picsum.photos/seed/review4/50/50' },
];

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [displayBanner, setDisplayBanner] = useState(true);
  const toast = useToast();

  const bgGradient = useColorModeValue(
    'linear(to-r, teal.300, blue.500)',
    'linear(to-r, teal.500, blue.600)'
  );
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", // Replace with your actual Razorpay key
      amount: 50000, // Amount in paise (e.g., 50000 paise = ₹500)
      currency: "INR",
      name: "EcoShop",
      description: "Purchase from EcoShop",
      image: "https://your-company-logo.png", // Replace with your company logo
      handler: function (response) {
        toast({
          title: "Payment Successful",
          description: `Payment ID: ${response.razorpay_payment_id}`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#319795"
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <Box>
      {/* Header */}
      <Flex
        as="header"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bgGradient={bgGradient}
        color="white"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" fontWeight="bold">
            EcoShop
          </Heading>
        </Flex>

        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            onClick={onOpen}
            icon={<FaBars />}
            variant="outline"
            colorScheme="whiteAlpha"
            aria-label="Open menu"
          />
        </Box>

        <Box
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
          <Button variant="ghost" colorScheme="whiteAlpha" mr={3}>Home</Button>
          <Button variant="ghost" colorScheme="whiteAlpha" mr={3}>Products</Button>
          <Button variant="ghost" colorScheme="whiteAlpha" mr={3}>About</Button>
          <Button variant="ghost" colorScheme="whiteAlpha">Contact</Button>
        </Box>

        <Box>
          <IconButton
            icon={<FaShoppingCart />}
            variant="ghost"
            colorScheme="whiteAlpha"
            aria-label="Shopping cart"
          />
        </Box>
      </Flex>

      {/* Mobile Menu */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgGradient={bgGradient} color="white">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <Button w="100%" variant="ghost" colorScheme="whiteAlpha" onClick={onClose}>Home</Button>
              <Button w="100%" variant="ghost" colorScheme="whiteAlpha" onClick={onClose}>Products</Button>
              <Button w="100%" variant="ghost" colorScheme="whiteAlpha" onClick={onClose}>About</Button>
              <Button w="100%" variant="ghost" colorScheme="whiteAlpha" onClick={onClose}>Contact</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <Box as="main" p={4} bg="gray.50">
        {/* Banner */}
        {displayBanner && (
          <Flex
            bg="green.400"
            color="white"
            p={4}
            align="center"
            justify="space-between"
            mb={4}
            borderRadius="md"
            boxShadow="md"
          >
            <HStack spacing={2}>
              <FaLeaf />
              <Text fontWeight="bold">Eco-Friendly Sale: 20% off all sustainable products!</Text>
            </HStack>
            <IconButton
              icon={<FaTimes />}
              size="sm"
              variant="ghost"
              onClick={() => setDisplayBanner(false)}
              aria-label="Close banner"
            />
          </Flex>
        )}

        {/* Hero Section */}
        <Box
          borderRadius="lg"
          overflow="hidden"
          mb={8}
          boxShadow="xl"
          position="relative"
        >
          <Image src="https://picsum.photos/1200/400" alt="Hero Image" w="100%" h="400px" objectFit="cover" />
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="rgba(0,0,0,0.4)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <VStack spacing={4} textAlign="center">
              <Heading as="h2" size="2xl" color="white">
                Welcome to EcoShop
              </Heading>
              <Text fontSize="xl" color="white">
                Discover eco-friendly products for a sustainable lifestyle
              </Text>
              <Button colorScheme="green" size="lg" leftIcon={<FaLeaf />}>
                Shop Green
              </Button>
            </VStack>
          </Box>
        </Box>

        {/* Featured Products */}
        <Box mb={8}>
          <Heading as="h3" size="xl" mb={6} textAlign="center" color="teal.600">
            Featured Products
          </Heading>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
            {[
              { name: 'Eco Water Bottle', icon: FaWater, color: 'blue' },
              { name: 'Solar Charger', icon: FaSun, color: 'orange' },
              { name: 'Bamboo Cutlery Set', icon: FaLeaf, color: 'green' }
            ].map((product, i) => (
              <Box key={i} bg={cardBg} borderRadius="lg" overflow="hidden" boxShadow="md" transition="all 0.3s" _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}>
                <Box bg={`${product.color}.100`} p={6} display="flex" justifyContent="center" alignItems="center">
                  <product.icon size="80px" color={`${product.color}.500`} />
                </Box>
                <Box p={6}>
                  <Heading as="h4" size="md" mb={2} color={`${product.color}.500`}>
                    {product.name}
                  </Heading>
                  <Text mb={4} color={textColor}>Sustainable and eco-friendly solution for everyday use.</Text>
                  <Button colorScheme={product.color} leftIcon={<FaShoppingCart />} w="100%">Add to Cart</Button>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* Razorpay Payment Button */}
        <Box textAlign="center" my={8}>
          <Button
            onClick={handlePayment}
            colorScheme="teal"
            size="lg"
            leftIcon={<FaCreditCard />}
          >
            Make a Payment
          </Button>
        </Box>

        {/* Customer Reviews */}
        <Box mb={8}>
          <Heading as="h3" size="xl" mb={6} textAlign="center" color="teal.600">
            Customer Reviews
          </Heading>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
            {reviews.map((review) => (
              <Box key={review.id} bg={cardBg} borderRadius="lg" p={6} boxShadow="md">
                <HStack spacing={4} mb={4}>
                  <Image
                    src={review.photo}
                    alt={review.name}
                    borderRadius="full"
                    boxSize="60px"
                  />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold" fontSize="lg" color="teal.500">{review.name}</Text>
                    <HStack>
                      {Array(5)
                        .fill('')
                        .map((_, i) => (
                          <FaStar
                            key={i}
                            color={i < review.rating ? 'gold' : 'gray.300'}
                          />
                        ))}
                    </HStack>
                  </VStack>
                </HStack>
                <Text color={textColor} fontStyle="italic">{review.text}</Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Footer */}
      <Box as="footer" bgGradient={bgGradient} color="white" p={8}>
        <Flex justify="space-between" wrap="wrap">
          <VStack align="start" mb={{ base: 6, md: 0 }}>
            <Heading as="h4" size="md" mb={2}>
              EcoShop
            </Heading>
            <Text>Sustainable living, one product at a time.</Text>
            <Text>© 2024 EcoShop. All rights reserved.</Text>
          </VStack>
          <HStack spacing={8} align="start">
            <VStack align="start">
              <Heading as="h5" size="sm" mb={2}>Quick Links</Heading>
              <Button variant="link" color="white">About Us</Button>
              <Button variant="link" color="white">Our Products</Button>
              <Button variant="link" color="white">Sustainability</Button>
            </VStack>
            <VStack align="start">
              <Heading as="h5" size="sm" mb={2}>Customer Service</Heading>
              <Button variant="link" color="white">Contact Us</Button>
              <Button variant="link" color="white">FAQs</Button>
              <Button variant="link" color="white">Shipping & Returns</Button>
            </VStack>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default App;