<template>
    <div>
        这是{{page}}页面
        <router-link to="/user">user</router-link>
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                page: 'about'
            }
        }
    }
</script>