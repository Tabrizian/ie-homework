<template>
    <div>
        <input type="text" :placeholder="hint"/>
    </div>
</template>

<style scoped>

input[type=text] {
    border: #b5b5b5 1px solid;
    padding: 10px;
    height: 50px;
    width: 400px;
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: #e6e6e6;
}

</style>

<script>
export default {
    props: {
        hint: {
            type: String
        }
    }
}
</script>