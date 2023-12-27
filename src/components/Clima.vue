<script setup>
    defineProps({

        clima: {
            type: Object,
            required: true
        }
    })
    </script>
<template>
    <div class="resultado">
        <h2>Clima de: {{clima.name}}</h2>
        <p class="actual"></p>
        <div class="temperaturas">
            <p>Min: <span>&deg;C</span></p>
            <p>Max: <span>&deg;C</span></p>
        </div>
    </div>
</template> 

