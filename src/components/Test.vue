<template>
  <!--  测试页面  -->
  <div class="test" ref="testStyle">
    <div class="test-container">
    <!--  页面测试头部    -->
      <header>
        <div class="test-header">
          <img src="/static/images/test-left.png" />
          <div class="header-center">
            <p class="center-title">618同行们都用了视频</p>
            <p class="center-tips">官方数据：大盘数据发布视频成交转化率提升20%</p>
          </div>
          <img src="/static/images/test-right.png" />
        </div>
      </header>
      <!--   页面测试主体部分   -->
      <section>
        <div class="test-menu">
          <div class="menu-list">
            <div class="menu" v-for="(menuItem, index) in menuItemArray" :key="index" :class="{'select': index === getIndex}" @click="clickMenu(index)">
              {{menuItem.item_name}}
            </div>
          </div>
          <div class="menu-introduce">
            <div class="introduce" v-for="(chooseArrayItem, chooseArrayIndex) in chooseArray" :key="chooseArrayIndex">
              <img :src="chooseArrayItem.item_pic" />
              <div class="introduce-text">
                <div class="introduce-title">{{chooseArrayItem.item_title}}</div>
                <div class="introduce-teacher">讲师：{{chooseArrayItem.item_desc}}</div>
                <div class="introduce-details">{{chooseArrayItem.item_desc2}}</div>
                <button class="introduce-btn" @click="clickLook(chooseArrayItem.item_url)">观看回放>></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Test',
  data () {
    return {
      menuItemArray: [],
      getIndex: 0,
      chooseArray: [],
      containerArray: []
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    clickMenu (index) {
      this.getIndex = index
      this.chooseArray = this.containerArray[index]
    },
    loadData () {
      this.$ajax.post('https://lanqiangxcx.cn/php/ygcs.php').then((res) => {
        // let test = this.$refs.testStyle.style.height = 'auto'
        // console.log(test)
        let data = res.data
        this.menuItemArray = data.list
        this.containerArray = []
        data.list.map((item) => {
          this.containerArray.push(item.items2)
        })
        this.chooseArray = this.containerArray[0]
        console.log(this.chooseArray)
      })
    },
    clickLook (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/css/reset.styl'
  .test
    width 100%
    height auto
    background $color-bgm
    display flex
    align-items center
    justify-content center
    padding-bottom 38px
    .test-header
      margin-top 32px
      width 1200px
      height auto
      display flex
      align-items flex-start
      justify-content space-between
      flex-direction row
      padding 0 119px
      box-sizing border-box
      img
        width 203px
        height auto
      .header-center
        width auto
        margin-top 13px
        color $white
        text-align center
        font-family Adobe Heiti Std
        font-weight normal
        .center-title
          line-height 39px
          font-size 42px
          letter-spacing 3px
        .center-tips
          font-size 23px
          line-height 23px
          margin-top 20px
          letter-spacing 1px
    .test-menu
      width 1200px
      height auto
      .menu-list
        margin-left 4px
        width 1192px
        height 58px
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        margin-top 45px
        .menu:last-child
          border-right 1px solid $color-blue
        .menu
          font-size 23px
          width 238px
          box-sizing border-box
          line-height 56px
          border 1px solid $color-blue
          text-align center
          border-right none
          color $color-blue
          font-family Adobe Heiti Std
          cursor pointer
          &.select
            width 239px
            font-family FZLTHK
            line-height 58px
            border none
            color $white
            background-color $color-blue
      .menu-introduce
        display flex
        flex-direction row
        flex-wrap wrap
        margin-top 21px
        min-height 409px
        .introduce:nth-child(4n)
          margin-right 0
        .introduce
          width 283px
          background rgba(252,107,87,1)
          border-radius 10px
          font-size 0
          padding 8px 10px 15px 9px
          box-sizing border-box
          margin-right 22px
          img
            width 264px
            height 161px
            border-radius 10px
          .introduce-text
            margin-top 19px
            width 264px
            padding-left 8px
            color $white
            box-sizing border-box
            .introduce-title
              text-align left
              font-size 20px
              font-family Adobe Heiti Std
              font-weight normal
            .introduce-teacher
              font-size 18px
              opacity 0.8
              margin-top 11px
              text-align left
              font-family Microsoft YaHei
              font-weight 400
            .introduce-details
              margin-top 17px
              font-size 15px
              width 234px
              text-align left
              line-height 23px
              font-family Adobe Heiti Std
              font-weight normal
            .introduce-btn
              cursor pointer
              width 215px
              margin-left 18px
              height 47px
              background-color $white
              font-size 22px
              color #6B5BFF
              outline none
              border none
              margin-top 24px
              font-family Microsoft YaHei
              font-weight 400
              border-radius 10px
        .introduce:nth-child(n) {
          margin-top 50px
        }
        .introduce:first-child {
          background-color #FC6B57 !important
          margin-top 0
        }
        .introduce:nth-child(2) {
          margin-top 0
        }
        .introduce:nth-child(4) {
          margin-top 0
        }
        .introduce:nth-child(2n) {
          background-color #54A5FF
        }
        .introduce:nth-child(3) {
          background-color #4678FD
          margin-top 0
        }
        .introduce:nth-child(3n + 1) {
          background-color #4678FD
        }
        .introduce:nth-child(4n) {
          background-color #5C4BFC
        }
</style>
