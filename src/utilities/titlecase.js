const titleCase = text => {
	let replaced = [];
	for (let word of text.split(' ')) {
		replaced.push(word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
	}
	return replaced.join(' ');
}

export default titleCase;
