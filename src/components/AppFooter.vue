<template>
  <footer
    class="box-border grid w-full grid-cols-1 place-items-center justify-center gap-8 bg-black px-4 pb-32 pt-8 text-white"
  >
    <div
      class="mb-16 grid w-full grid-cols-1 items-start gap-x-4 gap-y-10 self-start lg:mx-auto lg:max-w-[992px] lg:grid-cols-4"
    >
      <div>
        <h5>INFORMATION</h5>
        <ul class="m-0 grid list-none gap-y-2 p-0">
          <li>GILLETTE, WY</li>
          <li>bytewave.crypto</li>
          <li>
            <footer-link to="tel:307-429-2163">(307) 429-2163</footer-link>
          </li>
          <li><footer-link to="/terms">TERMS</footer-link></li>
          <li><footer-link to="/privacy">PRIVACY POLICY</footer-link></li>
        </ul>
      </div>
      <div>
        <h5>SITE MAP</h5>
        <ul class="m-0 grid list-none gap-y-2 p-0">
          <li>
            <footer-link
              external
              href="https://bytewaveco.gumroad.com/"
              aria-label="The Bytewave Store"
            >
              STORE
            </footer-link>
          </li>
          <li>
            <footer-link to="/#projects" aria-label="Our past projects">
              PROJECTS
            </footer-link>
          </li>
          <li>
            <footer-link to="/#services" aria-label="Our services">
              SERVICES
            </footer-link>
          </li>
          <li>
            <footer-link to="/#about-us" aria-label="About us">
              ABOUT US
            </footer-link>
          </li>
          <li>
            <footer-link to="mailto:info@bytewave.co" aria-label="Contact us">
              CONTACT US
            </footer-link>
          </li>
        </ul>
      </div>
      <div>
        <h5>ACCREDITATION</h5>
        <ul class="m-0 list-none p-0">
          <li>
            <a
              href="https://www.bbb.org/us/wy/sheridan/profile/graphic-designer/byte-wave-llc-0805-46128974/#sealclick"
              target="_blank"
              rel="nofollow"
            >
              <img
                src="https://seal-wynco.bbb.org/seals/blue-seal-200-42-bbb-46128974.png"
                width="200"
                height="42"
                loading="lazy"
                style="border: 0; pointer-events: none; user-select: none"
                alt="Byte Wave, LLC BBB Business Review"
              />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h5>FOLLOW US</h5>
        <ul class="m-0 flex list-none gap-x-2 p-0">
          <li>
            <SocialButton
              href="https://www.facebook.com/bytewaveco"
              aria-label="Bytewave's Facebook Page"
              target="_blank"
              rel="nofollow"
              class="social"
            >
              <UIcon name="ph:facebook-logo" />
            </SocialButton>
          </li>
          <li>
            <SocialButton
              href="https://www.instagram.com/bytewaveco"
              target="_blank"
              rel="nofollow"
              class="social"
            >
              <UIcon name="ph:instagram-logo" />
            </SocialButton>
          </li>
          <li>
            <SocialButton
              href="https://www.tiktok.com/@bytewaveco"
              target="_blank"
              rel="nofollow"
              class="social"
            >
              <UIcon name="ph:tiktok-logo" />
            </SocialButton>
          </li>
          <li>
            <SocialButton
              href="https://linktr.ee/bytewaveco"
              target="_blank"
              rel="nofollow"
              class="social"
            >
              <UIcon name="simple-icons:linktree" />
            </SocialButton>
          </li>
          <li>
            <SocialButton
              href="https://github.com/bytewaveco"
              aria-label="Bytewave's GitHub"
              target="_blank"
              rel="nofollow"
              class="social"
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
              class="social"
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
