<!-- creat by silin.wang 20.04.21 -->
<!-- vant组件 - date日期选择器 -->
<!-- 案列: 
  1.引入: import vantdate from '@/components/vant-components/vant-date'
  2.注册: 'vant-date': vantdate
  3.使用: <vant-date label="" placeholder="" v-bind:modelfeild.sync=""></vant-date>
-->
<!-- 说明: 
  typeme: single（单个-默）、multiple（多选）、range（区间日期）
  label: label标题
  placeholder: 提示
  inputAlign: 字体对齐方式 (默认: right)
  propMsg: 必填提示信息
  flag: 是否禁用 （禁用: 'view'）
  position: 弹出位置，可选值为 top bottom right left （默认: bottom）
  overlay: 是否显示遮罩层（默认: true）
  round: 是否显示圆角（默认: true）
  title: 弹出框标题（默认: 请选择日期）
  color: 颜色（默认: #1A7D70)
  proportion:  弹框高度（默认: 60%）
-->
<!-- 注意: 
  proportion: 百分比
-->

<template>
  <div>
    <van-field
      readonly
      :label="label"
      :value="modelfeildme"
      :placeholder="placeholder"
      :input-align="inputAlign"
      :error-message="propMsg"
      :disabled="flag === 'view' ? true : false"
      @click="clickShow"/>
    <van-calendar
      v-model="showDate"
      :type="typeme"
      :position="position"
      :overlay="overlay"
      :round="round"
      :min-date="minDate"
      :max-date="maxDate"
      :title="title"
      :color="color"
      :style="`height: ${proportion};`"
      @confirm="setAreaConfirm" />
  </div>
</template>

<script>
  export default {
    name: 'vantdate',
    props: {
      typeme: {
        type: String,
        default: 'single'
      },
      label: {
        type: String
      },
      placeholder: {
        type: String
      },
      inputAlign: {
        type: String,
        default: 'right'
      },
      propMsg: {
        type: String,
        default: ''
      },
      modelfeild: {
        type: String,
        default: ''
      },
      flag: {
        type: String
      },
      position: {
        type: String,
        default: 'bottom'
      },
      overlay: {
        type: Boolean,
        default: true
      },
      round: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: '请选择日期'
      },
      proportion: {
        type: String,
        default: '60%'
      },
      color: {
        type: String,
        default: '#1A7D70'
      }
    },
    mounted () {
      if (this.modelfeild) {
        this.modelfeildme = this.modelfeild
      }
      if (this.typeme) {
        this.typeFlag = this.typeme
      }
    },
    data() {
      return {
        typeFlag: '',
        showDate: false,
        modelfeildme: '',
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2060, 12, 31)
      }
    },
    watch: {
      'modelfeild'(newVal, oldVal) {
        this.modelfeildme = this.modelfeild
      }
    },
    methods: {
      // 弹出框
      clickShow() {
        if (this.flag !== 'view') {
          this.modelfeildme = ''
          this.showDate = true
        }
      },
      // 确定按钮
      setAreaConfirm(date) {
        if (this.typeFlag === 'single') {
          this.modelfeildme = this.formatDate(date)
        }
        if (this.typeFlag === 'multiple') {
          let dateArry = []
          date.forEach(item => {
            dateArry.push(this.formatDate(item))
          })
          this.modelfeildme = dateArry.join(' , ')
        }
        if (this.typeFlag === 'range') {
          const [start, end] = date;
          this.modelfeildme = `${this.formatDate(start)} 至 ${this.formatDate(end)}`;
        }
        this.showDate = false;
        this.$emit('update:modelfeild', this.modelfeildme)
      },
      // 格式化日期
      formatDate(date) {
        return `${date.getFullYear()}-${date.getMonth()+1 > 9 ? date.getMonth()+1 : '0'+(date.getMonth()+1)}-${date.getDate() > 9 ? date.getDate() : '0'+date.getDate()}`;
      }
    }
  }
</script>
