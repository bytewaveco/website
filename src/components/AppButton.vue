<template>
  <button
    appearance-none
    outline-none
    text-white
    bg-black
    py-4
    px-8
    rounded-full
    border-solid
    border-3
    border-transparent
    cursor-pointer
    transition-all
    hover:shadow
    hover:border-white>
    <slot />
  </button>
</template>
