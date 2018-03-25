## Adding JavaScript to a Wesbsite 

I have been trying to manipulate DOM using plane JavaScript through out this project <br />

## Concepts Learnt:

* Learnt that CSS < style> tag should be placed inside  < head> tag to avoid FOUC - Flash of Unstyled Content
* Learnt that JS < script> tag should be placed just above closing  < body> tag 
  * This is to makesure that JS loads after the markup fully loads
  * If violated, the JS will not be applied to the targeted tags, ids, or classes
* By manipulating an element's innerHtml you'll be able to change your text and HTML as much as you like.
* document.body.innerHTML = "some text";
  * here we are manipulating the innerHTML of body
  * look at second image below
* innerHTML is a DOM property to insert content or HTML to a specified id of an element
  * Basically this is DOM manupulation
  * Initializing multiple variables from say, a json object:

Below are two pictures before and after adding JavaScript to out WebPage


### Before Adding JS

<p align="center">
  <img src="before_Script_Loads.png" alt="Size Limit example" >
</p>

#### TIP : Comment the script tag to fail the JS from loading


### After Adding JS

<p align="center">
  <img src="after_Script_Loads.png" alt="Size Limit example" >
</p> 


#### In the second image the DOM has been manipulated