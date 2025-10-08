import { Container } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import { LandingComponent } from './LandingComponent';
import { LearnMoreComponent } from './LearnMoreComponent';

export function HomePage() {
  const { scrollIntoView: scrollToLearnMore, targetRef: learnMoreRef } =
    useScrollIntoView({
      duration: 1500,
      easing: (x) => (x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2),
    });

  // Content
  return (
    <Container fluid p={0}>
      <LandingComponent
        onLearnMoreClick={scrollToLearnMore}
        onGetStartedClick={() =>
          window.open('https://hub.docker.com/u/aimodelmatch', '_blank')
        }
      />
      <LearnMoreComponent
        targetScrollRef={learnMoreRef}
        onSendEmailClick={() => window.open('mailto:lory.castelli+modelmatch@gmail.com')}
        onSeeGithubClick={() =>
          window.open('https://github.com/ai-model-match', '_blank')
        }
      />
    </Container>
  );
}
