<template>
  <div>
    <pan-thumb :image="image" />
    <el-button type="primary" icon="upload" style="position: absolute;bottom: 15px;margin-left: 40px;" @click="imagecropperShow=true">
      Change Avatar
    </el-button>
    <image-cropper
      v-show="imagecropperShow"
      :key="imagecropperKey"
      :width="300"
      :height="300"
      url="http://123.206.55.50:11000/upload"
      method="post"
      lang-type="en"
      @close="close"
      @crop-upload-success="cropSuccess"
    />
  </div>
</template>
<script>
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'

export default {
  name: 'AvatarUploadDemo',
  components: { ImageCropper, PanThumb },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: ''
    }
  },
  methods: {
    cropSuccess(e) {
      console.log(e)
      // this.image = e[0].path
      // this.imagecropperShow = false
    },
    close() {
      this.imagecropperShow = false
    }
  }
}
</script>
