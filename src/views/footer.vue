<template>
    <div id="title" class="">{{title}}</div>
</template>
<script>
  export default {
    data(){
    	return {
 			title: "這是footer"   		
    	}
    },
    mounted:function(){
    	document.getElementById("title").style.display = "none"
    }
  }
</script>