<template>
    <div class="root" :style="{background: color}">
        <div class="row">
        <div class="col-md-6 offset-md-3"> 
            {{ title }} 
            <div> {{ subtitle }} </div>
        <slot/>
        </div>


        <div class="col-md-2">
            <img :src="image"/>
        </div>
        </div>
    </div>
</template>

<style scoped>
.root {
    height: 230px;
    padding: 50px;
    color: white;
    font-size: 1.5em;
}

</style>

<script>
export default {
    props: {
        color: {
            type: String
        },
        image: {
            type: String
        },
        title: {
            type: String
        },
        subtitle: {
            type: String
        }
    }
}
</script>