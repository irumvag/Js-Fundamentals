// Source - https://stackoverflow.com/q
// Posted by jpsfs, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-27, License - CC BY-SA 4.0

for (let i = 0; i < 2; i++) {
	setTimeout(() => {
		console.log("Timeout ", i);
		Promise.resolve().then(() => {
			console.log("Promise 1 ", i);
		}).then(() => {
			console.log("Promise 2 ", i);
		});
	},3000)
}