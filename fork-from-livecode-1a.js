// exploration and exercise for codename "livecode" project. one of its aims is to allow a runtime code modification (live=running). so program has a "representation" as arrays, akin to lisp's lists
var Vars={}

Vars.Print=function(...Args){ console.log(...Args) }

function CallFunc(Name,...Args){
var AFunction=Vars[Name]
if(typeof AFunction=='function')
AFunction(...Args)
else
for(IFunction of arguments) CallFunc(...IFunction)
}

function IfFunc(Condition,Then,Else){ if(eval(Condition))CallFunc(Then)
else if(Else!=undefined)CallFunc(Else)
}

var Call1=['Print','Call1',1,2,3]
var Call2=['Print','Call2!']
var Call3=['Print','end of sequence']
var Sequence1=[Call2,Call2,Call3]
var If1=['false',Call1,Sequence1]

CallFunc(...Call1)

//IfFunc(...If1)

Vars.If=function(Name,...Args){IfFunc(...Args)}

CallFunc(['If',...If1])