client.on("guildMemberAdd", member => {
        if(member.guild.id === "520166623395577857") {  
  const channel = member.guild.channels.find('526790967466917908'); 
if (!channel) return;
channel.send(`**<@${member.user.id}> **Welcome to Royal Server**`)
}}); // by: faisal