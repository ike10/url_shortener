import React, { useState } from "react";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";


export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    console.log('button fired')

    e.preventDefault();
    try{
      setIsLoading(true)
      const response = await fetch("/api/create-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();

    if (data.success) {
      setShortUrl(data.shortUrl);
      setUrl("");
    }
      setIsLoading(false)
    }catch(err){
      setShortUrl('error shortening link')
      setError('errror shortening url')
      setIsLoading(false)
      console.log(err)
    }
    
  };

  return (
    <VStack>
      <Heading my={4}>URL Shortener</Heading>

      {/* {shortUrl && (
        <Text fontSize="xl" fontWeight="bold">
          Short URL: {shortUrl}
        </Text>
      )} */}

      {shortUrl && (
        <Text mt={2}>
          Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </Text>
      )}
      {error && (
        <Text color="red" mt={2}>
          Error: {error}
        </Text>
      )}

      {/* <FormControl onSubmit={handleSubmit}>
        <FormLabel>Enter URL to shorten:</FormLabel> */}
        <Input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          mb={2}
        />

        <Button  onClick={handleSubmit} colorScheme="teal" size="md">
          
          {
            isLoading ? <Text>Shortening...</Text> : <Text>Shorten</Text>
          }
        </Button>
      {/* </FormControl> */}
    </VStack>
  );
}

