import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight={"95vh"}>
      <Box>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(58,18,175,1) 8%, rgba(0,212,255,1) 100%)",
          zIndex: 10,
          height: "300px",
        }}
        
      />
      <ChannelCard marginTop='-110px' channelDetail={channelDetail}/>
    </Box>
    <Box display={"flex"} p={3}>
<Box sx={{mr:{sm:'100px'}}}/>
  <Videos videos={videos}/>

    </Box>
    
    </Box>

  );
};

export default ChannelDetail;
