import React, {Component, useState} from "react";
import '../styles/App.css';

const App =()=> {

    
        const [result, setresult] = useState("");
        const [firstInput, setfirstInput] = useState("");
        const [secondInput, setsecondInput] = useState("");

    function evaluateResult(){
        if(firstInput=="" || secondInput=="")
        {
            setresult("Please Enter valid input");
        }
        else{

        
    var sameLetterCount = 0;
	var sameLetter = "";
	for(var i=0; i<firstInput.length; i++)
		{
			if(secondInput.includes(firstInput.charAt(i)) && !(sameLetter.includes(firstInput.charAt(i))))
			{
				sameLetterCount++;
				sameLetter += firstInput.charAt(i);
			}
		}
	//var totalOfBoth = word1.length+word2.length;
	//var ans = totalOfBoth-sameLetterCount;
	var word1NewLength = firstInput.length-sameLetterCount;
	var word2NewLength = secondInput.length-sameLetterCount;
	var actualLength = word1NewLength+word2NewLength;
	var ans = actualLength%6;


	if(ans===0)
	{
		setresult("Siblings")
	}
	else if(ans===1)
	{
		setresult("Friends");
	}
	else if(ans===2)
	{
		setresult ("Love");
	}
	else if(ans===3)
	{
		setresult("Affection");
	}
	else if(ans===4)
	{
		setresult("Marriage");
	}
	else 
	{
		setresult("Enemy");
	}
}
        }

        return(
            <div id="main">
               <input type="text" placeholder="Enter First Name" data-testid="input1" value={firstInput} onChange={(e)=>{setfirstInput(e.target.value)}} />
               <input type="text" placeholder="Enter Second Name" data-testid="input2" value={secondInput} onChange={(e)=>{setsecondInput(e.target.value)}} />
               <button onClick={evaluateResult} data-testid="calculate_relationship">Calculate Relationship Future</button>
               <button onClick={()=>{setfirstInput("");setsecondInput(""); setresult("");}} data-testid="clear">Clear</button>
               <h3 id="result" data-testid="answer">{result}</h3>
            </div>
        )
    
}


export default App;
