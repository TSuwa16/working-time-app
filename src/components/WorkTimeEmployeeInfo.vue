<template>
  <div>
    <table>
        <tr>
            <th>社員番号</th> <td id="empId">123</td> <th>エンジニア名</th> <td id="empName">name</td>
        </tr>
        <tr>
            <th>表示年月</th> <td id="date">yyyy/mm</td> <td colspan="2">
                <form id="headerBtn">
                    <input type="button" value="＜前月" name="prevMonth" id="prevMonth">
                    <input type="button" value="今月" name="toMonth" id="toMonth">
                    <input type="button" value="翌月＞" name="nextMonth" id="nextMonth">
                </form>
            </td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>