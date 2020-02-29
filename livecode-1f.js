var Variables={Print,If}
function Print(Args){ console.log(Args.join(" ")) }
function If(AIfThen){
	if(eval(AIfThen[0]))CallFunc(AIfThen[1])
	else if(AIfThen.length>2)CallFunc(AIfThen[2])
}
function CallFunc(ACall){
	var AFunction=Variables[ACall[0]]
	if(typeof AFunction=='function')
		AFunction(ACall[1])
	else
		for(IFunction of ACall) CallFunc(IFunction)
}
var Call1=['Print',['Call1',1,2,3]]
var Call2=['Print',['Call2!']]
var Sequence1=[Call2,Call2]
var If1=['false',Call1,Sequence1]
CallFunc(Call1)
CallFunc(['If',If1]) //If(If1)
