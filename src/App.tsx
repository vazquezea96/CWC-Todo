import React, { useEffect } from "react";
import { Box, Button, Flex, Text, Input } from "@chakra-ui/react";
import axios from "axios";

type NameObject = {
  name: string;
};

function App() {
  const [names, setNames] = React.useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/names").then((response) => {
      setNames(response.data);
    });
  }, []);

  const handleClick = async () => {
    const response = await axios.post("http://localhost:3000/name", {
      name: "John Cena",
    });
    console.log("RESPONSE", response);
  };
  return (
    <>
    <Flex>
      <Input placeholder="Type in your name..." />
    </Flex>
      <Button colorScheme="Blue" onClick={handleClick}>
        Click Here...
      </Button>
      {names.map((name: NameObject) => {
        return <Text>{name?.name}</Text>;
      })};
    </>
  );
}

export default App;
