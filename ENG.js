/* SOURCE --> https://github.com/daneden/animate.css NOT MINE */

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

/* SOURCE --> https://github.com/daneden/animate.css NOT MINE */

//Global

count = 0;

var particles = ["The", "A"]; //Make sure to add an at somepoint
var adjectives = ["kewl", "weaboo", "yifftASStic", "spicy", "DEADLY", "demonic", "sp00ky", "godly", "1337", "K1LL3R"]; //More adjectives
var nouns = ["edgehog", "memer", "pony", "onion", "gnome", "Chara", "trump", "keemstar"];
var afters = ["the 69th", "the 420th", "the death bringer", "a funonion", "from ur n1ghtmar3s"];

function reset()
{
	$("#gent").contents().filter(function(){return this.nodeType === 3}).remove()
}

function gen()
{
	if (count == 0)
	{
		genMain();
		count++;
	}

	else if (count > 0)
	{
		reset();
		genMain();
		modIterateInt(count, 1);
	}

	else 
	{
		alert("Something wrong with count, value --> " + count);
	}
}

function genMain()
{
	var currentParticle = "";
	var currentAdjective = "";
	var currentNoun = "";
	var currentAfter = "";

	main();

	function main()
	{
		randomParticle();
		generateAdjective();
		generateNoun();
		randomAfter();
		appendAll();
	}

	function randomParticle()
	{
		if (randBoolean() == true)
		{
			currentParticle = randSelectArray(particles);
		}

		else
		{
			currentParticle = "";
		}
	}

	function generateAdjective()
	{
		currentAdjective = randSelectArray(adjectives);
	}	

	function generateNoun()
	{
		currentNoun = randSelectArray(nouns)
	}

	function randomAfter()
	{
		if (randBoolean() == true)
		{
			currentAfter = randSelectArray(afters);
		}

		else
		{
			currentAfter = "";
		}
	}

	function appendAll()
	{
		$("#gent").append(currentParticle + " "
		+ currentAdjective + " "
		+ currentNoun + " " 
		+ currentAfter);

		$("#gent").animateCss("wobble");
	}

	function randSelectArray(array)
	{
		val = (Math.floor(Math.random() * (array.length)));
		return array[val];
	}
	
	function randBoolean()
	{
		val = Math.random();

		if (val > .5)
		{
			return true;
		}

		else if (val < .5)
		{
			return false; 
		}
	}

}

function modIterateInt(number, iterator)
{
	if (((number += iterator) % 2,147,483,647) == 0)
	{
		number = 1; 
	}

	else  
	{
		((number += iterator) % 2,147,483,647)
	}
}