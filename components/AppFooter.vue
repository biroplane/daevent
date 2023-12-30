<template>
  <footer class="py-12 text-white bg-primary-950">
    <div class="container grid lg:grid-cols-4 gap-8">
      <Logo dark />
      <div class="lg:col-span-2 text-xs leading-5 lg:text-sm lg:leading-10">
        &copy; {{ new Date().getFullYear() }} <strong>Daevent Puglia</strong>
        <br />
        Tutti i diritti riservati <br />
        DÆVENT - Management & Party <br />
        P. Iva 07737970728 <br />
        📞 (+39) 340.401.74.74 <br />
        ✉️ info@daeventpuglia.it
      </div>
      <div class="">
        Social
        <SocialLinks short></SocialLinks>
      </div>
    </div>
  </footer>
</template>
