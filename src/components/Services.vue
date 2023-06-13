<template>
  <section id="services">
    <h2>SERVICES</h2>
    <p>NEED A SERVICE THAT'S NOT LISTED BELOW? CONTACT US.</p>
    <div id="services-list">
      <div>
        <icon name="ph:lightbulb-filament" />
        <h5>SOCIAL MEDIA MARKETING</h5>
        <ul>
          <li>CUSTOM PLANS DESIGNED FOR YOU</li>
          <li>COMPETITOR ANALYSIS</li>
          <li>HASHTAG RESEARCH</li>
          <li>CUSTOM CRAFTED CONTENT</li>
        </ul>
        <a
          href="https://app.hellobonsai.com/f/0bba8a399d2b23a"
          aria-label="Bytewave's Social Media Onboarding Form"
          target="_blank"
          rel="nofollow">
          <button>CONTACT US</button>
        </a>
      </div>
      <div>
        <icon name="ph:bag" />
        <h5>BRAND DESIGN</h5>
        <ul>
          <li>PRIMARY LOGO, SECONDARY LOGO, SUBMARK, LOGO MARK</li>
          <li>COLOR PALETTE</li>
          <li>TYPOGRAPHY</li>
          <li>MOCKUPS</li>
        </ul>
        <a
          href="https://app.hellobonsai.com/f/eca04dfcfb4d84c"
          aria-label="Bytewave's Graphic Design Onboarding Form"
          target="_blank"
          rel="nofollow">
          <button>CONTACT US</button>
        </a>
      </div>
      <div>
        <icon name="ph:browsers" />
        <h5>WEBSITE DESIGN</h5>
        <ul>
          <li>DOMAIN NAME ACQUISITION AND MANAGEMENT</li>
          <li>SEO OPTIMIZED APPLICATION</li>
          <li>ALWAYS CUSTOM DESIGN</li>
          <li>INDUSTRY LEADING PERFORMANCE</li>
        </ul>
        <a href="mailto:info@bytewave.co" aria-label="Contact us">
          <button>CONTACT US</button>
        </a>
      </div>
      <div>
        <icon name="ph:code" />
        <h5>SOFTWARE DEVELOPMENT</h5>
        <ul>
          <li>ALWAYS CUSTOM TO FIT THE JOB</li>
          <li>MANAGED DEPLOYMENT</li>
          <li>MODERN AND FAST</li>
          <li>IOS / ANDROID / WINDOWS / LINUX / MAC OS / CLOUD</li>
        </ul>
        <a href="mailto:info@bytewave.co" aria-label="Contact us">
          <button>CONTACT US</button>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#services {
  width: 80vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 0;
  box-sizing: border-box;

  #services-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
    row-gap: 8rem;
    margin-top: 8rem;

    div {
      svg {
        font-size: 64px;
      }

      button {
        appearance: none;
        outline: none;
        color: rgb(var(--c-background));
        background-color: rgb(var(--c-text));
        padding: 1rem 2rem;
        border-radius: 64px;
        border: 3px solid transparent;
        cursor: pointer;
        transition: all 130ms ease-in-out;

        &:hover {
          box-shadow: rgba(0, 0, 0, 0.25) 0px 7px 28px, rgba(0, 0, 0, 0.22) 0px 5px 10px;
          border-color: rgb(var(--c-background));
        }
      }

      ul {
        padding: 1rem;
      }
    }
  }
}

@media only screen and (max-width: 1260px) {
  #services {
    width: 100%;
    padding: 8rem 1rem;
  }
}

@media only screen and (max-width: 900px) {
  #services {
    #services-list {
      grid-template-columns: 1fr;
    }
  }
}
</style>
