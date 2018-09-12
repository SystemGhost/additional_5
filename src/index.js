module.exports = function check(str, bracketsConfig) {
	if(str.length % 2 == 1) return false;	
		var stack = [];
	var openBracket = [];
	var closeBracket = [];
	var sameValue = [];
	var temp1;
	var temp2;
	var tempPop;
	for(let i=0; i < bracketsConfig.length; i++) {
		openBracket.push(bracketsConfig[i][0]);
		closeBracket.push(bracketsConfig[i][1]);
	}

	for(var i=0; i < openBracket.length; i++) {
		if(closeBracket.indexOf(openBracket[i]) != -1 ) {
			sameValue.push(openBracket[i]);
		}
	}

	for(var i=0; i < str.length; i++) {
		if(openBracket.indexOf(str[i]) != -1) {
			if(stack.length != 0) {
				tempPop = stack.pop();
				if(str[i] == tempPop && sameValue.indexOf(str[i]) != -1 ) continue;
				else {
					stack.push(tempPop);
				}
			} 
			stack.push(str[i]);
		}
		else {
			temp1 = closeBracket.indexOf(str[i]);
			tempPop = stack.pop();
			if(str[i] == tempPop) continue;
			temp2 = openBracket.indexOf(tempPop);
			if(temp1 != temp2) return false;
		}
		}
		
		if(stack.length == 0) return true;
		
		return false;

}
