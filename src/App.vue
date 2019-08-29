<template>
  <div class="container">
    <div id="appLoading" v-show="isLoad">
      <img src="static/timg.gif" />
    </div>
    <div class="header">
      艾科测试监控平台
      <div id="show-time">{{ date | formatDate }}</div>
    </div>
    <div class="content">
      <div class="page-left-bd">
        <div class="left-top-status" v-if="testStatus">
          <div class="block-title">测试任务</div>
          <div class="status-box">
            <!-- <div class="status-item" v-for="(value, name) in testStatus" :key = "value.id">
							<div class="title">{{ name }}</div>
							<div class="count">{{ value }}</div>
            </div>-->
            <div class="status-item">
              <div class="title">进行中</div>
              <div class="count">{{ testStatus.进行中 }}</div>
            </div>
            <div class="status-item">
              <div class="title">未开始</div>
              <div class="count">{{ testStatus.未开始 }}</div>
            </div>
            <div class="status-item">
              <div class="title">全部</div>
              <div class="count">{{ testStatus.全部 }}</div>
            </div>
            <div class="status-item">
              <div class="title">已完成</div>
              <div class="count">{{ testStatus.已完成 }}</div>
            </div>
          </div>
        </div>
        <AutoTestReport :chart-data="autoTestReport" v-if="autoTestReport"></AutoTestReport>
      </div>
      <div class="page-right-bd">
        <BugSeverity :chart-data="bugSeverity" v-if="bugSeverity"></BugSeverity>
        <BugStatus :chart-data="bugStatus" v-if="bugStatus"></BugStatus>
      </div>
    </div>
  </div>
</template>

<script>
import BugSeverity from "./components/BugSeverity";
import BugStatus from "./components/BugStatus";
import AutoTestReport from "./components/AutoTestReport";
import "babel-polyfill";
export default {
  name: "Index",
  components: {
    BugSeverity,
    BugStatus,
    AutoTestReport
  },
  data() {
    return {
      date: new Date(),
      isLoad: true,
      testStatus: null,
      bugSeverity: null,
      bugStatus: null,
      autoTestReport: null
    };
  },
  filters:{
    formatDate(date1){
      let year=date1.getFullYear();
      let month=date1.getMonth()+1;
      let day=date1.getDate();
      let hours=date1.getHours();
      let minutes=date1.getMinutes();
      let seconds=date1.getSeconds();
      return year+"/"+month+"/"+day+" "+hours+":"+minutes+":"+seconds;
    }
  },
  created() {
    this.getInitData();
  },
  mounted() {
    let _this = this;
    this.timer = setInterval(() => {
      _this.date = new Date();

    }, 1000);
    setTimeout(() => {
      this.getInitData();
    }, 60 * 60 * 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    padDate(){
      return value <10 ? '0' + value:value;
    },
    async getInitData() {
      const [
        testStatus,
        bugSeverity,
        bugStatus,
        autoTestReport
      ] = await Promise.all([
        this.getTestStatus(),
        this.getBugSeverity(),
        this.getBugStatus(),
        this.getAutoTestReport()
      ]);
      this.isLoad = false;
      this.testStatus = [testStatus, bugSeverity, bugStatus, autoTestReport][0];
      this.bugSeverity = [
        testStatus,
        bugSeverity,
        bugStatus,
        autoTestReport
      ][1];
      this.bugStatus = [testStatus, bugSeverity, bugStatus, autoTestReport][2];
      this.autoTestReport = [
        testStatus,
        bugSeverity,
        bugStatus,
        autoTestReport
      ][3];
    },
    getTestStatus() {
      return this.$httpGet("testTask/");
    },
    getBugSeverity() {
      return this.$httpGet("bugSeverity/");
    },
    getBugStatus() {
      return this.$httpGet("bugStatus/");
    },
    getAutoTestReport() {
      return this.$httpGet("autoTestReport/");
    }
  }
};
</script>
