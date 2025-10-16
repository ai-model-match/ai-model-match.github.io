import { Container } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import { ContactUsComponent } from './ContactUsComponent';
import { HowItWorksComponent } from './HowItWorksComponent';
import { LandingComponent } from './LandingComponent';
import { LearnMoreComponent } from './LearnMoreComponent';

export function HomePage() {
  const { scrollIntoView: scrollToLearnMore, targetRef: learnMoreRef } =
    useScrollIntoView({
      duration: 1500,
      easing: (x) => (x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2),
    });

  const { scrollIntoView: scrollToContactUs, targetRef: contactUsRef } =
    useScrollIntoView({
      duration: 1500,
      easing: (x) => (x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2),
    });

  const { scrollIntoView: scrollToHowItWorks, targetRef: howItWorksRef } =
    useScrollIntoView({
      duration: 1500,
      easing: (x) => (x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2),
    });

  // Content
  return (
    <Container fluid p={0}>
      <div
        style={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        <a
          href="https://www.producthunt.com/products/ai-model-match?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-ai&#0045;model&#0045;match"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1025052&theme=neutral&t=1760130582114"
            alt="AI Model Match - Launch, test, and optimize AI configurations — automatically | Product Hunt"
            style={{ width: 180, height: 40 }}
          />
        </a>
      </div>
      <LandingComponent
        onLearnMoreClick={scrollToLearnMore}
        onGetStartedClick={() =>
          window.open('https://hub.docker.com/u/aimodelmatch', '_blank')
        }
      />
      <LearnMoreComponent
        targetScrollRef={learnMoreRef}
        onHowItWorksClick={scrollToHowItWorks}
        onSeeGithubClick={() =>
          window.open('https://github.com/ai-model-match', '_blank')
        }
        onSupportUsClick={() =>
          window.open('https://opencollective.com/ai-model-match', '_blank')
        }
      />
      <HowItWorksComponent
        targetScrollRef={howItWorksRef}
        onSendEmailClick={scrollToContactUs}
      />
      <ContactUsComponent targetScrollRef={contactUsRef} />
    </Container>
  );
}
