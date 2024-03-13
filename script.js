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

function post() {
            Email.send({
                Host: "smtp.gmail.com",
                Username: "website123a2@gmail.com",
                Password: "web2348ite",
                To: 'adr1999a2023@gmail.com',
                From: "website123a2@gmail.com",
                Subject: "post",
                Body: "hello world",
            })
                .then(function (message) {
                    alert("mail sent successfully")
                });
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
