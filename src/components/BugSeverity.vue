<template>
	<div class="right-top-bd" v-if="formatChartData.length">
		<div class="block-title">版本bug严重程序汇总</div>
		<div class="items-box">
			<div class="item" v-for="item in formatChartData" :key = "item.id">
				<ve-histogram
					:data="item.chartData"
					:settings="chartSetting"
					:extend="item.chartExtend"
					height="100%"
				></ve-histogram>
			</div>
		</div>
	</div>
</template>

<script>
import VeHistogram from 'v-charts/lib/histogram.common.js';
import 'echarts/lib/component/title';

export default {
	components: { VeHistogram },
	props: ['chartData'],
	data() {
		return {
			formatChartData: [],
			chartSetting: {}
		};
	},
	created() {
		this.formatInitChartData(this.chartData);
	},
	methods: {
		formatInitChartData(data) {
			let formatChartData = [];
			for (let key in data) {
				let row = [];
				for (let rkey in data[key]) {
					if (rkey !== '全部') {
						row.push({
							等级: rkey,
							数量: data[key][rkey]
						});
					}
				}
				const levelStep = ["建议", "轻微", "一般", "严重", "极其严重"]
				let formatRow = []
				levelStep.forEach(sitem => {
					let item = row.find(item => item['等级'] === sitem) 
					formatRow.push(item)
				})
				formatChartData.push({
					chartData: {
						columns: ['等级', '数量'],
						rows: formatRow
					},
					chartExtend: {
						title: {
							text: key,
							x: 'center',
							y: '12',
							textStyle: {
								color: '#fff',
								fontSize: 15
							}
						},
						grid: {
							left: 20,
							right: 20,
							bottom: 15
						},
						legend: {
							show: false
						},
						series: {
							label: { show: true, position: 'top' },
							barWidth: 25
						},
						textStyle: {
							color: '#fff'
						},
						xAxis: {
							axisLabel: {
								rotate: 30,
								margin: 12
							}
						}
					}
				});
			}
			this.formatChartData = formatChartData;
		}
	}
};
</script>
