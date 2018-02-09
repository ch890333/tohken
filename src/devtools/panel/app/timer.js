/* 全篇工程中
<script language="JavaScript">

//設定倒數之標的
var DifferenceHour = -1
var DifferenceMinute = -1
var DifferenceSecond = -1
var Tday = new Date("JUN 25, 2011 00:00:00") 
var daysms = 24 * 60 * 60 * 1000
var hoursms = 60 * 60 * 1000
var Secondms = 60 * 1000
var microsecond = 1000

function clock()
{
	//取得現在的時間資料
	var time = new Date()
	var hour = time.getHours()
	
	var minute = time.getMinutes()
	var second = time.getSeconds()
	var timevalue = ""+((hour > 12) ? hour-12:hour)
	
	//設定日期格式
	timevalue +=((minute < 10) ? ":0":":")+minute
	timevalue +=((second < 10) ? ":0":":")+second
	timevalue +=((hour >12 ) ? " PM":" AM")
		
	//計算現在的時間資料與倒數標的之差異
	var convertHour = DifferenceHour
	var convertMinute = DifferenceMinute
	var convertSecond = DifferenceSecond
	
	//透過getTime出來會是毫秒的數字
	var Diffms = Tday.getTime() - time.getTime()
	
	//根據不同情況以相除得到不同標準的數字
	DifferenceHour = Math.floor(Diffms / daysms)
	Diffms -= DifferenceHour * daysms
	DifferenceMinute = Math.floor(Diffms / hoursms)
	Diffms -= DifferenceMinute * hoursms
	DifferenceSecond = Math.floor(Diffms / Secondms)
	Diffms -= DifferenceSecond * Secondms	
	
	//如果 hour 資料有改變，則 form 那邊也要改變
	if(convertHour != DifferenceHour){
		day.innerHTML = DifferenceHour;
	}
	
	//如果 Minute 資料有改變，則 form 那邊也要改變
	if(convertMinute != DifferenceMinute) {
		ho.innerHTML = DifferenceMinute
	}
	
	//如果 Second 資料有改變，則 form 那邊也要改變
	if(convertSecond != DifferenceSecond) {
		min.innerHTML = DifferenceSecond
	}
	
	//如果 Second 資料有改變，則 form 那邊也要改變
	var dSecs = Math.floor(Diffms / microsecond)
	sec.innerHTML = dSecs
	
	//每1000毫秒(即1秒)不斷自動呼叫 clock() 以更新秒數資料
	setTimeout("clock()",1000)
} 
</script>
*/