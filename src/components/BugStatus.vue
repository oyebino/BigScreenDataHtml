<template>
	<div class="right-bottom-bd" v-if="formatChartData">
		<div class="block-title">版本bug状态汇总</div>
		<div style="width: 100%" class="item-block">
			<ve-histogram
				:data="formatChartData"
				:settings="chartSettings"
				:extend="chartExtend"
				height="100%"
			></ve-histogram>
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
			formatChartData: null,
			chartSettings: {
				stack: { 状态: ['激活', '已关闭', '已解决'] }
			},
			chartExtend: {
				color:['#91D52B','#EEEE11','#EB7A7A'],
				title: {
					text: '版本bug状态汇总',
					x: 'center',
					y: '12',
					textStyle: {
						color: '#fff',
						fontSize: 15
					},
					show: false
				},
				grid: {
					top: 25,
					left: 20,
					right: 20,
					bottom: 15
				},
				legend: {
					textStyle:{
						color:'#FFFFEE'
					},
					bottom:'auto',
					right: '10px',
					show: true,
					data:['已关闭', '已解决', '激活']
				},
				series: {
					label: { show: false, position: 'top' },
					barWidth: 48,
				},
				textStyle: {
					color: '#fff'
				},
				xAxis: {
					axisLabel: {
						rotate: 12
					}
				}
			}
		};
	},
	created() {
		this.formatInitChartData(this.chartData);
	},
	methods: {
		formatInitChartData(data) {
			let formatChartData = {
				columns: ['系统', '已关闭', '已解决', '激活'],
				rows: []
			};

			let o;
			for (let key in data) {
				o = {
					系统: key
				};

				for (let rkey in data[key]) {
					if (rkey !== '全部') {
						o[rkey] = data[key][rkey];
					}
				}
				formatChartData.rows.push(o);
			}
			this.formatChartData = formatChartData;
		}
	}
};
</script>
