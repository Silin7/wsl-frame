<template>
  <div>
    <el-form>
      <cos-col-date-mul datetype="datetimerange" v-bind:modelfeild.sync="mainModel.floorPrice" :cosprop="floorPrice" coslabel="date日期选择器" :flag="flag"></cos-col-date-mul>
    </el-form>
  </div>
</template>

<script>
  import coscoldatemul from '@/components/element-component/cos-col-date-mul'
  export default {
    components: {
      'cos-col-date-mul': coscoldatemul
    },
    mounted () {
      this.$http.get('/js/data.json').then(res => {
        console.log('res', res);
      }).catch(error => {
        console.log('error', error)
      })
    },
    data () {
      return {
        mainModel: {
          floorPrice: []
        },
        floorPrice: '',
        flag: ''
      }
    },
    methods: {
      changeDateMul (val) {
        this.mainModel.floorPrice = val
      }
    }
  }
</script>
