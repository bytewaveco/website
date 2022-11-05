<template>
  <section
    id="dashboard"
    data-testid="main-section"
  >
    <div id="dashboard-sidebar">
      <img
        src="~/assets/img/logo.png"
        alt="The Show Portal"
      />
      <div id="dashboard-sidebar-body">
        <div id="dashboard-sidebar-body-nav-items">
          <nuxt-link to="/dashboard">
            <sidebar-button :active="/^\/dashboard/.test(route.path)">
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
            v-if="user"
            to="/settings"
          >
            <sidebar-button :active="/^\/settings/.test(route.path)">
              <icon name="ph:gear" />
              <span>Settings</span>
            </sidebar-button>
          </nuxt-link>
        </div>
        <entry-button-icon
          v-if="user"
          icon="sign-out"
          @click.stop.prevent="supabase.auth.signOut()"
        >
          Sign out
        </entry-button-icon>
      </div>
    </div>
    <slot />
  </section>
</template>

<script lang="ts" setup>
const route = useRoute()
const user = useSupabaseUser()
const supabase = useSupabaseClient()
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
    padding: 1.25rem 1rem 4rem 2rem;
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
}
</style>
