<template>
  <div>
    <!-- 分享图片 -->
    <div class="share-pic">
      <img src="../assets/images/share.gif" alt="">
    </div>

    <!-- 头部 -->
    <header>
      <h1>墨浓设计</h1>
      <span class="top-wx-code">微信号: a13585990778</span>
      <div class="top-wx-code-wrap">
        <img src="../assets/images/top-Qrcode.png" alt="">
        <span>长按识别二维码<br>免费索取方案</span>
      </div>
      <div class="tel-link-wrap clearfix">
        <p class="tel-wrap fl">
          <strong>点击拨打</strong><br>
          <a class="link-el" href="tel:021-52185155">021-52185155</a><br>
          <a class="link-el" href="tel:13585990778">13585990778</a>
        </p>
        <p class="web-link-wrap fl">
          <strong>点击</strong><br>
          <a class="link-el"  href="http://www.shmoon.cn/" target="_blank">官网入口</a>
        </p>
      </div>
    </header>

    <!-- banner -->
    <template>
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
            <img src="../assets/images/banner-pic-01.jpg"/>
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/images/banner-pic-02.jpg"/>
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/images/banner-pic-03.jpg"/>
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/images/banner-pic-04.jpg"/>
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/images/banner-pic-05.jpg"/>
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/images/banner-pic-06.jpg"/>
        </swiper-slide>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </template>

    <!-- 网站介绍 -->
    <div class="web-des-wrap">
        <h2>MOON DESIGN</h2>
        <div>
          <p v-html="content1"></p>
          <p v-html="content2"></p>
        </div>
    </div>

    <!-- 特点 -->
    <div class="feature-item-wrap">
      <ul>
        <li>
          <p>与<strong>“新零售”</strong>概念<strong>同步起航</strong></p>
          <p>在不断摸索与实践中始终伫立“新零售”前沿</p>
          <p class="bdt-line">新零售超市领域独到见解，提供最新的趋势信息及建议</p>
        </li>
        <li>
          <p>从始至今，为<strong>盒马鲜生设计80%</strong>项目</p>
          <p>助力盒马成为行业引领者</p>
          <p class="bdt-line">盒马信赖的合作伙伴，您值得信赖</p>
        </li>
        <li>
          <p>累计<strong>拥有100+城市，300+超设计经验</strong></p>
          <p class="bdt-line">根据您地区、用户群体、策略，给您提供合适的解决方案</p>
        </li>
        <li>
          <p>拥有<strong>外籍</strong>，以及国内<strong>超市行业资深设计师</strong></p>
          <p class="bdt-line">提供前沿的创新设计，融入运营理念的规划</p>
        </li>
        <li>
          <p>从<strong>业态</strong>到<strong>商业定位</strong>，从<strong>方案</strong>到<strong>施工一站式</strong>，服务</p>
          <p class="bdt-line">提高速度，控制成本</p>
        </li>
      </ul>
    </div>

    <!-- 步骤 -->
    <div class="step-wrap">
      <h2 class="line-title">
        我们的服务
        <span>OUR SERVICES</span>
      </h2>
      <ul>
        <li v-for="(item,index) in pageData.spaceContent" :key="index">
          <h3>{{ item.title }}</h3>
          <span v-for="(item1,index1) in item.items" :key="index1">{{ item1.itemName }}</span>
        </li>
      </ul>
    </div>

    <!-- 服务流程 -->
    <div class="service-wrap">
      <h2 class="line-title">
        服务流程
        <span>SERVICE PROCESS</span>
      </h2>
      <ul class="clearfix">
        <li v-for="(item,index) in pageData.serviceList" :key="index">
          <span>{{ item.titleIndex }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.subTitle }}</p>
        </li>
      </ul>
    </div>

    <!-- 客户 -->
    <div class="customer">
      <h2 class="line-title">
        合作伙伴
        <span>THE CLASSICAL CUSTOMER</span>
      </h2>
      <img src="../assets/images/customer-pic.jpg" alt="">
    </div>

    <!-- 行业案例 -->
    <div class="work" id="works">
      <h2 class="line-title">
        行业案列
        <span>INDUSTRY CASE</span>
      </h2>
      <ul class="tab-wrap clearfix">
        <li  v-for="(item,index) in pageData.footBar" :key="index" @click="handlerIndex(index,'tab')" :class="{'active':tabIndex == index}">
          <strong>{{ item.title }}</strong>
          <span>{{ item.Etitle }}</span>
        </li>
      </ul>
      <div class="tab-content-wrap" v-if='worksData[tabIndex]'>
        <h4>
          <strong>{{ worksData[tabIndex].title }}</strong>
          <span>{{ worksData[tabIndex].Etitle }}</span>
        </h4>
        <p class="des" v-html="worksData[tabIndex].des"></p>
        <ul>
          <li v-for="(item,index) in worksData[tabIndex].items" :key="index">
            <img :src="item.imgUrl" alt="">
            <strong>{{ item.name }}</strong>
            <span>{{ item.itemDes }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 底部 -->
    <footer class="clearfix">
      <div class="mn-gz-code">
        <img src="../assets/images/mn-gzh-code.png" alt="">
        <p>墨浓公众号</p>
      </div>
      <div class="company-info">
        <strong>上海墨浓建筑设计有限公司</strong>
        <p>Shanghai Moon Architectural Design Co.,Ltd</p>
      </div>
      <div class="company-address">
        <strong>中国 . 上海市长宁区延安西路1600号禾森商务中心3楼308-309</strong>
        <p>Room 308-309 West Yanan Rood 1600,Changning<br>  District,Shanghai,</p>
      </div>
      <div class="footer-left">
        <div class="web-email">
          <strong>免费索取方案</strong>
          <p><a href="mailto:sy@sjtupa.cn">sy@sjtupa.cn</a></p>
          <p><a href="http://www.shmoon.cn/" target="_blank">www.shmoon.cn</a></p>
        </div>
        <div class="wx">
          <img src="../assets/images/footer-wx-code.png" alt="">
          <p>长按识别图中二维码</p>
        </div>
      </div>
      <div class="footer-right">
        <div class="tel">
          <strong>点击拨打</strong>
          <strong><a href="tel:021-52185155">021-52185155</a></strong>
        </div>
        <div class="tel">
          <strong>点击拨打</strong>
          <strong><a href="tel:135 8599 0778">135 8599 0778</a></strong>
        </div>
      </div>

    </footer>

    <div class="empty-block" style="width:100vw;height:70px;background:#ebecec;"></div>

    <!-- foot-bar -->
    <ul class="foot-bar">
      <li  v-for="(item,index) in pageData.footBar" :key="index" @click="handlerIndex(index,'bar')" :class="{'active':barIndex == index}">
        <a href="#works">
          <strong>{{ item.title }}</strong>
          <span>{{ item.Etitle }}</span>
        </a>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      pageData:{},
      worksData:{},
      worksList:[],
      tabIndex:0,
      barIndex:0,
      content1:'',
      content2:'',
      swiperOption: {
        pagination:'.swiper-pagination',paginationClickable :true,
        autoplay: 2500,
        speed:300,
        loop:true
      }
    }
  },
  created() {
      this.$Axios.get(`static/content.json`).then((res)=>{
          this.pageData = res.data;
            this.content1 = this.pageData.companyDes.content1;
            this.content2 = this.pageData.companyDes.content2;

      }).catch((err)=>{
          console.log(err,"获取基本信息有误！")
      });

      this.$Axios.get(`static/worksData.json`).then((res)=>{
          this.worksData = res.data.worksList;
      }).catch((err)=>{
          console.log(err,"获取基本信息有误！")
      });

  },
  methods:{
    handlerIndex(index,name){
      if(name == "tab"){
        this.tabIndex = index;
        this.barIndex = index;
      }else if(name == 'bar'){
        this.barIndex = index;
        this.tabIndex = this.barIndex;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
$color1:#16607f;
$color2:#b4a075;

header{
  padding: 0 40px;
  margin-bottom:  25px;
  height: 270px;
  position: relative;
  h1{
    width: 254px;
    height: 58px;
    text-indent: -9999px;
    background: #fff url(../assets/images/logo.png) 0 0 no-repeat;
    background-size: cover;
  }
  .top-wx-code{
    position: absolute;
    font-size: 22px;
    height: 32px;
    line-height: 32px;
    top: 0;
    right: 40px;
    padding-left: 42px;
    &:before{
      content: '';
      position: absolute;
      width: 33px;
      height: 27px;
      left: 0;
      top: 2px;
      background:  url(../assets/images/top-wx-icon.png) 0 0 no-repeat;
      background-size: cover;
    }
  }
  .top-wx-code-wrap{
    font-size: 20px;
    text-align: center;
    position: absolute;
    right: 40px;
    bottom: 0;
    img{
      width: 136px;
      height: 136px;
    }
    span{
      display: block;
    }
  }
  .tel-link-wrap{
    position: absolute;
    left: 40px;
    bottom: 0;
    text-align: left;
    p{
      strong{
        font-size: 26px;
        display: inline-block;
      }
      .link-el{
        color:$color1;
        font-size: 28px;

      }
      &.tel-wrap{
        padding-left: 60px;
        &:before{
          content:'';
          position: absolute;
          width: 48px;
          height: 48px;
          left: 0;
          top: 60px;
          background: url(../assets/images/top-tel-icon.png) 0 0 no-repeat;
          background-size: cover;
        }
      }
      &.web-link-wrap{
        padding-top: 28px;
        margin-left: 55px;
        strong{
          font-weight: 700;
          padding-bottom: 10px;
        }
        a{
          position: relative;
          padding: 10px 52px 10px 20px;
          color: #fff;
          background: $color1;
          border-radius: 30px;
          font-weight: 700;
          &:before{
            content:'';
            position: absolute;
            width: 17px;
            height:25px;
            top: 15px;
            right: 22px;
            background: url(../assets/images/right-double-Arrow-icon.png) 0 0 no-repeat;
            background-size: cover;
          }
        }
      }
    }
  }
}

.wrapper{
  overflow:hidden;
  width:100%;
  height:0;
  padding-bottom:101.46667%;
  .swiper-img{
    width:100%;
  }
}

.web-des-wrap{
  width: 100%;
  height: 525px;
  padding: 70px 0 106px;
  text-align: center;
  font-size: 24px;
  background: url(../assets/images/bg-01.png) 0 0 no-repeat;
  background-size: cover;
  h2{
    width: 609px;
    height: 61px;
    margin-bottom: 20px;
    text-indent:-9999px;
    display: inline-block;
    background: url(../assets/images/h2-01-pic.png) 0 0 no-repeat;
    background-size: cover;
  }
  div{
    margin: 20px auto 0;
    width: 609px;
    font-size: 22px;
    p{
      text-align: left;
      line-height: 1.6em;
      &:last-child{
        padding-top: 30px;
        color: $color1;
        font-size: 29px;
      }
    }
  }
}

.feature-item-wrap{
  width: 100vw;
  text-align: left;
  ul{
    padding: 50px 40px 75px;
    li{
      padding-left: 85px;
      font-size: 27px;
      padding-bottom: 50px;
      position: relative;
      p{
        line-height: 1.8em;
        strong{
          font-size: 50px;
          font-weight: 700;
        }
        &.bdt-line{
          font-size: 21px;
          display: inline-block;
          color: $color1;
          padding-top: 5px;
          border-top: 6px solid  $color2;
        }
      }
      &:before{
        content:'';
        position: absolute;
        width:64px;
        height:64px;
        left: 0;
        top:20px;
        background: #fff url(../assets/images/feature-icon-01.png) 0 0 no-repeat;
        background-size: cover;
      }
      &:nth-child(2):before{
        background: #fff url(../assets/images/feature-icon-02.png) 0 0 no-repeat;
        background-size: cover;
      }
      &:nth-child(3):before{
        background: #fff url(../assets/images/feature-icon-03.png) 0 0 no-repeat;
        background-size: cover;
      }
      &:nth-child(4):before{
        background: #fff url(../assets/images/feature-icon-04.png) 0 0 no-repeat;
        background-size: cover;
      }
      &:nth-child(5):before{
        background: #fff url(../assets/images/feature-icon-05.png) 0 0 no-repeat;
        background-size: cover;
      }
    }
  }
}

.step-wrap{
  width: 750px;
  height: 542px;
  padding: 45px 0 106px;
  text-align: center;
  font-size: 24px;
  background: url(../assets/images/bg-02.png) 0 0 no-repeat;
  background-size: cover;
  h2{
    color: #fff;
    &.line-title{
      padding-top: 0;
      margin-bottom: 80px;
      &:before,&:after{
        top: 30%;
        background: #ffffff;
      }
    }
  }
  ul{
    display: flex;
    padding: 0 30px;
    li{
      flex: 1;
      text-align: center;
      color: #fff;
      position: relative;
      padding-top: 65px;
      h3{
        font-size: 24px;
        padding-bottom: 40px;
      }
      span{
        font-size: 19px;
        display: block;
        padding: 5px 0;
      }
      &:last-child{
        flex: 1.3;
      }
      &:before{
        content: '';
        position:absolute;
        top: 0;
        left: 50%;
        margin: -40px;
        width: 79px;
        height: 79px;
        background: url(../assets/images/service-icon-01.png) 0 0 no-repeat;
        background-size: cover;
      }
      &:nth-child(2):before{
        background: url(../assets/images/service-icon-02.png) 0 0 no-repeat;
        background-size: cover;
      }
      &:nth-child(3):before{
        background: url(../assets/images/service-icon-03.png) 0 0 no-repeat;
        background-size: cover;
      }
      &:nth-child(4):before{
        background: url(../assets/images/service-icon-04.png) 0 0 no-repeat;
        background-size: cover;
      }
      &:nth-child(5):before{
        background: url(../assets/images/service-icon-05.png) 0 0 no-repeat;
        background-size: cover;
      }
    }
  }
}

.service-wrap{
  padding:50px 0;
  background: #eeefef;
  ul{
    padding: 0 75px;
    li{
      width: 40%;
      float: left;
      position: relative;
      text-align: left;
      padding-left: 42px;
      margin-bottom: 40px;
      span{
        position: absolute;
        left: 0;
        top:50%;
        margin-top: -16px;
        width: 32px;
        height: 32px;
        text-align: center;
        line-height: 36px;
        font-size: 24px;
        color: #ffffff;
        border-radius: 50%;
        background: #898989;
      }
      h3{
        font-size: 24px;
      }
      p{
        font-size: 12px;
      }
      &:nth-child(2n+1){
        margin-right: 6%;
      }
    }
  }
}

.customer{
  img{
    width: 668px;
    height: 1274px;
    display: block;
    margin: 0 auto 100px;
  }
}

.work{
  .line-title{
    padding: 10px 0;
    color: #fff;
    background: $color1;
    &:before,&:after{
      width: 0;
      height: 0;
    }
  }
  .tab-wrap{
    padding: 60px 75px 20px;
    li{
      width: 165px;
      height: 165px;
      font-size: 38px;
      color: #ffffff;
      text-align: center;
      border-radius: 50%;
      background: #898989;
      float: left;
      margin-right: 50px;
      margin-bottom: 20px;
      box-shadow: 10px 10px 24px #898989;
      &:nth-child(3){
        margin-right: 0;
      }
      &:nth-child(4){
        margin-left: 110px;
      }
      strong{
        display: block;
        padding-top: 40px;
      }
      span{
        font-size: 20px;
        display: block;
      }
      &.active{
        background: #b49a6d;
      }
    }
  }
}

.tab-content-wrap{
  padding:50px 40px 30px;
  h4{
    position: relative;
    margin-left: 20px;
    margin-bottom: 30px;
    padding-left: 18px;
    font-size: 38px;
    color: #b49a6d;
    text-align: left;
    span{
      font-size: 20px;
      display: block;
      color: #595757;
    }
    &:before{
      content: '';
      position: absolute;
      width: 6px;
      height: 70px;
      background: #b49a6d;
      left: 0;
      bottom: 5px;
    }
  }
  .des{
    font-size: 23px;
    text-align: left;
    line-height: 1.6em;
    padding: 0 20px 65px;
  }
  ul{
    li{
      text-align: left;
      margin-bottom: 60px;
      img{
        width: 667px;
        height: 334px;
        margin: 0 auto;
      }
      strong{
         font-size: 24px;
         display: block;
         padding-top: 20px;
      }
      span{
        font-size: 18px;
      }
    }
  }
}

.line-title{
  position: relative;
  padding: 50px 0;
  font-size: 22px;
  text-align: center;
  span{
    display: block;
    font-size: 16px;
    margin-top: 10px;
  }
  &:before,&:after{
    content:'';
    position: absolute;
    width: 242px;
    height: 2px;
    top: 50%;
    margin-top: -15px;
    background: #9a9999;
  }
  &:before{
    right:50px;
  }
  &:after{
    left:50px;
  }
}

footer{
  padding: 65px 65px 0;
  background: #ebecec;
  .mn-gz-code{
    margin-bottom: 50px;
    img{
      width: 240px;
      height: 240px;
      display: block;
      margin: 0 auto 20px;
    }
    p{
      font-size: 28px;
    }
  }
  .company-info,.company-address{
    font-size: 22px;
    margin-bottom: 35px;
    strong{
      font-weight: 700;
    }
    p{
      display: block;
      padding-top: 14px;
      font-size: 18px;
    }
  }
}

.footer-left,.footer-right{
  padding-top: 20px;
  float: left;
  width: 50%;
  text-align: left;
  .web-email{
    p{
      padding-left: 40px;
      position: relative;
      display: inline-block;
      margin-bottom: 15px;
      a{
        color: #595757
      }
      &:before{
        content:'';
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -11px;
        width: 32px;
        height: 23px;
        background:  url(../assets/images/email-icon.png) 0 0 no-repeat;
        background-size: cover;
      }
      &:last-child:before{
        width: 27px;
        height: 21px;
        margin-top: -10px;
        background:  url(../assets/images/web-icon.png) 0 0 no-repeat;
        background-size: cover;
      }
    }
  }
  .wx{
      position: relative;
      img{
        width: 152px;
        height: 152px;
        display: block;
        margin: 20px 0 10px 45px;
      }
      p{
        padding-left: 30px;
        font-size: 20px;
      }
      &:before{
        content:'';
        position: absolute;
        width: 36px;
        height: 29px;
        background:  url(../assets/images/wx-icon.png) 0 0 no-repeat;
        background-size: cover;
      }
    }
  .tel{
    position: relative;
    font-size: 30px;
    padding-top: 65px;
    strong{
      padding: 0;
      font-size: 30px;
      a{
        color: #595757;
      }
      &:last-child{
        font-size: 38px;
      }
    }
    &:before{
      content: '';
      position: absolute;
      width: 60px;
      height: 60px;
      top: 0;
      left: 0;
      background:  url(../assets/images/tel-icon.png) 0 0 no-repeat;
      background-size: cover;

    }
    &:first-child{
      padding-bottom: 30px;
    }
  }
  strong{
    display: inline-block;
    font-size: 34px;
    font-weight: 700;
    padding-bottom: 15px;
  }
  p{
  font-size: 28px;
  }
}

.foot-bar{
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: flex;
  background: #898989;
  color: #ffffff;
  width: 100VW;
  height: 120px;
  li{
    flex: 1;
    font-size: 26px;
    padding-top: 30px;
    position: relative;
    a{
      color: #ffffff;
      strong{
        display: block;
        font-weight: 700;
      }
      span{
        font-size: 16px;
      }
    }
    &:after{
      content:'';
      position: absolute;
      width: 2px;
      height: 120px;
      background: #ffffff;
      top: 0;
      right: -1px;
    }
    &:last-child:after{
      width: 0;
      height: 0;
    }
    &.active{
      background: $color1;
    }
  }
}

.share-pic{
  position: fixed;
  top: -99999px;
  left: -99999px;
}
</style>
