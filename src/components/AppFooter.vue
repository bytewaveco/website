<template>
  <footer
    class="box-border grid w-full grid-cols-1 place-items-center justify-center gap-8 bg-black prose-invert px-4 pb-32 pt-8"
  >
    <div
      class="mb-16 grid w-full grid-cols-1 items-start gap-x-4 gap-y-10 self-start lg:mx-auto lg:max-w-screen-lg lg:grid-cols-4"
    >
      <div>
        <h4>INFORMATION</h4>
        <ul>
          <li class="text-white">GILLETTE, WY</li>
          <li class="text-white">bytewave.crypto</li>
          <li>
            <FooterLink to="tel:307-429-2163">(307) 429-2163</FooterLink>
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
        <h4>ACCREDITATION</h4>
        <a
          href="https://www.bbb.org/us/wy/sheridan/profile/graphic-designer/byte-wave-llc-0805-46128974/#sealclick"
          target="_blank"
          rel="nofollow"
        >
          <NuxtImg
            class="!m-0"
            src="https://seal-wynco.bbb.org/seals/blue-seal-200-42-bbb-46128974.png"
            width="200"
            height="42"
            loading="lazy"
            style="border: 0; pointer-events: none; user-select: none"
            alt="Byte Wave, LLC BBB Business Review"
          />
        </a>
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
              href="https://trbo.link/at/bytewaveco"
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
      Copyright © 2025 Bytewave. All rights reserved.
    </span>
  </footer>
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
