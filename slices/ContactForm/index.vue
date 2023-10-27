<script setup lang="ts">
import * as prismic from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<prismic.Content.ContactFormSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const isSending = ref(false);
const form = reactive({
  name: "",
  surname: "",
  email: "",
  phone: "",
  reason: "",
  message: "",
});
const send = () => {
  try {
    console.log("Ready to send", form);
    isSending.value = true;
    setTimeout(() => {
      console.log("DONE!", form);
      isSending.value = false;
      Object.keys(form).forEach((key: any) => {
        console.log(`Key ${key} `);
        form[key as keyof typeof form] = "";
      });
    }, 5000);
  } catch (error) {
    console.log("error sending", error);
  }
};
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="px-8 py-24"
  >
    <div
      class="flex flex-col max-w-lg mx-auto rounded-lg lg:flex-row lg:max-w-4xl outline outline-4 outline-primary-600 bg-sand-200 @container"
    >
      <div
        class="flex flex-wrap items-baseline flex-none px-4 pt-4 pb-6 lg:pb-12 lg:items-start lg:flex-nowrap lg:rounded-l-lg lg:flex-col lg:w-1/3 bg-gradient-to-t from-primary-500 to-primary-300"
      >
        <Logo class="hidden lg:block" />
        <div class="flex-grow my-6 text-white">
          <h3 class="text-3xl font-bold leading-8">
            {{ slice.primary.title }}
          </h3>
          <p class="hidden py-4 lg:block">
            <PrismicRichText :field="slice.primary.description" />
          </p>
        </div>
        <SocialLinks />
        <!-- class="flex-row flex-wrap lg:flex-col lg:basis-full lg:px-0" -->
      </div>
      <div class="p-6 lg:p-12 lg:w-2/3">
        <form @submit.prevent="send">
          <fieldset>
            <legend>Informazioni di contatto</legend>
            <p class="mb-4 -mt-4 text-sm text-neutral-400">
              i campi contrassegnati con <strong>*</strong> sono obbligatori
            </p>
            <div class="grid grid-cols-2 gap-4">
              <input
                v-model="form.name"
                type="text"
                placeholder="Nome"
                required
              />
              <input
                v-model="form.surname"
                type="text"
                placeholder="Cognome"
                required
              />
              <input
                v-model="form.email"
                type="email"
                placeholder="Email"
                required
              />
              <input
                v-model="form.phone"
                type="tel"
                placeholder="Telefono"
                required
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Di cosa hai bisogno?</legend>

            <select v-model="form.reason">
              <option
                v-for="val in ['informazioni', 'preventivi']"
                :key="val"
                :value="val"
                class="capitalize"
              >
                {{ val }}
              </option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Il tuo messaggio</legend>

            <textarea v-model="form.message"></textarea>
          </fieldset>
          <div class="flex justify-end">
            <button
              class="self-end px-12 py-2 mt-6 text-white rounded bg-primary-600 hover:bg-primary-700"
            >
              Invia
              <Icon
                :name="
                  isSending ? 'line-md:loading-twotone-loop' : 'prime:send'
                "
                size="24"
              ></Icon>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<style scoped lang="postcss">
form {
  width: 100% !important;
  fieldset:not(:first-child) {
    @apply mt-6;
  }
  fieldset {
    legend {
      @apply font-bold text-lg mb-2;
    }
  }
  input,
  textarea,
  select {
    @apply w-full p-2 border rounded focus:outline-none border-primary-300;
  }
  textarea {
    @apply min-h-[15ch] lg:min-h-[20ch];
  }
  &:invalid button {
    @apply bg-neutral-300 cursor-not-allowed;
  }
}
</style>
