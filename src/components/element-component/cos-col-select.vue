<!-- creat by silin.wang 20.03.31 -->
<!-- 表单组件 - select单选 -->
<!-- 案列：
  1.引入：import coscolselect from '@/components/element-component/cos-col-select'
  2.注册：'cos-col-select': coscolselect
  3.使用：<cos-col-select coslabel="" :cosprop="" cospropBoolean="" cospropMsg="" v-bind:modelfeild.sync="" :flag="" cosList=""></cos-col-select>
-->
<!-- 说明：
  coltype：宽度样式(默认0.25)
  coslabel：label标题
  cosprop：表单的prop属性
  cospropBoolean：是否必填（默认：true）
  cospropMsg：必填提示信息（默认：请输入）
  filterable：是否可搜索（默认：true）
  allow-create：是否允许用户创建新条目，需配合 filterable 使用（默认：true）
  cosList：选项列表
-->
<!-- 注意：
  loading：Boolean类型
  cosList: 只能是数组包含对象{ label:'', value:'' }格式
 -->
<template>
  <el-col :xs="getColSize('xs',coltype)" :sm="getColSize('sm',coltype)" :md="getColSize('md',coltype)" :lg="getColSize('lg',coltype)">
    <el-form-item :label="coslabel" :prop="cosprop" :rules="(cospropBoolean === 'true')? [{ required: true, message: cospropMsg }] : []">
      <el-select
        style="width: 100%"
        v-model="modelfeildme"
        placeholder="请输入关键词"
        filterable
        clearable
        :allow-create="true"
        @change="setSelect"
        :disabled="(flag === 'view'|| flag === 'handle' )? true : false">
        <el-option
          v-for="item in cosList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
  </el-col>
</template>

<script>
  import colSize from './col-size-js.js'
  export default {
    name: 'costomselect',
    props: {
      coltype: {
        type: String
      },
      coslabel: {
        type: String
      },
      cosprop: {
        type: String
      },
      cospropBoolean: {
        type: String,
        default: 'true'
      },
      cospropMsg: {
        type: String,
        default: '请输入'
      },
      modelfeild: {
        type: String,
        default:''
      },
      flag: {
        type: String
      },
      cosList: {
        type: Array,
        default:[]
      }
    },
    created () {
      if (this.modelfeild) {
        this.modelfeildme = this.modelfeild
      }
    },
    data() {
      return {
        modelfeildme: ''
      }
    },
    watch: {
      'modelfeild' (newVal, oldVal) {
        this.modelfeildme = this.modelfeild
      }
    },
    methods: {
      getColSize(type, val) {
        return colSize.getColSize(type, val)
      },
      setSelect () {
        this.$emit('update:modelfeild', this.modelfeildme)
      }
    }
  }
</script>
