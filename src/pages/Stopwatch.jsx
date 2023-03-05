import { Box, Button, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import { green } from "@mui/material/colors";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);



  

  return (
    <Card sx={{ display: "flex", width: 200}}>
      <Box sx={{ display: "flex", flexDirection: "column", height: 210, width: 200 }}>
        <CardContent className='card_content'
          sx={{
            flex: "1 0 auto",
            backgroundColor: green[800],
            color: "black",
            maxWidth:200,
            maxHeight: 70
          }}
        >
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
        </CardContent>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: 'center'
          
          }}
        >

          {!timerOn && time === 0 && (<Button
            onClick={()=>setTimerOn(true)}
            variant="contained"
            color="success"
            sx={{ m: 2, p: 1 }}
          >
            Start <PlayCircleFilledIcon />
          </Button>)}

          {timerOn && (<Button
            onClick={()=>setTimerOn(false)}
            variant="outlined"
            color="error"
            sx={{ m: 2 }}
          >
            Stop <PauseIcon />
          </Button>)}

          {!timerOn && time !== 0 && (<Button
            onClick={()=>setTimerOn(true)}
            variant="contained"
            color="success"
            sx={{ p: 1,
            m:2 }}
          >
            Resume <PlayArrowIcon />
          </Button>)}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
           
          }}
        >
          {!timerOn && time > 0 && (<Button onClick={()=>setTime(0)} sx={{ mb: 2}}>
            Reset <RestartAltIcon />
          </Button>)}
        </Box>
      </Box>
    </Card>
  );
}
