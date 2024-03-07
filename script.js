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

function loadf()
{
	let input = document.querySelector("input[type='file']");
	const reader = new FileReader();
	reader.onload = function ()
	{
		dta = JSON.parse(reader.result);
    	for (i = 0; i != 2; i++)
    	{
    		document.getElementById("p" + String(i)).innerHTML = dta[i];
    	}
	}
	let ff = new Blob([], {lastModified: 1709563128000, name: "gallery.json", size: 153, type: "application/json", webkitRelativePath: ""});
	reader.readAsText(input.files[0]);
	//reader.readAsText(ff);
}

var url = 'https://ducklord42.github.io/postapost/gallery.json';

fetch(url)
  .then(function(response) {
    response.text().then(function(text) {
      dta = JSON.parse(text);
      done();
    });
  });

function done() {
  for (i = 0; i != 2; i++)
	{
    		document.getElementById("p" + String(i)).innerHTML = dta[i];
    	}
}

console.log("This works");
