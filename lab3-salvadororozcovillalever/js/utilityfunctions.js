<script type="text/javascript">

function isNumeric(num){
	
    return !isNaN(num)
}

function resetValues(idArray){

	for (var i = idArray.length - 1; i >= 0; i--) {
		document.getElementById(idArray[i].name).value = 0.0;
	}
}
</script>
