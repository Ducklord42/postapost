var postn = 0;
var dta;
var i = 0;

function nxt()
{
	postn += 1;
	for (i = 0; i != 2; i++)
	{
		document.getElementById("p" + String(i)).innerHTML = dta[i + postn];
	}
}	

function lst()
{
	postn -= 1;
	for (i = 0; i != 2; i++)
	{
		document.getElementById("p" + String(i)).innerHTML = dta[i + postn];
	}
}

function savef()
{
	const link = document.createElement("a");
	const content = clicks + "\n" + cpc;
	const file = new Blob([content], { type: 'text/plain' });
	link.href = URL.createObjectURL(file);
	link.download = "/Volumes/NO\ NAME/website/gallery.json";
	link.click();
	URL.revokeObjectURL(link.href);
}

var url = 'https://ducklord42.github.io/postapost/gallery.json';

fetch(url)
  .then(function(response) {
    response.text().then(function(text) {
      dta = JSON.parse(text);
      for (i = 0; i != 2; i++)
	{
    		document.getElementById("p" + String(i)).innerHTML = dta[i];
    	}
    });
  });

console.log("This works");
