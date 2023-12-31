<template>
 <main>
  <div>Login</div>
  <button @click="signIn('google')">google</button>
  <br />
  <button @click="signOut()">signout</button>
  <div>status:{{ status }}</div>
  <div>session:{{ userInfo }}</div>
 </main>
</template>
<script setup lang="ts">
definePageMeta({
 auth: {
  unauthenticatedOnly: true,
  navigateAuthenticatedTo: "/",
 },
});
const { signIn, status, getSession, signOut } = useAuth();
const userInfo = await getSession();
</script>
