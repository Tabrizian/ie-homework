<template>
    <div class="root" :style="{background: colorTop}">
        <img :src="image">
        <div class="row">
            <div v-for="tag in tags" :key="tag" class="col tag">
                {{ tag }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.root {
    height: 300px;
    width: 200px;
    border: 1px solid black;
    background-color: blue;
    padding: 15px;
}

img {
    height: 230px;
    margin-bottom: 5px;
}

.tag  {
    border: 1px solid black;
    padding: 5px;
    margin-left: 5px;
    border-radius: 5px;
    background-color: white;
    display: inline-block;
    text-align: center;
}


</style>

<script>
export default {
    props: {
        image: {
            type: String
        },
        rating: {
            type: String
        },
        tags: {
            type: Array
        },
        quality: {
            type: String
        },
        rating: {
            type: String
        },
        colorTop: {
            type: String
        },
        colorBottom: {
            type: String
        }

    }
}
</script>