import React from "react";
import {
  AboutSection,
  // ArticlesSection,
  // ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Andy Chen's Portfolio" />
      <Page useSplashScreenAnimation>
        <br></br>
        <br></br>
        <HeroSection sectionId="hero" />
        <br></br>
        <br></br>
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About Me" />
        <br></br>
        <br></br>
        <InterestsSection sectionId="skills" heading="Skills" />
        <br></br>
        <br></br>
        <ProjectsSection sectionId="projects" heading="Latest Projects" />
        {/* <ContactSection sectionId="github" heading="Issues?" /> */}
      </Page>
    </>
  );
}
