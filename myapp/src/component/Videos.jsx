import React, { useState } from 'react';
import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';

const Videos = () => {
  const videosArr = [
    'https://videos.pexels.com/video-files/20576968/20576968-hd_1920_1080_25fps.mp4',
    'https://videos.pexels.com/video-files/20497210/20497210-hd_1920_1080_50fps.mp4',
    'https://videos.pexels.com/video-files/16666848/16666848-hd_1920_1080_24fps.mp4',
    'https://videos.pexels.com/video-files/19247660/19247660-uhd_3840_2160_60fps.mp4',
    'https://videos.pexels.com/video-files/15377024/15377024-uhd_3840_2160_25fps.mp4',
    'https://videos.pexels.com/video-files/20433217/20433217-uhd_3840_2160_30fps.mp4'
  ];

  const [videosrc, setVideosrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video src={videosrc} style={{ width: '100%' }} controls controlsList='nodownload'></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Videos</Heading>
          <Text>This is a sample video for testing and demo</Text>
        </VStack>
      </VStack>
      <VStack w={['full', 'xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>
        {videosArr.map((item, index) => (
          <Button key={index} variant={'ghost'} colorScheme='purple' onClick={() => setVideosrc(item)}>
            Lecture {index}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
