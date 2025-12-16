<template>
  <footer
    class="box-border grid w-full grid-cols-1 place-items-center justify-center gap-8 bg-black px-4 pt-8 pb-32 prose-invert"
  >
    <div
      class="mb-16 grid w-full grid-cols-1 items-start gap-x-4 gap-y-10 self-start lg:mx-auto lg:max-w-5xl lg:grid-cols-3"
    >
      <div>
        <h4>INFORMATION</h4>
        <ul>
          <li class="text-white">GILLETTE, WY</li>
          <li class="text-white">bytewave.crypto</li>
          <li>
            <FooterLink to="tel:3074292163">(307) 429-2163</FooterLink>
          </li>
          <li><FooterLink to="/terms">TERMS</FooterLink></li>
          <li><FooterLink to="/privacy">PRIVACY POLICY</FooterLink></li>
        </ul>
      </div>
      <div>
        <h4>SITE MAP</h4>
        <ul>
          <li>
            <FooterLink
              external
              href="https://bytewaveco.gumroad.com/"
              aria-label="The Bytewave Store"
            >
              STORE
            </FooterLink>
          </li>
          <li>
            <FooterLink to="/#projects" aria-label="Our past projects">
              PROJECTS
            </FooterLink>
          </li>
          <li>
            <FooterLink to="/#services" aria-label="Our services">
              SERVICES
            </FooterLink>
          </li>
          <li>
            <FooterLink to="/#about-us" aria-label="About us">
              ABOUT US
            </FooterLink>
          </li>
          <li>
            <FooterLink to="mailto:info@bytewave.co" aria-label="Contact us">
              CONTACT US
            </FooterLink>
          </li>
        </ul>
      </div>
      <div>
        <h4>FOLLOW US</h4>
        <ul class="flex gap-x-2">
          <li>
            <SocialButton
              href="https://www.facebook.com/bytewaveco"
              aria-label="Bytewave's Facebook Page"
              target="_blank"
              rel="nofollow"
            >
              <UIcon name="ph:facebook-logo" />
            </SocialButton>
          </li>
          <li>
            <SocialButton
              href="https://www.instagram.com/bytewaveco"
              target="_blank"
              rel="nofollow"
            >
              <UIcon name="ph:instagram-logo" />
            </SocialButton>
          </li>
          <li>
            <SocialButton
              href="https://www.tiktok.com/@bytewaveco"
              target="_blank"
              rel="nofollow"
            >
              <UIcon name="ph:tiktok-logo" />
            </SocialButton>
          </li>
          <li>
            <SocialButton
              href="https://trbo.link/at/creator"
              aria-label="Bytewave's TRBO Profile"
              target="_blank"
              rel="nofollow"
            >
              <UIcon name="mdi:car-turbocharger" />
            </SocialButton>
          </li>
          <li>
            <SocialButton
              href="https://github.com/bytewaveco"
              aria-label="Bytewave's GitHub"
              target="_blank"
              rel="nofollow"
            >
              <UIcon name="ph:github-logo" />
            </SocialButton>
          </li>
          <li>
            <SocialButton
              href="https://ko-fi.com/bytewaveco"
              aria-label="Bytewave's Ko-fi"
              target="_blank"
              rel="nofollow"
            >
              <UIcon name="ph:coffee" />
            </SocialButton>
          </li>
        </ul>
      </div>
    </div>
    <span class="text-sm font-medium text-gray-300">
      Copyright © {{ new Date().getFullYear() }} Bytewave. All rights reserved.
    </span>
  </footer>
</template>

<style scoped>
ul {
  margin: 0 !important;
  padding: 0 !important;
  list-style: none !important;
  font-size: 1rem !important;
}

ul > li {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
