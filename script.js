var names=new Array();
names[0]="ruth";
names[1]="tnbit";
names[2]="henok";
names[3]="fetiha";
names[4]="feven";
names[5]="fasika";
names[6]="meri";
names[7]="ethe";
names[8]="znash";
names[9]="mercy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}