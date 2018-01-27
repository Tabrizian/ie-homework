<template>
    <div>
        <i :class="fontAwesomeIcon" aria-hidden="true" :style="{background: color}"></i>
    </div>
</template>

<style scoped>
i {
    border-radius: 50%;
    padding: 20px;
    opacity: 0.5;
    vertical-align: 200%;
}
</style>

<script>
export default {
    computed: {
        fontAwesomeIcon() {
            return 'fa ' + 'fa-' + this.icon + ' fa-lg'
        }

    },
    props: {
        icon: {
            type: String
        },
        color: {
            type: String,
            default: 'aqua'
        }
    }
}
</script>