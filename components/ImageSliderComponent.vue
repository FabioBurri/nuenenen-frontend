<template>
  <carousel v-if="props.images.length > 1" :autoplay="3000" :wrap-around="true">
    <slide v-for="image in props.images" :key="image.attributes.name">
      <div class="carousel__item">
        <nuxt-img
          format="webp"
          class="carousel__image"
          :src="image.attributes.url"
          :alt="image.attributes.alternativeText || image.attributes.name"
        >
        </nuxt-img>
      </div>
    </slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </carousel>
  <nuxt-img
    v-else
    format="webp"
    class="carousel__image_standalone"
    :src="props.images[0].attributes.url"
    :alt="
      props.images[0].attributes.alternativeText ||
      props.images[0].attributes.name
    "
  ></nuxt-img>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const props = defineProps<{
  images: Image[]
}>()
</script>
<style lang="scss">
.carousel__image_standalone {
  object-fit: cover;
  height: auto;
  width: min(100%, 500px);
  object-fit: cover;
  border-radius: var(--border-radius);
  margin: 0;
}

.carousel__image {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: var(--border-radius);
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border-radius: 50%;
  background-color: var(--color-accent-900);
  color: var(--color-accent-50);
  transition: background-color 0.2s ease-in-out;
}

.carousel__prev:hover,
.carousel__next:hover {
  background-color: var(--color-accent-800);
  color: var(--color-accent-50);
}

.carousel__pagination-button::after {
  display: block;
  content: '';
  width: 2rem;
  height: 0.75rem;
  border-radius: 50px;
  background-color: var(--color-accent-50);
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: var(--color-accent-900);
}

.dark-mode {
  .carousel__prev,
  .carousel__next {
    color: var(--color-white);
    background-color: var(--color-accent-900);
  }
  .carousel__prev:hover,
  .carousel__next:hover {
    color: var(--color-white);
    background-color: var(--color-accent-800);
  }

  .carousel__pagination-button::after {
    background-color: var(--color-accent-100);
  }
  .carousel__pagination-button:hover::after,
  .carousel__pagination-button--active::after {
    background-color: var(--color-accent-500);
  }
}

@media (max-width: 768px) {
  .carousel__pagination-button::after {
    display: none;
  }
}
</style>
