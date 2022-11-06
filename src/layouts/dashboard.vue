<template>
  <section
    id="dashboard"
    data-testid="main"
  >
    <div
      id="dashboard-sidebar"
      data-testid="sidebar"
    >
      <img
        src="~/assets/img/logo.png"
        alt="The Show Portal"
      />
      <div id="dashboard-sidebar-body">
        <div id="dashboard-sidebar-body-nav-items">
          <nuxt-link to="/">
            <sidebar-button :active="/^\/$/.test(route.path)">
              <icon name="ph:gauge" />
              <span>Dashboard</span>
            </sidebar-button>
          </nuxt-link>
          <nuxt-link to="/events">
            <sidebar-button :active="/^\/events/.test(route.path)">
              <icon name="ph:ticket" />
              <span>Events</span>
            </sidebar-button>
          </nuxt-link>
          <nuxt-link
            v-if="user.isLoggedIn"
            to="/settings"
          >
            <sidebar-button :active="/^\/settings/.test(route.path)">
              <icon name="ph:gear" />
              <span>Settings</span>
            </sidebar-button>
          </nuxt-link>
          <nuxt-link
            v-if="!user.isLoggedIn"
            to="/sign-in"
          >
            <sidebar-button>
              <icon name="ph:sign-in" />
              <span>Sign in</span>
            </sidebar-button>
          </nuxt-link>
        </div>
        <entry-button-icon
          v-if="user.isLoggedIn"
          icon="sign-out"
          @click.stop.prevent="user.signOut"
        >
          Sign out
        </entry-button-icon>
      </div>
    </div>

    <div
      id="dashboard-content"
      data-testid="content"
    >
      <entry-search />
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
const route = useRoute()
const user = useUser()
</script>

<style lang="scss" scoped>
#dashboard {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  overflow: hidden;

  #dashboard-sidebar {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1.25rem 0.5rem 4rem 2rem;
    user-select: none;
    overflow: hidden;

    img {
      width: 160px;
      margin: 1.5rem auto 1.5rem;
      pointer-events: none;
    }

    #dashboard-sidebar-body {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding-bottom: 4rem;
      row-gap: 0.5rem;
      overflow: hidden;

      #dashboard-sidebar-body-nav-items {
        display: flex;
        flex-direction: column;
        height: 100%;
        row-gap: 0.5rem;
        overflow: hidden;
        overflow-y: overlay;

        a {
          text-decoration: none;
        }
      }
    }

    button {
      justify-self: flex-end;
    }
  }

  #dashboard-content {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: calc(100% - 1rem);
    height: calc(100% - 6.5rem);
    padding: 4rem 0.5rem 2.5rem;
    overflow: hidden;
    overflow-y: overlay;
  }
}
</style>
