// Plaindrome Check

// You are given a string S, Your task is to check wether the given string is a Plaindrome or not. A Plaindrome is a string, which turnout same when read in reverse direction. Example: "naman" is a Palindrome.

// String can contain both upppercase lowercase letters.

// Note: You have to complete Plain_Check function. No need to take any input.

var Palin_Check = (str) =>
{
    let check = str.split("").reverse().join("");
	if(check === str){
	   return "True";
	}
	else
	{
	   return "False";
	}
};
console.log(Palin_Check("naman"));