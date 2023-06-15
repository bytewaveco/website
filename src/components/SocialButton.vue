<template>
  <a
    target="_blank"
    rel="noopener noreferrer"
    flex
    items-center
    justify-center
    justify-items-center
    w-8
    h-8
    bg-white
    text-black
    rounded-full
    decoration-none
    transition-colors
    hover:bg-blue
    hover:text-white
    text-lg>
    <slot />
  </a>
</template>
