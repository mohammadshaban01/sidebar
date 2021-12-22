import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';


@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {

  month=['jan', 'feb'];

  list=['list1', 'list2', 'list3'];


  constructor() { }

  ngOnInit(): void {
  }

  chartOption: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      right: 0,
      top: 40,
      bottom: 0,
      itemWidth: 20,
     itemHeight: 26,
     itemGap: 20, 
     
     textStyle: {
      color: '#094D85'
    }

    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['36%', '32%'],
        left: '-45%',
        top: '-45%',
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, 
            name: 'this month',
            itemStyle: {color: '#A93F55'},
            
         },
          { value: 735, 
            name: 'last month',
            itemStyle: {color: '#9F84BD' },
        },
          { value: 580, 
            name: 'last 6 months',
            itemStyle: {color: '#7EBDC3'}
          }
        ]
      }
    ]
  }


}
