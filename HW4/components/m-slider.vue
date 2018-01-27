<template>
    <div class="row">
        <div class="col">
        {{ label }}
        {{ value }}
        از
        {{ max }}
        </div>
        <input type="range" :min="min" :max="max" :value="sliderValue" class="slider" @input="update">
    </div>
</template>

<style scoped>
div {
    font-size: 15px;
    color: rgb(1, 1, 104);
    margin-bottom: 5px;
}
.slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    outline: none; /* Remove outline */
    background: rgba(0, 0, 255, 0.44);
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
}
.slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: rgb(78, 76, 175); /* Green background */
    cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: rgb(76, 102, 175); /* Green background */
    cursor: pointer; /* Cursor on hover */
}
   

</style>

<script>
export default {
    props: {
        min: {
            type: String
        },
        max: {
            type: String
        },
        value: {
            type: String
        },
        label: {
            type: String
        }
    },
    methods: {
        update(e) {
            this.sliderValue = e.target.value
        }
    },
    mounted() {
        this.sliderValue = this.value
    },
    data() {
        return {
            sliderValue: 0
        }
    }
}
</script>