<template>
  <footer>
    <div id="footer-content">
      <div>
        <h5>INFORMATION</h5>
        <ul>
          <li>SHERIDAN, WY</li>
          <li>bytewave.crypto</li>
          <li><a href="tel:307-429-2163">(307) 429-2163</a></li>
          <li><nuxt-link to="/terms">TERMS</nuxt-link></li>
          <li><nuxt-link to="/privacy">PRIVACY POLICY</nuxt-link></li>
        </ul>
      </div>
      <div>
        <h5>SITE MAP</h5>
        <ul>
          <li>
            <a
              href="/#projects"
              aria-label="Our past projects"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="/#services"
              aria-label="Our services"
            >
              SERVICES
            </a>
          </li>
          <li>
            <a
              href="/#about-us"
              aria-label="About us"
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              href="mailto:info@bytewave.co"
              aria-label="Contact us"
            >
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h5>ACCREDITATION</h5>
        <ul>
          <li>
            <!-- eslint-disable max-len -->
            <a
              href="https://www.bbb.org/us/wy/sheridan/profile/graphic-designer/byte-wave-llc-0805-46128974/#sealclick"
              target="_blank"
              rel="nofollow"
            >
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
        <ul class="socials">
          <li>
            <a
              href="https://www.facebook.com/bytewaveco"
              aria-label="Bytewave's Facebook Page"
              target="_blank"
              rel="nofollow"
              class="social"
            >
              <icon name="ph:facebook-logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/bytewaveco"
              target="_blank"
              rel="nofollow"
              class="social"
            >
              <icon name="ph:instagram-logo" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/bytewaveco"
              aria-label="Bytewave's GitHub"
              target="_blank"
              rel="nofollow"
              class="social"
            >
              <icon name="ph:github-logo" />
            </a>
          </li>
          <li>
            <a
              href="https://ko-fi.com/bytewaveco"
              aria-label="Bytewave's Ko-fi"
              target="_blank"
              rel="nofollow"
              class="social"
            >
              <icon name="ph:coffee" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <span>Copyright 2018-Present © Byte Wave LLC. All rights reserved.</span>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  row-gap: 2rem;
  width: 100%;
  color: rgb(var(--c-background));
  background-color: rgb(var(--c-text));
  padding-top: 2rem;
  padding-bottom: 8rem;

  #footer-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    align-items: flex-start;
    width: fit-content;
    margin: 0 auto;

    a {
      color: rgb(var(--c-background));
      transition: all 130ms ease-in-out;
      text-decoration: none;

      &:hover {
        color: rgb(var(--c-secondary));
        text-decoration: underline;
      }
    }

    div {
      display: grid;
      width: 100%;
      text-align: left;

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: left;

        &.socials {
          display: flex;
          column-gap: 1rem;

          li {
            .social {
              display: flex;
              align-items: center;
              justify-items: center;
              justify-content: center;
              width: 2rem;
              height: 2rem;
              background-color: rgb(var(--c-background));
              border-radius: 50%;
              text-decoration: none;
              transition: all 130ms ease-in-out;

              &:hover {
                background-color: rgb(var(--c-secondary));

                svg {
                  color: rgb(var(--c-background));
                }
              }

              svg {
                font-size: 1.5rem;
                color: rgb(var(--c-text));
              }
            }
          }
        }

        li {
          margin: 0.5rem 0;
          font-size: 0.75rem;
        }
      }
    }
  }

  span {
    font-size: 0.75rem;
  }
}

@media only screen and (max-width: 900px) {
  footer {
    #footer-content {
      grid-template-columns: repeat(2, 1fr);
      width: fit-content;
      margin: 0 auto;
      padding: 0;
    }
  }
}

@media only screen and (max-width: 500px) {
  footer {
    #footer-content {
      grid-template-columns: 1fr;
    }
  }
}
</style>
