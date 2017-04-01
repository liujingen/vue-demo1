<template>
    <div>
        <router-link to="/about">{{title}}</router-link>
    </div>
</template>
<script>
  export default {
    data: function(){
		return{
      		title: "about"
    	}    	
    }
  }
</script>