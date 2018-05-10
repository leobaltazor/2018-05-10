$(function () {

	// Custom JS

});

var API_KEY = '8951367-33d93f22bdb4a7639eadc448c';
function search(params) {
	var keySearch = document.querySelector('.keySearch').value

	var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + pluss(keySearch) + "&per_page=12";
	console.log(URL);

	$.getJSON(URL, function (data) {
		console.log(data.totalHits);
		if (parseInt(data.totalHits) > 0)
			$.each(data.hits, function (i, hit) {
				//  console.log(hit.pageURL); 
				//  console.log(data);
				insertResult(hit);
			});
		// if (parseInt(data.totalHits) > 12) {
		// 	// paginator(data)
		// }
		else
			console.log('No hits');
	});
}

function insertResult(data) {
	var div = document.createElement('div')
	var a = document.createElement('a')
	var img = document.createElement('img')
	var result = document.querySelector('.result')
	div.classList.add("result-item");
	img.src = data.previewURL
	a.href = data.pageURL
	a.setAttribute("target", "blank")

	a.appendChild(img)
	div.appendChild(a)
	result.appendChild(div)
}

// function paginator(data) {
// 	var li = document.createElement('li')
// 	var a = document.createElement('a')
// 	var ul = document.querySelector('.paginator ul')
// 	var i = 0
// 	var total = (parseInt(data.totalHits)
// 	while (total / 12) > 12)
// 	i++
// 	a.innerHTML = i;
// 	li.appendChild(a)
// 	ul.appendChild(li)
// 	total = total - 12;
// }

var btnSearch = document.querySelector('.btnSearch')
btnSearch.addEventListener("click", search)

// document.querySelector('.keySearch').preventdefaults()
function pluss(params) {
	
	params = params.replace(/\s{1,}/, "+")
	return params = params.replace(/\s{1,}/, "+")

}