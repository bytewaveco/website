<template>
  <footer
    :class="{
      grid: true,
      'grid-cols-1': true,
      'items-center': true,
      'justify-center': true,
      'justify-items-center': true,
      'row-gap-8': true,
      'w-full': true,
      'bg-black': true,
      'text-white': true,
      'pt-8': true,
      'pb-32': true,
      'px-4': true,
      'box-border': true,
    }">
    <div
      :class="{
        'w-full': true,
        grid: true,
        'grid-cols-1': true,
        'gap-y-10': true,
        'gap-x-4': true,
        'items-start': true,
        'self-start': true,
        'mb-16': true,
        'lg:max-w-[992px]': true,
        'lg:mx-auto': true,
        'lg:grid-cols-4': true,
      }">
      <div>
        <h5>INFORMATION</h5>
        <ul list-none p-0 m-0 grid gap-y-2>
          <li>GILLETTE, WY</li>
          <li>bytewave.crypto</li>
          <li><footer-link to="tel:307-429-2163">(307) 429-2163</footer-link></li>
          <li><footer-link to="/terms">TERMS</footer-link></li>
          <li><footer-link to="/privacy">PRIVACY POLICY</footer-link></li>
        </ul>
      </div>
      <div>
        <h5>SITE MAP</h5>
        <ul list-none p-0 m-0 grid gap-y-2>
          <li>
            <footer-link
              external
              href="https://bytewaveco.gumroad.com/"
              aria-label="The Bytewave Store">
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
            <footer-link to="/#about-us" aria-label="About us"> ABOUT US </footer-link>
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
        <ul list-none p-0 m-0>
          <li>
            <!-- eslint-disable max-len -->
            <a
              href="https://www.bbb.org/us/wy/sheridan/profile/graphic-designer/byte-wave-llc-0805-46128974/#sealclick"
              target="_blank"
              rel="nofollow">
              <!-- eslint-enable max-len -->
              <img
                src="https://seal-wynco.bbb.org/seals/blue-seal-200-42-bbb-46128974.png"
                width="200"
                height="42"
                loading="lazy"
                style="border: 0; pointer-events: none; user-select: none"
                alt="Byte Wave, LLC BBB Business Review"
            /></a>
          </li>
        </ul>
      </div>
      <div>
        <h5>FOLLOW US</h5>
        <ul list-none p-0 m-0 flex gap-x-2>
          <li>
            <social-button
              href="https://www.facebook.com/bytewaveco"
              aria-label="Bytewave's Facebook Page"
              target="_blank"
              rel="nofollow"
              class="social">
              <div i-ph-facebook-logo />
            </social-button>
          </li>
          <li>
            <social-button
              href="https://www.instagram.com/bytewaveco"
              target="_blank"
              rel="nofollow"
              class="social">
              <div i-ph-instagram-logo />
            </social-button>
          </li>
          <li>
            <social-button
              href="https://www.tiktok.com/@bytewaveco"
              target="_blank"
              rel="nofollow"
              class="social">
              <div i-ph-tiktok-logo />
            </social-button>
          </li>
          <li>
            <social-button
              href="https://linktr.ee/bytewaveco"
              target="_blank"
              rel="nofollow"
              class="social">
              <div i-simple-icons-linktree />
            </social-button>
          </li>
          <li>
            <social-button
              href="https://github.com/bytewaveco"
              aria-label="Bytewave's GitHub"
              target="_blank"
              rel="nofollow"
              class="social">
              <div i-ph-github-logo />
            </social-button>
          </li>
          <li>
            <social-button
              href="https://ko-fi.com/bytewaveco"
              aria-label="Bytewave's Ko-fi"
              target="_blank"
              rel="nofollow"
              class="social">
              <div i-ph-coffee />
            </social-button>
          </li>
        </ul>
      </div>
    </div>
    <span>© 2018 Bytewave. All rights reserved.</span>
  </footer>
</template>
