<template>
  <div>
    <el-form>
      <cos-col-date datetype="datetime" v-bind:modelfeild.sync="mainModel.floorPrice" :cosprop="floorPrice" coslabel="date日期选择器" :flag="flag"></cos-col-date>
    </el-form>
  </div>
</template>

<script>
  import coscoldate from '@/components/element-component/cos-col-date'
  export default {
    components: {
      'cos-col-date': coscoldate
    },
    data () {
      return {
        mainModel: {
          floorPrice: ''
        },
        floorPrice: '',
        flag: ''
      }
    },
    methods: {
    }
  }
</script>
