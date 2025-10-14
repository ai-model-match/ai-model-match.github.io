import { Box, Button, Flex, Group, Stack, Text, Transition } from '@mantine/core';
import { useInViewport } from '@mantine/hooks';
import { assets } from '@styles/assets';
import { IconArrowDown, IconBrandDocker } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export interface LandingComponentProps {
  onLearnMoreClick: () => void;
  onGetStartedClick: () => void;
}

export function LandingComponent({
  onLearnMoreClick,
  onGetStartedClick,
}: LandingComponentProps) {
  const { ref, inViewport } = useInViewport();
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(false);

  // Effects
  useEffect(() => {
    if (inViewport) {
      setIsComponentVisible(true);
    }
  }, [inViewport]);

  const Logo = assets[`../assets/icon.svg`];
  return (
    <Flex
      ref={ref}
      bg="var(--aimm-gradient-bg)"
      mih="100vh"
      miw={'100%'}
      justify={'center'}
      align={'flex-start'}
      p={0}
      style={{
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
      }}
    >
      <Box
        w={'100%'}
        mih={'100vh'}
        style={{
          backgroundImage: "url('pattern.svg')",
          backgroundRepeat: 'repeat',
          backgroundPosition: '0 0',
        }}
      >
        <Stack
          align="center"
          p={50}
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
                <Logo
                  style={{
                    ...styles,
                    width: 160,
                    height: 'auto',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                />
                <Text
                  visibleFrom="sm"
                  style={{ ...styles, letterSpacing: '-1.5px', marginTop: 30 }}
                  size={'72px'}
                  ta="center"
                  fw={500}
                  variant="gradient"
                  gradient={{ from: '#9b9b9bff', to: '#ffffffff', deg: 45 }}
                >
                  AI Model Match
                </Text>
                <Text
                  hiddenFrom="sm"
                  style={{ ...styles, letterSpacing: '-1.5px', marginTop: 30 }}
                  size={'64px'}
                  ta="center"
                  fw={500}
                  variant="gradient"
                  gradient={{ from: '#9b9b9bff', to: '#ffffffff', deg: 45 }}
                >
                  AI Model Match
                </Text>
              </>
            )}
          </Transition>
          <Transition
            mounted={isComponentVisible}
            transition="fade-left"
            duration={800}
            enterDelay={300}
            timingFunction="ease"
          >
            {(styles) => (
              <>
                <Text
                  visibleFrom="sm"
                  maw={550}
                  size="28px"
                  style={{ ...styles, lineHeight: 1.3, marginTop: 30 }}
                  ta="center"
                  fw={600}
                  c="#FFFFFF7A"
                >
                  You innovate. We orchestrate.
                </Text>
                <Text
                  visibleFrom="sm"
                  maw={500}
                  size="20px"
                  style={{ ...styles, lineHeight: 1.3, marginTop: 10 }}
                  ta="center"
                  fw={400}
                  c="#FFFFFF7A"
                >
                  Focus on new AI experiences while AI Model Match chooses the best prompt
                  pipelines for you.
                </Text>
                <Text
                  hiddenFrom="sm"
                  maw={'100%'}
                  size="22px"
                  style={{ ...styles, lineHeight: 1.3, marginTop: 30 }}
                  ta="center"
                  fw={400}
                  c="#FFFFFF7A"
                >
                  Continuously optimize AI-driven experiences by testing, learning, and
                  selecting the best strategies automatically.
                </Text>
              </>
            )}
          </Transition>

          <Group gap={40} mt={50} justify="center">
            <Transition
              mounted={isComponentVisible}
              transition="fade-up"
              duration={800}
              enterDelay={800}
              timingFunction="ease"
            >
              {(styles) => (
                <Button
                  style={styles}
                  variant="outline"
                  color="#0db7ed"
                  h={80}
                  w={220}
                  c="#FFFFFF"
                  fw={300}
                  size="lg"
                  radius={'80'}
                  rightSection={<IconBrandDocker color="#0db7ed" size={36} stroke={1} />}
                  onClick={onGetStartedClick}
                >
                  Get Started
                </Button>
              )}
            </Transition>
            <Transition
              mounted={isComponentVisible}
              transition="fade-up"
              duration={800}
              enterDelay={950}
              timingFunction="ease"
            >
              {(styles) => (
                <Button
                  style={styles}
                  variant="outline"
                  color="brand"
                  h={80}
                  w={220}
                  c="#FFFFFF"
                  fw={300}
                  size="lg"
                  radius={'80'}
                  rightSection={
                    <IconArrowDown
                      color="var(--mantine-color-brand-3)"
                      size={36}
                      stroke={1}
                    />
                  }
                  onClick={onLearnMoreClick}
                >
                  Learn More
                </Button>
              )}
            </Transition>
          </Group>
        </Stack>
      </Box>
    </Flex>
  );
}
