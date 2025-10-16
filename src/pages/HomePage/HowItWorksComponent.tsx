import { Box, Button, Flex, Grid, Group, Title, Transition } from '@mantine/core';
import { useInViewport } from '@mantine/hooks';
import { IconMail } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export interface HowItWorksComponentProps {
  targetScrollRef: React.Ref<HTMLDivElement>;
  onSendEmailClick: () => void;
}
export function HowItWorksComponent({
  targetScrollRef,
  onSendEmailClick,
}: HowItWorksComponentProps) {
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
      ref={targetScrollRef}
      bg="#efefefff"
      mih="100vh"
      miw={'100%'}
      justify="center"
      align="center"
      direction="column"
      p={20}
    >
      <Title ta="center" mt={70}>
        How It Works
      </Title>
      <Grid maw={1200} flex={1} w={'100%'} gutter={'xl'} mt={10} ref={ref}>
        <Grid.Col span={12}>
          <Box
            ref={targetScrollRef}
            style={{
              padding: 0,
              margin: 'auto',
              height: '600px',
              maxHeight: '600px',
              width: '100%',
              border: '0px solid #000',
            }}
          >
            <iframe
              src="https://demo.arcade.software/pim30AMwoj4kJOMcAym8?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
              title="AI Model Match"
              allow="clipboard-write"
              allowFullScreen
              style={{
                width: '100%',
                height: '100%',
                border: '0px solid #ccc',
              }}
            ></iframe>
          </Box>
        </Grid.Col>
      </Grid>
      <Group gap={40} mt={50} mb={30} justify="center">
        <Transition
          mounted={isComponentVisible}
          transition="fade"
          duration={800}
          enterDelay={1400}
          timingFunction="ease"
        >
          {(styles) => (
            <Button
              style={styles}
              variant="filled"
              color="brand"
              h={80}
              w={220}
              fw={300}
              size="lg"
              radius={'80'}
              rightSection={<IconMail color="#FFFFFF" size={36} stroke={1} />}
              onClick={onSendEmailClick}
            >
              Contact Us
            </Button>
          )}
        </Transition>
      </Group>
    </Flex>
  );
}
