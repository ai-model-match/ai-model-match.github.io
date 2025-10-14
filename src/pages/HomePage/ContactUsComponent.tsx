import { Box, Flex, Stack, Title, Transition } from '@mantine/core';
import { useInViewport } from '@mantine/hooks';
import { useEffect, useState } from 'react';

export interface ContactUsComponentProps {
  targetScrollRef: React.Ref<HTMLDivElement>;
}
export function ContactUsComponent({ targetScrollRef }: ContactUsComponentProps) {
  const { ref, inViewport } = useInViewport();
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(false);

  // Effects
  useEffect(() => {
    if (inViewport) {
      setIsComponentVisible(true);
    }
  }, [inViewport]);
  return (
    <Flex
      ref={ref}
      bg="#efefefff"
      mih="100vh"
      miw={'100%'}
      justify={'center'}
      align={'flex-start'}
      p={0}
      style={{
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
      }}
    >
      <Box ref={targetScrollRef} w={'100%'} mih={'100vh'}>
        <Title ta="center" mt={150} c="brand">
          Contact us
        </Title>
        <Stack
          align="center"
          p={0}
          maw={{ xs: '100%', sm: 800 }}
          mt={{ xs: 20, sm: 50 }}
          mx={'auto'}
        >
          <Transition
            mounted={isComponentVisible}
            transition="slide-up"
            duration={800}
            timingFunction="ease"
          >
            {(styles) => (
              <>
                <iframe
                  style={{
                    ...styles,
                    border: 'none',
                    maxWidth: '100%',
                    minWidth: '320px',
                  }}
                  src="https://tally.so/embed/wQ6VyA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  width="100%"
                  height="320"
                  title="AIMM - Contact Form"
                ></iframe>
              </>
            )}
          </Transition>
        </Stack>
      </Box>
    </Flex>
  );
}
