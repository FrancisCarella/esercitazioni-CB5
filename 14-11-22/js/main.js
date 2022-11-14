import { q, getId, GET } from './utils.js'

const str = "flexiple";
const str2 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str2);

const postId = q(".post-id")
const userAvatar = q(".user-avatar")
const postTitle = q(".post-title")
const userId = q(".user-id")
const postBody = q(".post-body")
const btnPrev = q(".btn-prev")
const btnNext = q(".btn-next")

// GLOBAL VARIABLES
const url = "https://jsonplaceholder.typicode.com/posts";
let index = 1;

// BTN EVENT LISTENERS
btnPrev.addEventListener('click', (e) => {
	let instruction = e.target.textContent;
	getPost(instruction)
})

btnNext.addEventListener('click', (e) => {
	let instruction = e.target.textContent;
	getPost(instruction)
})


const getPost = (instruction) => {

	if (!instruction) {
		instruction = 1;
	} else {
		instruction = instruction.toLowerCase();
	};

	switch (instruction) {
		case 'prev':
			index = index - 1;
			break;
		case 'next':
			index = index + 1;
			break;
		default:
			index = instruction;
	}

	GET(`${url}/${index}`)
		.then(res => {
			postId.textContent = `Post n° ${getId(res?.id)}`;
			postTitle.textContent = res?.title;
			userId.textContent = `User ${getId(res?.id)}`;
			postBody.textContent = res?.body;
			userAvatar.setAttribute("src", "./img/avatar_placeholder.png");

			if (index <= 1) {
				btnPrev.disabled = true;
				btnPrev.classList.add("disabled")
			} else {
				btnPrev.disabled = false;
				btnPrev.classList.remove("disabled")
			}

			if (index >= 10) {
				btnNext.disabled = true;
				btnNext.classList.add("disabled")
			} else {
				btnNext.disabled = false;
				btnNext.classList.remove("disabled")
			}
		})
}

window.onload = getPost();