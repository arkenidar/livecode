
var Variables={}

Variables.Print=function(Args){ console.log(Args.join(" ")) }

function CallFunc(ACall){
	var AFunction=Variables[ACall[0]]
	if(typeof AFunction=='function')
		AFunction(ACall[1])
	else
		for(IFunction of ACall) CallFunc(IFunction)
}

function IfFunc(AIfThen){
	if(eval(AIfThen[0]))CallFunc(AIfThen[1])
	else if(2 in AIfThen)CallFunc(AIfThen[2])
}

var Call1=['Print',['Call1',1,2,3]]
var Call2=['Print',['Call2!']]
var Sequence1=[Call2,Call2]
var If1=['false',Call1,Sequence1]

CallFunc(Call1)
IfFunc(If1)

Variables.If=function(Args){ IfFunc(Args) }
CallFunc(['If',['false',Call1,Sequence1]])
