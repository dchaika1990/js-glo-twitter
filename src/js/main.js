import Twitter from "./components/Twitter";


document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	const tweeter = new Twitter(
		{
			listElem: '.tweet-list'
		}
	)
});