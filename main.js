// //ALL PLOTS
// //bottom from left side
// const plot = document.querySelector('#b4b')
// const plot2 = document.querySelector('#b4a')
// const plot3 = document.querySelector('#b3b')
// const plot4 = document.querySelector('#b3a')
// const plot5 = document.querySelector('#b2b')
// const plot6 = document.querySelector('#b2a')
// const plot7 = document.querySelector('#b1b')
// const plot8 = document.querySelector('#b1a')
// //top from left side
// const plot9 = document.querySelector('#a3b')
// const plot10 = document.querySelector('#a3a')
// const plot11 = document.querySelector('#a2b')
// const plot12 = document.querySelector('#a2a')
// const plot13 = document.querySelector('#a1b')
// const plot14 = document.querySelector('#a1a')

// //ALL MODALS
// //bottom from left side
// const modal = document.querySelector('#modal--b4b')
// const modal2 = document.querySelector('#modal--b4a')
// const modal3 = document.querySelector('#modal--b3b')
// const modal4 = document.querySelector('#modal--b3a')
// const modal5 = document.querySelector('#modal--b2b')
// const modal6 = document.querySelector('#modal--b2a')
// const modal7 = document.querySelector('#modal--b1b')
// const modal8 = document.querySelector('#modal--b1a')
// //top from left side

// //CLOSE BUTTONS
// const closeBtn = document.querySelector('#close-b4b')
// const closeBtn2 = document.querySelector('#close-b4a')
// const closeBtn3 = document.querySelector('#close-b3b')
// const closeBtn4 = document.querySelector('#close-b3a')
// const closeBtn5 = document.querySelector('#close-b2b')
// const closeBtn6 = document.querySelector('#close-b2a')
// const closeBtn7 = document.querySelector('#close-b1b')
// const closeBtn8 = document.querySelector('#close-b1a')

// //FUNCTIONS

// const modalHandler = modal => {
// 	modal.classList.toggle('show-modal')
// }

// //LISTENERS

// plot.addEventListener('click', () => modalHandler(modal))
// plot2.addEventListener('click', () => modalHandler(modal2))
// plot3.addEventListener('click', () => modalHandler(modal3))
// plot4.addEventListener('click', () => modalHandler(modal4))
// plot5.addEventListener('click', () => modalHandler(modal5))
// plot6.addEventListener('click', () => modalHandler(modal6))
// plot7.addEventListener('click', () => modalHandler(modal7))
// plot8.addEventListener('click', () => modalHandler(modal8))

// closeBtn.addEventListener('click', () => modalHandler(modal))
// closeBtn2.addEventListener('click', () => modalHandler(modal2))
// closeBtn3.addEventListener('click', () => modalHandler(modal3))
// closeBtn4.addEventListener('click', () => modalHandler(modal4))
// closeBtn5.addEventListener('click', () => modalHandler(modal5))
// closeBtn6.addEventListener('click', () => modalHandler(modal6))
// closeBtn7.addEventListener('click', () => modalHandler(modal7))
// closeBtn8.addEventListener('click', () => modalHandler(modal8))

// modal.addEventListener('click', () => modalHandler(modal))
// modal2.addEventListener('click', () => modalHandler(modal2))
// modal3.addEventListener('click', () => modalHandler(modal3))
// modal4.addEventListener('click', () => modalHandler(modal4))
// modal5.addEventListener('click', () => modalHandler(modal5))
// modal6.addEventListener('click', () => modalHandler(modal6))
// modal7.addEventListener('click', () => modalHandler(modal7))
// modal8.addEventListener('click', () => modalHandler(modal8))

// FUNCTION FOR GENERATES SELECTORS
const selectById = (prefix, suffix) => {
	return document.querySelector(`#${prefix}${suffix}`)
}

// ARRAY WITH SELECTORS (if new insert here)
const plotSuffixes = ['b4b', 'b4a', 'b3b', 'b3a', 'b2b', 'b2a', 'b1b', 'b1a', 'a3b', 'a3a', 'a2b', 'a2a', 'a1b', 'a1a']

// MODAL FUNCTION
const modalHandler = modal => {
	modal.classList.toggle('show-modal')
}

// FOREACH LISTENERS
window.onload = () => {
	plotSuffixes.forEach(suffix => {
		const plot = selectById('', suffix)
		const modal = selectById('modal--', suffix)

		plot.addEventListener('click', () => modalHandler(modal))
		if (modal) {
			modal.addEventListener('click', () => modalHandler(modal))
		}
	})
}
