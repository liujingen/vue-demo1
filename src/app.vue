<template>
    <div>
    	<div class="header">
    		<router-link to="this.$router.go(1)">后退</router-link>
        	<Headerbar></Headerbar>
        </div>
        <div>
            <router-view></router-view>
        </div>
        <Footerbar></Footerbar>
    </div>
</template>
<script>
	import Headerbar from './views/header.vue'
	import Footerbar from './views/footer.vue'
	export default {
		components: {
			Headerbar,
			Footerbar
		}
	}
</script>
