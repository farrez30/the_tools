import { Box, Button, Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import IndeterminateCheckBoxRoundedIcon from "@mui/icons-material/IndeterminateCheckBoxRounded";
import { green } from "@mui/material/colors";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  const handleDecrement = () => (count > 0 ? setCount(count - 1) : "");

  const handleReset = () => setCount(count * 0);

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent
          sx={{
            flex: "1 0 auto",
            backgroundColor: green[900],
            fontFamily: "unset",
            color: "black",
          }}
        >
          <h1>{count}</h1>
        </CardContent>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pr: 5,
            pl: 5,
            pb: 4,
            pt: 1,
            mt: 3,
          }}
        >
          <Button
            onClick={handleIncrement}
            variant="contained"
            color="success"
            sx={{ mr: 2 }}
          >
            Increase <AddBoxRoundedIcon />
          </Button>
          <Button
            onClick={handleDecrement}
            variant="outlined"
            color="error"
            sx={{ ml: 2 }}
          >
            Decrease <IndeterminateCheckBoxRoundedIcon />
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 0,
            pb: 2,
            pt: 0,
          }}
        >
          <Button onClick={handleReset} sx={{ mb: 2, mt: 0 }}>
            Reset
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
