var cnt = 0;
function load() {
	if(localStorage.lastname) {
		cnt = get();
		update();
	}
}
function save() { localStorage.lastname = cnt; }
function get() { return Number(localStorage.lastname); }
function update() {
	if(cnt > 0) { document.getElementById("msg").innerHTML = "您已膜拜了" + cnt + "次";	}
	else { document.getElementById("msg").innerHTML = "点击膜拜CQY"; }
}
function leave() { save(); }
function clr() {
	cnt = 0;
	save();
	update();
}
function add() {
	cnt++;
	update();
	switch(cnt){
		case 5: alert("CQY: I AK IOI!"); break;
		case 10: alert("CQY: 来膜拜我呀！"); break;
		case 50: alert("CQY: 看着你辛苦膜拜我的样子，我又去AK了一次IOI"); break;
		case 100: alert("CQY: 膜我膜得累不累呀？"); break;
		case 500: alert("CQY: 我吊打国家集训队"); break;
		case 1000: alert("CQY: 你现在膜拜我的次数刚赶上我AK IOI的次数:)"); break;
		case 5000: alert("CQY: 我最巨！"); break;
		case 10000: alert("CQY: 虽然你用鼠标连点器作弊，但是我AK的速度还是比你膜的快"); break;
		case 10001: alert("后续还会更新，欢迎膜拜:)"); break;
	}
}