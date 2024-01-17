<template>
  <footer class="py-12 text-white bg-primary-950">
    <div class="container grid gap-8 lg:grid-cols-4">
      <Logo dark />
      <div class="text-xs leading-5 lg:col-span-2 lg:text-sm lg:leading-10">
        &copy; {{ new Date().getFullYear() }} <strong>Daevent Puglia</strong>
        <br />
        Tutti i diritti riservati <br />
        DÆVENT - Management & Party <br />
        P. Iva 07737970728 <br />
        📞 (+39) 340.401.74.74 <br />
        ✉️ info@daeventpuglia.it
      </div>
      <div class="">
        <div class="pb-12">
          Social
          <SocialLinks short></SocialLinks>
        </div>
        <div class="flex flex-col gap-4 pb-12">
          Newsletter
          <input
            type="text"
            class="px-4 py-2 bg-transparent border rounded-lg border-neutral-600"
            placeholder="mario@rossi.it"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
