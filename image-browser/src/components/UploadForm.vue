<template>
  <div class="dropper">
    <input type="file" class="drop-input"/>
    <span>Drag Files Here</span>
  </div>
</template>

<script>
export default {
  name: 'UploadForm'
}
</script>

<style>
.dropper {
  height: 30vh;
  border: 2px dashed black;
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

