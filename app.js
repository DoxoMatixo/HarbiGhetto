const Discord = require('discord.js');

const client = new Discord.Client();
const prefix = '&';

client.once('ready', () => {
    console.log('Hazır!');
    type:"STREAMING"
    url:"https://twitch.tv/dgknyilmazz"
	client.user.setPresence({
    activity: { name: "twitch.tv/dgknyilmazz", type: "WATCHING" }, 
    status: `idle`
    });
});
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'yardım') {
        message.channel.send('Pong.');
    }else if (command === 'yayın') {
	    message.channel.send('@everyone')
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#1F4CF0')
        .setTitle('Buraya Tıklayarak Yayına Gidebilirsin!')
        .setURL('https://twitch.tv/dgknyilmazz')
        .setAuthor('Yayın Başladı!', 'https://i.hizliresim.com/lI9QmD.png')
        .setDescription('Twitch.tv üzerinden yayındayız. Sen de yayına katılarak bize ortak olabilirsin!')
        .addField('Link ;', 'https://twitch.tv/dgknyilmazz', true)
        .setThumbnail('https://i.hizliresim.com/W5eqH5.png')
        .setImage('https://i.hizliresim.com/KRAB3v.png')
        .setTimestamp()
        .setFooter('DoxoMatixo tarafından', 'https://i.hizliresim.com/4fSkf7.png');
        message.channel.send(exampleEmbed).catch(e => {});
		message.delete({timeout: 100}).catch(e => {});
    }else if (command === 'kurallar') {
        const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#1F4CF0')
        .setAuthor('Kurallar', 'https://i.hizliresim.com/lI9QmD.png')
        .setThumbnail('https://i.hizliresim.com/W5eqH5.png')
        .addFields(
            { name: 'Dikkat Edilmesi Gereken Kurallar;', value: 'Hazırsan başlayalım!' },
            { name: '\u200B', value: '\u200B' },
            { name: '1. Kural', value: '- Kişiye ve aile bireylerine küfretmek, ağır ithamda bulunmak tolerans göstermeksizin sunucudan atılmanıza sebep olur.', inline: true },
        )
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '2. Kural', value: '- Reklam yapmak, gereksiz spam yapmak ve yetki istemek sunucudan atılmanıza sebep olur.', inline: true },
        )
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '3. Kural', value: '- Müzik botunu gereksiz ve kötü amaçla kullanmak tolerans göstermeksizin sunucudan atılmanıza sebep olur.', inline: true },
        )
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '4. Kural', value: '- Özel odalara sürekli girmek istemek, ve yetkilileri bu konuda rahatsız etmeniz 1 kere uyarılmak üzere 2. tekrarda sunucudan atılmanıza sebep olur.', inline: true },
        )
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '5. Kural', value: '- Twitch üzerinden ban yiyip burada kan kusmanız dahilinde sunucudan atılırsınız.', inline: true },
        )
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '6. Kural', value: '- Kanalları gerektiği gibi doğru kullanmaya özen gösteriniz. Kanalları amaçları dışında kullanmanız halinde uyarılırsınız.', inline: true },
        )
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '7. Kural', value: '- Twitch"te ve Discord"da yetki, özel tag vb. istemek yasaktır.', inline: true },
        )
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '8. Kural', value: '- Sürekli büyük harfler ile yazmanız durumunda sunucuda sohbet kanalına erişim engeli getirilip, bir süre susturulmanıza sebep olur.', inline: true },
        )
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '9. Kural', value: '- Din, dil, ırk ayrımı ve  siyaset yapmak yasaktır.', inline: true },
        )
        .setTimestamp()
        .setFooter('DoxoMatixo tarafından', 'https://i.hizliresim.com/4fSkf7.png');

        message.channel.send(exampleEmbed);
    }else if (command === 'şikayet') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#1F4CF0')
        .setAuthor('Şikayet Odası', 'https://i.hizliresim.com/lI9QmD.png')
        .addField('Davacıyım Hakim Bey!', 'Sunucu hakkında veya herhangi bir şey hakkında olan şikayetini dile getirebilirsin!', true)
        .setTimestamp()
        .setFooter('DoxoMatixo tarafından', 'https://i.hizliresim.com/4fSkf7.png');

        message.channel.send(exampleEmbed);
		
    }else if (command === 'şikresim') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#1F4CF0')
        .setImage('https://i.hizliresim.com/Gs20Ys.png')

        message.channel.send(exampleEmbed);
	
    }else if (command === 'kurresim') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#1F4CF0')
        .setImage('https://i.hizliresim.com/eXcYcm.png')

        message.channel.send(exampleEmbed);
		
    }else if (command === 'önresim') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#1F4CF0')
        .setImage('https://i.hizliresim.com/89LGzb.png')

        message.channel.send(exampleEmbed);
		
    }else if (command === 'öneriler') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#1F4CF0')
        .setAuthor('Öneriler', 'https://i.hizliresim.com/lI9QmD.png')
        .addField('Önerin Bizler İçin Önemli!', 'Herhangi bir şey hakkında ki önerini hiç çekinmeden rahatça buraya yazabilirsin. Her türlü öneriye açığız! ', true)
        .setTimestamp()
        .setFooter('DoxoMatixo tarafından', 'https://i.hizliresim.com/4fSkf7.png');
        message.channel.send(exampleEmbed);
		
    }else if (command === 'çekiliş') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#1F4CF0')
        .setAuthor('Çekiliş', 'https://i.hizliresim.com/lI9QmD.png')
        .addField('Biri Çekiliş mi Dedi?', 'Yaptığımız çekilişlerden haberdar olabilir, bu çekilişlere katılabilirsiniz!', true)
        .setTimestamp()
        .setFooter('DoxoMatixo tarafından', 'https://i.hizliresim.com/4fSkf7.png');
        message.channel.send(exampleEmbed);
		
    }else if (command === 'çekresim') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#1F4CF0')
        .setImage('https://i.hizliresim.com/DOifL0.png')
        message.channel.send(exampleEmbed);
		
    }else if (command === 'desresim') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#1F4CF0')
        .setImage('https://i.hizliresim.com/bBTWgL.png')
        message.channel.send(exampleEmbed);
		
	}else if (command === 'destek') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#1F4CF0')
        .setAuthor('Destek', 'https://i.hizliresim.com/lI9QmD.png')
        .addField('112 Acil Hattı Buyrun!', 'Takıldığın herhangi bir sorunda sana yardımcı olmaktan gurur duyarız!', true)
        .setTimestamp()
        .setFooter('DoxoMatixo tarafından', 'https://i.hizliresim.com/4fSkf7.png');
        message.channel.send(exampleEmbed);
		
    }else if (command === 'yasaklı') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#1F4CF0')
        .setAuthor('Yasaklanan kullanıcıya;', 'https://i.hizliresim.com/lI9QmD.png')
        .addField('Maalesef Yasaklandın :/', 'Ama bu sonsuza dek yasaklandın anlamına gelmiyor. Uslu bir çocuk olursan seni tekrardan aramıza alabiliriz!', true)
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Ama İtiraz Etmek İstersen;', value: 'İtiraz kanalına yazabilirsin. Ama şimdiden söylemeliyim ki eğer kötü bir sebeptren dolayı engellendiysen ımmm şey geçmiş olsun :/', inline: true },
        )
        .setTimestamp()
        .setFooter('Harbi Bot tarafından', 'https://i.hizliresim.com/lI9QmD.png');
        message.channel.send(exampleEmbed);
		
    }else if (command === 'itiraz') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#1F4CF0')
        .setAuthor('İtiraz Eden Kişinin Dikkatine!', 'https://i.hizliresim.com/lI9QmD.png')
        .addField('Hmmmm', 'Belli ki kötü birşeyler yapmış ve engellenmişsin. Lütfen burada kelimelerini seç ve yaz. Burası artık son nokta. Ya bizimlesin, ya da bizimle hiç olmamışsın!', true)
        .setTimestamp()
        .setFooter('Harbi Bot tarafından', 'https://i.hizliresim.com/lI9QmD.png');
        message.channel.send(exampleEmbed);
    }

});

client.login('NzY3MTA2OTIzODk1MDYyNTQ4.X4tF_g.1JuXn5qA6n_p9Utq75HyZrLwoWw');