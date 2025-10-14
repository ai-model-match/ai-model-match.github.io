import {
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Image,
  Text,
  Title,
  Transition,
} from '@mantine/core';
import { useInViewport } from '@mantine/hooks';
import { IconBrandGithub, IconMail } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export interface LearnMoreComponentProps {
  targetScrollRef: React.Ref<HTMLDivElement>;
  onSeeGithubClick?: () => void;
  onSendEmailClick?: () => void;
}

export function LearnMoreComponent({
  targetScrollRef,
  onSeeGithubClick,
  onSendEmailClick,
}: LearnMoreComponentProps) {
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
      mih="100vh"
      miw={'100%'}
      justify={'center'}
      align={'flex-start'}
      p={20}
    >
      <div ref={ref}>
        <Title ta="center" mt={70}>
          How AIMM supports new AI Experiences
        </Title>
        <Grid maw={1200} gutter={'xl'} mt={50}>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Transition
              mounted={isComponentVisible}
              transition="slide-up"
              duration={800}
              enterDelay={600}
              timingFunction="ease"
            >
              {(styles) => (
                <Card style={styles} shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image src="1.png" height={250} />
                  </Card.Section>

                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={600}>1. Automate AI Experiences Rollout</Text>
                  </Group>

                  <Text c="dimmed">
                    AI Model Match supports automatic release of new Prompt Pipelines in
                    production. Define your use case, choose the candidate Prompts , and
                    let the system automatically distribute traffic and collect
                    performance data, so you can focus on creating innovative AI
                    experiences instead of testing.
                  </Text>
                </Card>
              )}
            </Transition>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Transition
              mounted={isComponentVisible}
              transition="slide-up"
              duration={800}
              enterDelay={750}
              timingFunction="ease"
            >
              {(styles) => (
                <Card style={styles} shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image src="2.png" height={250} />
                  </Card.Section>

                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={600}>2. Optimize with Real-World Feedback</Text>
                  </Group>

                  <Text c="dimmed">
                    Every user interaction becomes a learning opportunity. AI Model Match
                    aggregates synthetic scores and feedback to continuously refine which
                    flows perform best. As real users engage, the system adapts, promoting
                    high-performing Prompt Pipelines automatically.
                  </Text>
                </Card>
              )}
            </Transition>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 12, lg: 4 }}>
            <Transition
              mounted={isComponentVisible}
              transition="slide-up"
              duration={800}
              enterDelay={900}
              timingFunction="ease"
            >
              {(styles) => (
                <Card style={styles} shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image src="3.png" height={250} />
                  </Card.Section>

                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={600}>3. Empower Team to Deliver Better AI Experiences</Text>
                  </Group>

                  <Text c="dimmed">
                    AI Product Managers and AI Engineers can experiment safely without
                    heavy engineering overhead. With built-in rollout control, automatic
                    rollback, and transparent analytics, your team can deliver smarter,
                    more reliable AI experiences, faster than ever.
                  </Text>
                </Card>
              )}
            </Transition>
          </Grid.Col>
        </Grid>
        <Group gap={40} mt={70} mb={30} justify="center">
          <Transition
            mounted={isComponentVisible}
            transition="fade"
            duration={800}
            enterDelay={1300}
            timingFunction="ease"
          >
            {(styles) => (
              <Button
                style={styles}
                variant="filled"
                color="#000000ff"
                h={80}
                w={220}
                c="#FFFFFF"
                fw={300}
                size="lg"
                radius={'80'}
                rightSection={<IconBrandGithub color="#FFFFFF" size={36} stroke={1} />}
                onClick={onSeeGithubClick}
              >
                Be curious
              </Button>
            )}
          </Transition>
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
      </div>
    </Flex>
  );
}
