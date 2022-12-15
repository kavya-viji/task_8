var x = parseInt(prompt("enter the value of x"));
var y = parseInt(prompt("enter the value of y"));
var z = parseInt(prompt("enter the value of z"));


if (x<y && x<z && x>y && x>z)
{   
	if (y<z && y>z)
	{
		console.log(x,y,z);	
		console.log(x,y,z);	
		
	}
    else
	{
		console.log(x,z,y);	
		console.log(x,z,y);	
		
    }
}
else if (y<x && y<z && y>x && y>z)
{
	if (x<z && x>z)  
	{ 
		console.log(y,x,z);
		console.log(y,x,z);
		
	}
	else
	{
		console.log(y,z,x);
		console.log(y,z,x);
		
	}
}	
else if (z<x && z<y && z>x && z>y)
{
	if (x<y && x>y)
	{
		console.log(z,x,y);
		console.log(z,x,y);
		
	}
	else
	{
		console.log(z,y,x);
		console.log(z,y,x);
		
	}
}


