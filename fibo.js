var fibo = exports.fibo = function(n, done){
	if( n === 1 ||  n === 2) {
		done(1);
	} else {
		process.nextTick(function(){
			fibo(n-1, function(val1){
				process.nextTick(function(){
					fibo(n-2, function(val2){
						done(val1+val2);
					});
				});
			});
		});
	} 
}