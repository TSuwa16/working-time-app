<template>
  <div>
        <p>＜勤務状況＞</p>
        <table id="mainTable">
            <thead>
                <tr>
                    <th rowspan="2">日</th> <th rowspan="2">出勤時間</th> <th rowspan="2">退勤時間</th> <th colspan="2">休憩</th> <th rowspan="2">備考</th>
                </tr>
                <tr>
                    <th>開始時間</th> <th>終了時間</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="date in targetDates" :key = "date.id">
                    <th>{{date.format("D") + '(' + date.format("ddd") + ')' }}</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <table>
            <tr>
                <th>時間外ガイドライン</th> <td>0.0h</td>
            </tr>
        </table>
  </div>
</template>

<script>
import moment from 'moment'
export default {
    data(){
        return{
            targetDates:''
        }
    },
    created(){
        moment.locale('ja');
        let daysInMonth = moment().daysInMonth();
        let arrDays = [];

        while(daysInMonth) {
            let current = moment().date(daysInMonth);
            arrDays.push(current);
            daysInMonth--;
        }
        this.targetDates = arrDays.reverse();        
    }
}


</script>

<style>

</style>