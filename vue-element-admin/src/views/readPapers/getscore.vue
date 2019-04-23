<template>
  <div>
    <h3>试卷详情</h3>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      message: state => state.readPapers.message
    })
  },
  async mounted() {
    var obj = JSON.parse(window.localStorage.getItem('examIds'))
    await this.getExamMsg({
      id: obj.nid	
    })
    console.log(this.message)
  },
  methods: {
    ...mapActions({
      getExamMsg: 'readPapers/getExamMsg'
    }),
  }
}
</script>
<style>
div {
  width: 100%;
}
h3 {
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding-left: 30px;
  box-sizing: border-box;
  font-size: 26px;
  font-weight: normal;
}
</style>
