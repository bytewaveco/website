<template>
  <section
    id="services"
    class="mx-auto box-border w-[80vw] max-w-screen-lg px-4 py-32"
  >
    <h2>SERVICES</h2>
    <p>
      WE OFFER A WIDE RANGE OF SERVICES TO HELP YOU GROW YOUR BUSINESS. YOU CAN
      THINK OF US AS YOUR TECHNICAL INTEGRATORS. WE'LL TAKE THE TIME TO
      UNDERSTAND YOUR PAIN POINTS AND GOALS AND DELIVER AN EFFECTIVE SOLUTION
      THAT YOU CAN AFFORD.
    </p>
    <p>
      NEED A SERVICE THAT'S NOT LISTED BELOW? CONTACT US. WE LIKE A CHALLENGE!
    </p>
    <div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
      <div class="grid gap-8">
        <div>
          <UIcon class="text-8xl" name="ph:trend-up" />
          <h5 class="font-extrabold text-blue-500">SOCIAL MEDIA MARKETING</h5>
        </div>
        <ul>
          <AppListItem>CUSTOM PLANS DESIGNED FOR YOU</AppListItem>
          <AppListItem>COMPETITOR ANALYSIS</AppListItem>
          <AppListItem>HASHTAG RESEARCH</AppListItem>
          <AppListItem>CUSTOM CRAFTED CONTENT</AppListItem>
        </ul>
        <a
          class="w-fit"
          href="https://app.hellobonsai.com/f/0bba8a399d2b23a"
          aria-label="Bytewave's Social Media Onboarding Form"
          target="_blank"
          rel="nofollow"
        >
          <AppButton>REACH WITH US</AppButton>
        </a>
      </div>
      <div class="grid gap-8">
        <div>
          <UIcon class="text-8xl" name="ph:bag" />
          <h5 class="font-extrabold text-blue-500">BRAND DESIGN</h5>
        </div>
        <ul>
          <AppListItem>
            PRIMARY LOGO, SECONDARY LOGO, SUBMARK, LOGO MARK
          </AppListItem>
          <AppListItem>COLOR PALETTE</AppListItem>
          <AppListItem>TYPOGRAPHY</AppListItem>
          <AppListItem>MOCKUPS</AppListItem>
        </ul>
        <a
          class="w-fit"
          href="https://app.hellobonsai.com/f/eca04dfcfb4d84c"
          aria-label="Bytewave's Graphic Design Onboarding Form"
          target="_blank"
          rel="nofollow"
        >
          <AppButton>EXPRESS WITH US</AppButton>
        </a>
      </div>
      <div class="grid gap-8">
        <div>
          <UIcon class="text-8xl" name="ph:browsers" />
          <h5 class="font-extrabold text-blue-500">WEBSITE DESIGN</h5>
        </div>
        <ul>
          <AppListItem>DOMAIN NAME ACQUISITION AND MANAGEMENT</AppListItem>
          <AppListItem>SEO OPTIMIZED APPLICATION</AppListItem>
          <AppListItem>ALWAYS CUSTOM DESIGN</AppListItem>
          <AppListItem>INDUSTRY LEADING PERFORMANCE</AppListItem>
        </ul>
        <a class="w-fit" href="mailto:info@bytewave.co" aria-label="Contact us">
          <AppButton>SHARE WITH US</AppButton>
        </a>
      </div>
      <div class="grid gap-8">
        <div>
          <UIcon class="text-8xl" name="ph:code" />
          <h5 class="font-extrabold text-blue-500">SOFTWARE DEVELOPMENT</h5>
        </div>
        <ul>
          <AppListItem>ALWAYS CUSTOM TO FIT THE JOB</AppListItem>
          <AppListItem>MANAGED DEPLOYMENT</AppListItem>
          <AppListItem>MODERN AND FAST</AppListItem>
          <AppListItem>
            IOS / ANDROID / WINDOWS / LINUX / MAC / CLOUD
          </AppListItem>
          <AppListItem>AI AUTOMATION</AppListItem>
        </ul>
        <a class="w-fit" href="mailto:info@bytewave.co" aria-label="Contact us">
          <AppButton>CREATE WITH US</AppButton>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
ul {
  margin: 0 !important;
  padding: 0 !important;
  list-style: none !important;
  font-size: 1rem !important;

  li {
    margin: 0 !important;
    padding: 0 !important;
  }
}
</style>
