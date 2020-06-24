<script>
function nine (num) {
    for(var i = 1; i <= num; i++){
        var str = '';
         for(var k = 1; k <= num; k++){
            if(i >= k){
                str += k + 'x' + i + '=' + i*k + ' ';
            }
        }
        console.log(str)
    }
}
nine(9)
</script>