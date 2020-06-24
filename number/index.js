<script>
function number (num) {
    for(var i = 1; i <= num; i++){
		if(i % 2 == 0){
			console.log(i + " is even number.")
		}
		else
			console.log(i + " is odd number.")
    }
}
number(20)
</script>