<template>
	<div class="left-bottom-bd" v-if="formatChartData.length">
		<div class="block-title">自动化测试报告</div>
		<div class="items-box">
			<div class="item" v-for="item in formatChartData" :key = "item.id">
				<ve-pie
					:data="item.chartData"
					:settings="chartSetting"
					:extend="item.chartExtend"
					height="100%"
				></ve-pie>
			</div>
		</div>
	</div>
</template>

<script>
import VePie from 'v-charts/lib/pie.common.js';
import 'echarts/lib/component/title';

export default {
	components: { VePie },
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
					if (rkey !== 'tests') {
						row.push({
							测试状态: rkey,
							数量: data[key][rkey]
						});
					}
				}
				formatChartData.push({
					chartData: {
						columns: ['测试状态', '数量'],
						rows: row
					},
					chartExtend: {
						color:['#BDA9A9','#ff4444','#FFD700','#91EB7A'],
						title: {
							text: key,
							x: 'center',
							y: '22',
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
						textStyle: {
							color: '#fff'
						},
						series: {
							radius: ['30%', '50%'],
							center: ['50%', '60%'],
							 label: {
								formatter: '{b}({d}%)'
							},
						},
					}
				});
			}
			this.formatChartData = formatChartData;
			console.log(JSON.parse(JSON.stringify(formatChartData)))
		}
	}
};
</script>
