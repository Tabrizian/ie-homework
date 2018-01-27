<template>
    <div>
        <button placeholder="hint" :style="{'background-color': color}">
            <slot/>
        </button>
    </div>
</template>

<style scoped>
button {
    background-repeat: no-repeat;
    border: 1px solid white;
    border-radius: 8px;
    color: white;
    padding: 10px;
    margin: 10px;
    font-size: 15px;
    cursor: pointer;
    overflow: hidden;
    outline: none;
}
</style>

<script>
export default {
    props: {
        color: {
            type: String
        }
    }
}
</script>