import { Button, Center, Flex, Group, Stack, Text, Transition } from '@mantine/core';
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
      justify="center"
      align="center"
      bg="var(--aimm-gradient-bg)"
      mih="100vh"
      miw={'100%'}
      p={0}
      style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)' }}
    >
      <Center
        w={'100%'}
        h={'100vh'}
        style={{
          backgroundImage: "url('pattern.svg')",
          backgroundRepeat: 'repeat',
          backgroundPosition: '0 0',
        }}
      >
        <Stack align="center" p={50} maw={800}>
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
                  style={{ ...styles, letterSpacing: '-1.5px', marginTop: 30 }}
                  size="84px"
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
              <Text
                maw={550}
                size="24px"
                style={{ ...styles, lineHeight: 1.3, marginTop: 30 }}
                ta="center"
                fw={400}
                c="#FFFFFF7A"
              >
                Continuously optimize AI-driven experiences by testing, learning, and
                selecting the best strategies automatically.
              </Text>
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
              enterDelay={1000}
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
      </Center>
    </Flex>
  );
}
