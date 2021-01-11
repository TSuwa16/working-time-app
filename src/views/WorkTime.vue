<template>
  <div>
    <input type="button" class = "backButton" @click = "backPage" value="戻る">
    <table>
        <tr>
            <th>社員番号</th> <td>{{employeeID}}</td> <th>エンジニア名</th> <td>{{name}}</td>
        </tr>
        <tr>
            <th>表示年月</th> <td>{{displayDate}}</td> <td colspan="2">
                <form id="headerBtn">
                    <input type="button" value="＜前月" @click="prevMonth">
                    <input type="button" value="今月" @click="toMonth">
                    <input type="button" value="翌月＞" @click="nextMonth">
                </form>
            </td>
        </tr>
    </table>
    <main-table></main-table>
  </div>
</template>

<script>
import moment from 'moment'
import MainTable from '../components/WorkTimeMainTable'
export default {
  components: {
      MainTable
    },
    data(){
        return{
            employeeID:'testID',
            name:'testName',
            displayDate:moment().format('YYYY') + '/' + moment().format('MM'),
            lastDay:''
        }
    },
    methods:{
        backPage(){
            this.$router.push('/');
        },
        //前月ボタン
        prevMonth(){

        },
        //今月ボタン
        toMonth(){

        },
        //翌月ボタン
        nextMonth(){

        }
    }

}
</script>

<style scoped>
    .backButton{
        display: block;
        margin: 0 0 0 auto;
    }

    div{
        float: center;
    }
</style>