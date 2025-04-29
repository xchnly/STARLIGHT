<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <div id="column-chart" class="min-h-[400px]"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ApexCharts from 'apexcharts'

const props = defineProps({
  seriesData: {
    type: Array,
    required: true,
    validator: value => value.length === 3 // Pastikan ada 3 produk
  },
  categories: {
    type: Array,
    required: true
  }
})

onMounted(() => {
  const options = {
    series: [
      {
        name: '1G0000319',
        data: props.seriesData[0]
      },
      {
        name: '1G0000371',
        data: props.seriesData[1]
      },
      {
        name: '1N0047',
        data: props.seriesData[2]
      }
    ],
    chart: {
      type: 'bar',
      height: 400,
      stacked: false, // Non-stacked columns
      toolbar: {
        show: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        borderRadius: 4, // Sedikit rounded corners
        dataLabels: {
          position: 'top' // Label di atas column
        }
      }
    },
    colors: ['#3B82F6', '#10B981', '#F59E0B'], // Blue, Emerald, Amber
    dataLabels: {
      enabled: true,
      formatter: function(val) {
        return val + ' 卷'
      },
      offsetY: -25, // Posisi label
      style: {
        fontSize: '12px',
        colors: ['#111827'] // Text gray-900
      }
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'] // Border transparan
    },
    xaxis: {
      categories: props.categories,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: '#000000', // Gray-500
          fontSize: '14px'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Jumlah Pemakaian',
        style: {
          color: '#6B7280' // Gray-500
        }
      },
      labels: {
        style: {
          colors: '#6B7280' // Gray-500
        }
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return val + ' 卷'
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      markers: {
        radius: 8 // Lingkaran legend lebih besar
      }
    },
    grid: {
      borderColor: '#E5E7EB', // Gray-200
      strokeDashArray: 4
    }
  }

  const chart = new ApexCharts(document.querySelector('#column-chart'), options)
  chart.render()
})
</script>