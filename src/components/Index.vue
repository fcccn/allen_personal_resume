<template>
  <div class="index">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <div class="common" style="background-image: url('/static/images/header-bgm.jpg')">
          <div class="home">
            <div class="home-introduce">
              <div class="introduce">
                <img src="/static/images/contact.svg" class="introduce-img"/>
<!--                <div class="introduce-info"></div>-->
              </div>
              <div class="introduce-text">
                <div class="introduce-quote flex-row">
                  路漫漫其修远兮，吾将上下而求索
                </div>
                <div class="introduce-list">
                  <p>我叫傅陈晨</p>
                  <p>前端工程师</p>
                  <p>18329077063</p>
                  <p>2896947874@qq.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="common" style="background: url('/static/images/bgm.png') #109085">
          <div class="about">
            <div class="about-title">关于我</div>
            <div class="about-main">
              <div class="main-info" v-for="(info, infoIndex) in infoArray" :key="infoIndex">
                <div class="info-border">
                  <img :src="info.img" class="info-img"/>
                </div>
                <p class="info-text">{{info.text}}</p>
              </div>
            </div>
            <div class="about-introduce">
              <p>一年以上web前端开发经验</p>
              <p>喜欢轻巧、高性能、可组件化的MVVM框架Vue.js</p>
              <p>高效的自学能力，具备独立分析解决问题能力</p>
              <p>技术栈 Vue+es6+webpack+vux+小程序</p>
              <p>熟悉掌握react开发</p>
              <p>了解node.js环境下开发</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="common" style="background: url('/static/images/bgm.png') #4d5e8f">
          <div class="skills about">
            <div class="about-title">技术栈</div>
            <div class="skills-container">
              <div class="container-left">
                <div class="left-out">
                  <li class="item" v-for="(item, itemIndex) in itemArray" :key="itemIndex" :style="{'background-color': item.bgmColor}">{{item.text}}</li>
                </div>
                <div class="left-inner">
                  <li class="item-inside" v-for="(itemInSide, itemInSideIndex) in itemInSideArray" :key="itemInSideIndex" :style="{'background-color': itemInSide.bgmColor}">{{itemInSide.text}}</li>
                </div>
              </div>
              <div class="container-right">
                <p>熟练使用vue2.0以及其生态库</p>
                <p>编程注重耦合低，复用性高这一特点</p>
                <p>注重浏览器兼容性，掌握移动端兼容性方案</p>
                <p>实际开发过多平台项目（PC，H5，小程序等）</p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="common" style="background: url('/static/images/bgm.png') #945c4c">
          <div class="work about">
            <div class="about-title">工作经历</div>
            <div class="work-container">
              <swiper :options="swiperOptionsWork" ref="mySwiper">
                <swiper-slide v-for="(work, workIndex) in workArray" :key="workIndex">
                  <div class="container-time">
                    <div class="time">{{work.data}}</div>
                    <div class="time-undergo">
                      <div class="time-phone">
                        <div class="phone-arrow"></div>
                        <div class="phone-line">{{work.data}}</div>
                      </div>
                      <p class="undergo-company undergo-left">{{work.company}}</p>
                      <p class="undergo-post undergo-left">{{work.position}}</p>
                      <p class="undergo-left">{{work.skills}}</p>
                      <ul class="undergo-list undergo-left">
                        <li   v-for="(responsibility, responsibilitIndex) in work.responsibilities" :key="responsibilitIndex">{{responsibility}}</li>
                      </ul>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="project-radius">
              <li class="radius-white" :class="{'active': worksIndex === workIndex}" v-for="(work, workIndex) in workArray" :key="workIndex"></li>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="common" style="background: url('/static/images/bgm.png') #897f8a">
          <div class="project about">
            <div class="about-title">项目经历</div>
            <div class="project-container">
              <swiper :options="swiperOptions" ref="mySwiper">
                <swiper-slide v-for="(project, projectIndex) in projectArray" :key="projectIndex">
                  <div class="container">
                    <div class="container-title">
                      <span>{{project.data}}</span>
                      <span>{{project.name}}</span>
                    </div>
                    <a :href="project.address" class="container-link" target="_blank">{{project.address}}</a>
                    <div class="container-description">
                      <div class="description">项目描述：</div>
                      <div class="description-text">{{project.description}}</div>
                    </div>
                    <div class="container-description">
                      <div class="description">项目职责：</div>
                      <div class="description-text">
                        <li class="text-index" v-for="(duty, dutyIndex) in project.duty" :key="dutyIndex">{{duty}}</li>
                      </div>
                    </div>
                    <div class="container-description">
                      <div class="description">技术要点：</div>
                      <div class="description-text">
                        <li class="text-points" v-for="(points, pointsIndex) in project.points" :key="pointsIndex">{{points}}</li>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="project-radius">
              <li class="radius-white" :class="{'active': proIndex === pointsIndex}" v-for="(project, proIndex) in projectArray" :key="proIndex"></li>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="common" style="background: url('/static/images/bgm.png') #333333">
          <div class="contact">
            <div class="contact-title">联系我</div>
            <div class="contact-container">找人，而不是招人。最优秀的人，肯定不是靠流程找来的，是靠伯乐去找的。</div>
            <div class="contact-copy">
              <a href="http://www.beian.gov.cn/portal/index.do" target="_blank">
                @Allen | 浙ICP备19039048号-1
              </a>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="index-radius">
      <li class="radius" v-for="(radius, index) in radiusArray" :key="index">
        <div class="radius-container" :class="{'select': index === getIndex}" @click="clickIndex(index)">
          <img :src="radius.img" class="container-img"/>
        </div>
      </li>
    </div>
    <div class="index-arrow"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Index',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    const self = this
    return {
      swiperOption: {
        notNextTick: true,
        direction: 'vertical',
        height: window.innerHeight,
        pagination: {
          el: '.swiper-pagination'
        },
        slidesPerView: 'auto',
        centeredSlides: true,
        index: 1,
        paginationClickable: true,
        spaceBetween: 0,
        on: {
          slideChangeTransitionEnd: function () {
            self.getIndex = this.activeIndex
            let indexArrow = document.getElementsByClassName('index-arrow')
            if (this.activeIndex === 5) {
              indexArrow[0].style.display = 'none'
            } else {
              indexArrow[0].style.display = 'block'
            }
          }
        }
      },
      swiperOptions: {
        notNextTick: true,
        direction: 'horizontal',
        height: window.innerHeight,
        pagination: {
          el: '.swiper-pagination'
        },
        slidesPerView: 'auto',
        centeredSlides: true,
        index: 1,
        paginationClickable: true,
        spaceBetween: 0,
        on: {
          slideChangeTransitionEnd: function () {
            self.pointsIndex = this.activeIndex
          }
        }
      },
      swiperOptionsWork: {
        notNextTick: true,
        direction: 'horizontal',
        height: window.innerHeight,
        pagination: {
          el: '.swiper-pagination'
        },
        slidesPerView: 'auto',
        centeredSlides: true,
        index: 1,
        paginationClickable: true,
        spaceBetween: 0,
        on: {
          slideChangeTransitionEnd: function () {
            self.worksIndex = this.activeIndex
          }
        }
      },
      radiusArray: [
        {img: '/static/images/home.svg', name: '首页'},
        {img: '/static/images/info.svg', name: '关于我'},
        {img: '/static/images/skills.svg', name: '技术栈'},
        {img: '/static/images/exp.svg', name: '经历'},
        {img: '/static/images/work.svg', name: '作品集'},
        {img: '/static/images/contact.svg', name: '联系我'}
      ],
      infoArray: [
        {img: '/static/images/age.svg', text: '年龄/23'},
        {img: '/static/images/person.svg', text: '学历/大专'},
        {img: '/static/images/address.svg', text: '坐标/杭州'},
        {img: '/static/images/status.svg', text: '状态/离职'}
      ],
      itemArray: [
        {text: 'Webpack'},
        {text: 'JQuery'},
        {text: 'Html'},
        {text: 'Stylus'},
        {text: 'Git'},
        {text: 'Es6'},
        {text: 'Sass'},
        {text: 'Echarts'}
      ],
      itemInSideArray: [
        {text: 'Vue'},
        {text: '小程序'},
        {text: 'react'},
        {text: 'node'}
      ],
      projectArray: [
        {data: '2019.12 -- 2020.01', name: '社区优享后台管理系统', description: '社区优享后台，主要分为社区服务、商品中心、积分、订单管理、活动、添加标签六大模块，为管理员提供新增商品信息、商品添加标签、订单管理等功能，包括活动中的商品是否是团购商品，是否满减、优惠券等功能', address: 'http://manager.jlzhsq.cn/#/', duty: ['自主搭建前端页面效果实现产品功能，确保产品具有优质的用户使用体验'], points: ['使用vue-element-admin构建前端基本页面', '掌握vue全家桶', '丰富的前端经验，懂得商城产品流程']},
        {data: '2019.11.15 -- 2019.12', name: '东方设计有限公司官网', description: '浙江省东方建筑设计有限公司官网，主要从首页、关于东方、东方案例、主营业务、社会关注、设计村六大模块介绍公司信息', address: 'http://www.zjead.cn/', duty: ['配合后端开发人员实现产品前端页面效果功能，确保产品具有优质的用户使用体验'], points: ['响应式搭建网站框架，适配h5、pc、ipad版本', '掌握HTML、CSS、JavaScript 等基本语法']},
        {data: '2019.10 -- 2019.11.15', name: '社区优享小程序', description: '社区优享是一款社区新零售服务云平台在微信小程序上的实现，包括普通商品、拼团商品、秒杀商品的销售流程以及购物流程、用户中心等模块。主要为用户提供商品加购、支付、订单查看等功能', duty: ['参与产品需求讨论，负责项目开发，配合后端开发人员实现产品前端页面效果功能', '实现产品UI和交互方面的开发需求，确保产品具有优质的用户使用体验'], points: ['基于小程序原生MINA开框架开发，页面采用Flex弹性布局，以模块化形式分工开发', '微信特有的API、组件', '掌握HTML、CSS、JavaScript 等基本语法']},
        {data: '2019.09 -- 2019.10', name: '黑匣子插件', description: '项目是一个淘宝生意参谋指数换算工具，主要分为首页、指数换算、会员积分、分销赚钱、联系我们五个模块', duty: ['前后端分离，实现基本页面搭建并且通过请求API对淘宝生意参谋数据进行转化'], points: ['实现用户登录/注册/忘记密码功能', '跳转支付宝支付功能', '通过API对生意参谋数据转化然后进行展示', '使用vue-cli脚手家实现项目的快速搭建', '使用vue-router进行页面路由跳转，实现单页面应用', '使用npm进行webapck打包，优化首屏加载，使用按需加载', 'Nginx部署线上发布环境']},
        {data: '2019.07 -- 2019.08', name: '文本分析技术演示', description: '项目是一个文本分析技术演示，快速和直观的查看我们的NLP算法能力。', address: 'https://nlpdemo.lanmudata.com', duty: ['前后端分离以及通过视图进行数据展示'], points: ['使用vue-cli脚手家实现项目的快速搭建', '使用vue-router进行页面路由跳转，实现单页面应用', '使用Echarts 对数据进行视图展示', '使用npm进行webapck打包，优化首屏加载，使用按需加载', 'Nginx部署线上发布环境']},
        {data: '2019.05 -- 2019.06', name: '熊客商城后台管理系统', description: '该项目是一个后台管理系统，主要分为概况、店铺、商品、订单、客户、资产六个模块，为管理员提供新品发布、商品上下架、商品录入、订单管理、查看物流、店铺信息等功能。', duty: ['前后端分离负责后台管理系统功能与流程'], points: ['使用filter对数据进行过滤和提取', '使用Element-UI 搭建基本页面效果', '使用axios拦截器完成拦截登录，token完成拦截登录', '使用vue-cli脚手家实现项目的快速搭建', '使用vue-router进行页面路由跳转，实现单页面应用', '使用npm进行webapck打包，优化首屏加载，使用按需加载']},
        {data: '2019.03 -- 2019.04', name: '熊分享小程序商城', description: '熊分享小程序商城是一个微商城，主要分三个模块，首页、购物车、我的三个模块，主要为用户提供登录、选择商品规格、加入购物车、金额结算、订单支付等功能', duty: ['主要负责商城页面开发与用户交互'], points: ['采用小程序原生方式开发小程序', '页面采用Flex弹性布局，以组件化形式开发', '实现微信支付功能', '使用分包加载，优化项目', '使用 Vant Weapp 的小程序版本']},
        {data: '2019.02 -- 2019.03', name: '熊分享h5商城', description: '熊分享h5商城是一个微商城，主要分三个模块，首页、购物车、我的三个模块，主要为用户提供登录、选择商品规格、加入购物车、金额结算、订单支付等功能', address: 'http://h5.xkxfx.com/brand_index_app?type=0', duty: ['主要负责商城页面开发与用户交互'], points: ['页面采用Flex弹性布局，以组件化形式开发', '使用vue-lazyload实现懒加载，并且优化用户体验', '使用 Vux 搭建基本页面效果', '使用axios实现拦截请求和响应', '实现微信、支付宝支付功能', '使用vue-router进行页面之间路由跳转', '使用npm进行webapck打包，优化首屏加载，使用按需加载']},
        {data: '2019.01 -- 2019.01.15', name: '熊客集团官网', description: '熊客集团以及子公司业务介绍，管理层信息的展示', address: 'http://www.xiongke.com', duty: ['主页面搭建，兼容pc端和h5'], points: ['负责静态页面的搭建', '使用css3添加页面动画', '优化首屏加载，页面按需加载']}
      ],
      workArray: [
        {data: '2018 / 10 — 2019 / 10', company: '熊客集团', position: '技术部/web前端工程师', skills: 'Vue Es6 Webpack Element Vux 小程序', responsibilities: ['负责公司电商前端后台订单管理和h5商城功能实现', '使用Vue组件化开发', '开发熊分享商城等小程序', '负责公司pc端定制化开发，文本分析技术演示、电商黑匣子等', '公司响应式官网开发']},
        {data: '2019 / 10 — 2020 / 01', company: '戊辛科技（外包）', position: '技术部/web前端工程师', skills: 'Node React Vue Es6 Webpack Element Vux 小程序', responsibilities: ['负责社区优享小程序和前端小程序后台管理', '公司响应式官网开发']}
      ],
      getIndex: 0,
      pointsIndex: 0,
      worksIndex: 0
    }
  },
  computed: {
    // 初始化获得swiper
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    clickIndex (index) {
      this.getIndex = index
      this.swiper.slideTo(index, 1000, false)
      let indexArrow = document.getElementsByClassName('index-arrow')
      if (index === 5) {
        indexArrow[0].style.display = 'none'
      } else {
        indexArrow[0].style.display = 'block'
      }
    },
    getRgb (itemArray) {
      let bgmColor = ''
      itemArray.forEach((item) => {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        bgmColor = `rgb( ${r}, ${g}, ${b}, 0.8)`
        item.bgmColor = bgmColor
      })
    },
    skill (type) {
      if (type && type === 'inside') {
        let itemArray = this.itemInSideArray
        this.getRgb(itemArray)
        this.itemInSideArray = itemArray
      } else {
        let itemArray = this.itemArray
        this.getRgb(itemArray)
        this.itemArray = itemArray
      }
    }
  },
  mounted () {
    this.skill()
    this.skill('inside')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/css/reset.styl'
  .swiper-pagination {
    position: fixed;
  }
  .swiper-pagination-bullets {
    top: 100px !important;
  }
  @keyframes outX {
    0% {
      left: -25px;
    }

    100% {
      left: 246px;
    }
  }
  @keyframes outY {
    0% {
      top: -25px;
    }

    100% {
      top: 246px;
    }
  }
  @keyframes innerX {
    0% {
      left: -20px;
    }

    100% {
      left: 138px;
    }
  }
  @keyframes innerY {
    0% {
      top: 138px;
    }

    100% {
      top: -20px;
    }
  }
  @keyframes arrow {
    0% {
      opacity: 0;
      transform: translate(0,-10px);
    }
    50% {
      opacity: 1;
      transform: translate(0px,0);
    }
    100% {
      opacity: 0;
      transform: translate(0,10px);
    }
  }
  .flex-row
    display flex
    align-items center
    flex-direction row
    justify-content center
  .index
    width 100%
    height: 100%
    background-color $white
    .common
      display block
      width 100%
      height 100vh
      position relative
      background-repeat no-repeat
      background-size cover
      background-position center
      .home
        position absolute
        left 10vw
        right 10vw
        top 50%
        transform translateY(-50%)
        .home-introduce
          color $white
          .introduce
            position relative
            .introduce-img
              display block
              margin 0 auto
              width 150px
              height 150px
              border-radius 50%
          .introduce-text
            padding-top 10px
            .introduce-quote
              font-size 22px
              padding 20px 0
              margin 22px 0
              border-bottom 1px solid hsla(0, 0%, 100%, 0.6)
            .introduce-list
              font-size 18px
              p
                padding 10px 0
                text-align center
      .about
        position absolute
        left 5vw
        right 5vw
        top 50%
        transform translateY(-50%)
        .about-main
          max-width 800px
        .about-title
          width 100%
          font-size 24px
          text-align center
          color $white
        .about-main
          margin 50px auto
          width 100%
          height 138px
          display flex
          align-items center
          justify-content space-between
          .main-info
            width 100px
            height 138px
            .info-text
              width 100%
              display block
              height 48px
              line-height 48px
              text-align center
              color $white
            .info-border
              margin 0 auto
              width 90px
              height 90px
              border-radius 50%
              background-color hsla(0,0%,100%,.1)
              position relative
              cursor pointer
              transition 1.3s
              color #fff
              .info-img
                width 50%
                position absolute
                left 25%
                top 25%
        .about-introduce
          p
            line-height 40px
            color $white
            text-align center
      .skills
        .skills-container
          position relative
          display flex
          justify-content space-between
          flex-direction row
          flex-wrap wrap
          margin 50px auto
          max-width 800px
          .container-left
            position relative
            .left-out
              width 265px
              height 265px
              font-size 12px
              border 3px dashed #999
              border-radius 50%
              .item
                position absolute
                color $white
                width 50px
                height 50px
                text-align center
                line-height 50px
                border-radius 50%
              .item:first-child
                animation: outX 8s cubic-bezier(.36,0,.64,1) -4s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) 0s infinite alternate;
              .item:nth-child(2)
                animation: outX 8s cubic-bezier(.36,0,.64,1) -6s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -2s infinite alternate;
              .item:nth-child(3)
                animation: outX 8s cubic-bezier(.36,0,.64,1) -8s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -4s infinite alternate;
              .item:nth-child(4)
                animation: outX 8s cubic-bezier(.36,0,.64,1) -10s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -6s infinite alternate;
              .item:nth-child(5)
                animation: outX 8s cubic-bezier(.36,0,.64,1) -12s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -8s infinite alternate;
              .item:nth-child(6)
                animation: outX 8s cubic-bezier(.36,0,.64,1) -14s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -10s infinite alternate;
              .item:nth-child(7)
                animation: outX 8s cubic-bezier(.36,0,.64,1) -16s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -12s infinite alternate;
              .item:nth-child(8)
                animation: outX 8s cubic-bezier(.36,0,.64,1) -18s infinite alternate,outY 8s cubic-bezier(.36,0,.64,1) -14s infinite alternate;
            .left-inner
              width 158px
              height 158px
              font-size 12px
              border 3px dashed #999
              border-radius 50%
              position: absolute
              top 50%
              left 50%
              transform translateX(-50%) translateY(-50%)
              .item-inside
                position absolute
                color $white
                width 40px
                height 40px
                text-align center
                line-height 40px
                border-radius 50%
              .item-inside:first-child
                animation: innerX 8s cubic-bezier(.36,0,.64,1) -4s infinite alternate,innerY 8s cubic-bezier(.36,0,.64,1) 0s infinite alternate
              .item-inside:nth-child(2)
                animation: innerX 8s cubic-bezier(.36,0,.64,1) -8s infinite alternate,innerY 8s cubic-bezier(.36,0,.64,1) -4s infinite alternate
              .item-inside:nth-child(3)
                animation: innerX 8s cubic-bezier(.36,0,.64,1) -12s infinite alternate,innerY 8s cubic-bezier(.36,0,.64,1) -8s infinite alternate
              .item-inside:nth-child(4)
                animation: innerX 8s cubic-bezier(.36,0,.64,1) -16s infinite alternate,innerY 8s cubic-bezier(.36,0,.64,1) -12s infinite alternate
          .container-right
            font-size 16px
            color $white
            margin auto 0
            p
              text-align center
              display block
              margin 16px auto
      .work
        min-height 320px
        .project-radius
          display flex
          justify-content center
          align-items center
          margin-top 20px
          height 20px
          .radius-white
            margin 0 3px
            width 10px
            height 10px
            opacity 0.3
            line-height 10px
            color $white
            list-style-type disc
            border-radius 50%
            &.active
              opacity 1
        .work-container
          height auto
          .container-time
            display flex
            justify-content center
            margin 50px auto
            .time
              position relative
              width 180px
              height 30px
              line-height 30px
              background-color $arrow
              font-size 14px
              text-align center
              margin-right 25px
              color $white
            .time:after
              position absolute
              content ""
              border 15px solid rgba(0,0,0,0)
              border-left-color $arrow
              right -30px
              top 0
            .time-undergo
              padding-left 15px
              position relative
              padding-bottom 40px
              color $white
              .time-phone
                display none
              .undergo-company
                font-size 22px
              .undergo-post
                display block
                line-height 50px
              .undergo-list
                margin-top 20px
                li
                  height auto
                  line-height 22px
                  font-size 14px
            .time-undergo:before
              position absolute
              content ""
              width 5px
              height 5px
              background-color $white
              border-radius 50%
              left 0
              top 13px
              z-index 2
              color $white
            .time-undergo:after
              position absolute
              content ""
              width 1px
              height 90%
              background-color $arrow
              left 2px
              top 15px
              z-index 1
      .project
        .project-radius
          display flex
          justify-content center
          align-items center
          margin-top 20px
          height 20px
          .radius-white
            margin 0 3px
            width 10px
            height 10px
            opacity 0.3
            line-height 10px
            color $white
            list-style-type disc
            border-radius 50%
            &.active
              opacity 1
        .project-container
          height 490px
          .container
            height 490px
            padding 0 20px
            color $white
            max-width 900px
            margin 30px auto 0
            .container-title
              display flex
              justify-content space-between
            .container-link
              color $white
              display block
              margin 15px 0
              line-height 20px
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
              word-break break-all
            .container-description
              margin-top 15px
              .description
                padding-left 20px
                position relative
                display flex
                align-items center
                font-weight bold
              .description:before
                content ""
                left 0
                position absolute
                border 2px solid $white
                width 10px
                height 10px
                transform rotate(45deg)
                border-right none
                border-top none
              .description-text
                font-size 14px
                line-height 22px
                margin-top 15px
                .text-points
                  list-style-type disc
                .text-index
                  text-indent 2em
      .contact
        height 100vh
        color $white
        width 100%
        .contact-title
          padding 50px 0
          font-size 24px
          text-align center
        .contact-container
          padding 0 50px
          font-size 16px
          line-height 22px
          text-indent 2em
        .contact-copy
          position absolute
          width 100%
          height 40px
          border-top 1px solid $white
          font-size 14px
          line-height 40px
          text-align center
          bottom 0
          a
            text-decoration none
            color $white
    .index-radius
      height 192px
      margin-top -96px
      position fixed
      top 50%
      right 20px
      z-index 1000
      color #fff
      .radius
        width 32px
        height 32px
        position relative
        border 1px solid transparent
        cursor pointer
        display flex
        align-items center
        justify-content center
        .radius-container:hover
          transform: scale(4)
        .radius-container
          width 8px
          height 8px
          display flex
          align-items center
          justify-content center
          background rgba(0,0,0,0.6)
          background-size cover
          border-radius 50%
          transition all 0.3s
          transform-origin 50% 50%
          &.select
            transform: scale(4)
          .container-img
            width 6px
            height 6px
            margin auto
            display block
    .index-arrow
      position fixed
      bottom 20px
      height 30px
      width 100%
      background url(/static/images/arrow.svg) no-repeat 50%
      background-size 20px 100%
      z-index 100
      margin auto
      animation arrow 2s linear infinite alternate
  @media screen and (max-width: 668px)
    .index
      /*.index-radius*/
      /*  display none*/
      .common
        .home
          .home-introduce
            .introduce-text
              .introduce-quote
                margin 22px auto
                width 300px
                font-size 18px
        .about
          left 0
          right 0
          margin 0 auto
          width 100%
          .skills-container
            display flex
            justify-content center
            align-items center
            margin 50px 0 0 0
            .container-right
              margin-top 30px
          .about-main
            width 300px
            .main-info
              width 70px
              height 70px
              font-size 14px
              .info-border
                width 60px
                height 60px
        .work
          .work-container
            .container-time
              display flex
              width 100%
              padding 0 10px
              box-sizing border-box
              justify-content center
              .time
                display none
              .time-undergo
                padding-left 5px
                .undergo-company
                  margin-top 20px
                .undergo-left
                  margin-left 12px
                .time-phone
                  width 204px
                  height 24px
                  display flex
                  .phone-arrow
                    width 0
                    height 0
                    border 12px solid transparent
                    border-right-color $arrow
                  .phone-line
                    line-height 24px
                    width 180px
                    height 24px
                    background-color $arrow
</style>
