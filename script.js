function teamlog(){
	const parenElem = document.querySelectorAll('.swift-up-text');
parenElem.forEach(e => {
	const words = e.textContent.split(' ');
	e.innerHTML = '';
	words.forEach((a,b) => words[b] = `<span><i>${words[b]}</i></span>`);
	e.innerHTML = words.join(' ');
	const children = document.querySelectorAll('span > i');
	children.forEach((a, b) => a.style.animationDelay = `${b * .2}s`);
});}

teamlog()
setInterval(teamlog, 3000);