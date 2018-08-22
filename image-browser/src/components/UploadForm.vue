<template>
  <div class="dropper">
    <input type="file" class="drop-input" @change="uploadImages($event.target.files)" multiple accept="image/*"/>
    <span>Click to Browse or Drag Files Here</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'UploadForm',
  methods: mapActions(['uploadImages'])
}
</script>

<style>
.dropper {
  height: 30vh;
  border: 1px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.dropper:hover {
  background-color: #eee;
}

.drop-input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
}
</style>

