<template>
    <div class="root" :style="{background: colorTop}">
        <img :src="image">
        <div class="container">
            <div class="row">
                <div v-for="tag in tags" :key="tag" class="col tag">
                    {{ tag }}
                </div>
            </div>
            <div class="row">
                <div class="col quality">
                    {{ rating }}
                </div>
                <div class="col quality">
                    {{ quality }}
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.root {
    height: 370px;
    width: 220px;
    padding: 5px;
    display: inline-block;
    margin: 5px;
    background-color: blue;
}

img {
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    height: 240px;
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

.quality {
    border: 1px solid black;
    padding: 5px;
    margin-left: 5px;
    margin-top: 5px;
    border-radius: 5px;
    background-color: transparent;
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