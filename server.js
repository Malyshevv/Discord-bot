const Discord = require('discord.js');
const client = new Discord.Client();
 
var prefix = '!'
client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'help')) {
		message.channel.sendMessage('!anikdot');
		message.channel.sendMessage('!mems');
		message.channel.sendMessage('!giflol');
	}
});


//yasuo

var a_text = new Array ();
a_text[0] = "я человек простой.. вижу пик ясуо, сразу ливаю.";
a_text[1] = "Добрый день этот клуб ясуо мейнеров?  -Смерть похожа на ветер -Всегда на моей стороне ! Хасаги репорт лес!";
a_text[2] = "Тимо добрый хомяк с грибами, который спасает экологию...Но все его ненавидят. Даже грин пис, когда играют в LoL.";
a_text[3] = "Маленький тимо по лайну бежал,маленький тимо грибочки сажал, маленький тимо в капкан угодил ... меткий выстрел Кетлин цель поразил!!! Этот?";


client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'anikdot')) {
		var b = Math.floor( Math.random() * a_text.length );
		message.channel.sendMessage(a_text[b]);
	}
});


//end 


//mems

var img_link = new Array ();
img_link[0] = "https://s-media-cache-ak0.pinimg.com/736x/e1/83/e3/e183e3f9dc9fa9df983502f7e84ebcff.jpg";
img_link[1] = "https://lol-game.ru/data/pubs/content/87_1484818852original.jpg";
img_link[2] = "http://bipbap.ru/wp-content/uploads/2016/05/fLQtsKauqsE-420x450.jpg";
img_link[3] = "http://bipbap.ru/wp-content/uploads/2016/05/at1RtEOLDhM-450x289.jpg";
img_link[4] = "http://risovach.ru/upload/2014/02/mem/chernyj-vlastelin_42658379_orig_.jpg";
img_link[5] = "https://dota2.ru/img/memes/2015/03/14416.jpg";
img_link[6] = "http://cs303811.vk.me/u8448443/-14/x_10c24fd2.jpg";
img_link[7] = "http://risovach.ru/upload/2013/02/mem/league-of-legends_10345116_orig_.jpeg";
img_link[8] = "http://cs8.pikabu.ru/post_img/big/2016/05/13/9/146314854711001829.jpg";
img_link[9] = "http://cs8.pikabu.ru/images/big_size_comm/2016-06_1/1465052487199197403.jpg";
img_link[10] = "http://i.piccy.info/i5/67/94/1819467/dd.jpg";
img_link[11] = "https://pp.userapi.com/c619431/v619431222/3699/zf71hlvQ-6w.jpg";
img_link[12] = "https://pp.userapi.com/c605516/v605516418/802d/XhM_a7TV-dQ.jpg";

client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'mems')) {
		var img = Math.floor( Math.random() * img_link.length );
		message.channel.sendMessage("some text", {
    		file: img_link[img] // Or replace with FileOptions object
		});
	}
});

//end

//giflol

var gif_link = new Array ();
gif_link[0] = "https://media.giphy.com/media/3osxYaZU8dek0F9LVK/giphy.gif";
gif_link[1] = "https://media.giphy.com/media/eydmYMerp8yNG/giphy.gif";
gif_link[2] = "https://media.giphy.com/media/l0Iy1ezV0qAef463u/giphy.gif";
gif_link[3] = "https://media.giphy.com/media/rjSgXCyRnGB1K/giphy.gif";
gif_link[4] = "https://media.giphy.com/media/l0K43RPRCJ5BQIUJW/giphy.gif";
gif_link[5] = "https://media.giphy.com/media/zziTG26FGM0Lu/giphy.gif";
gif_link[6] = "https://media.giphy.com/media/Vy8xkv14bf81G/giphy.gif";
gif_link[7] = "https://media.giphy.com/media/3th6qORPYhVFm/giphy.gif";
gif_link[8] = "https://media.giphy.com/media/3og0IDkaoigfKh67gA/giphy.gif";
gif_link[9] = "https://media.giphy.com/media/HWWLsqazgtXws/giphy.gif";
gif_link[10] = "https://media.giphy.com/media/xUA7bjEBIAbncVcviU/giphy.gif";
gif_link[11] = "https://media.giphy.com/media/l0IyiCU2pBkXrMn9C/giphy.gif";
gif_link[12] = "https://media.giphy.com/media/Gi5NuaDmZ0YlG/giphy.gif";


client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'giflol')) {
		var gif = Math.floor( Math.random() * gif_link.length )
		message.channel.sendMessage("some text", {
    		file: gif_link[gif] // Or replace with FileOptions object
		});
	}
});

//end

client.login('API-KEY');