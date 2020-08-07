#ECHO Bot  
A sample Discord bot using discord.js

##Requirements  
This app runs on ```node.js``` and uses ```npm``` to handle installation and script running.  

You will need to create a file named ```env.json``` with the key 'DISCORD_TOKEN' and the value of the token for your application.
You can copy the code below in a text editor of your choice and add the actual discord token from your app.
```$xslt
{
  "DISCORD_TOKEN": "ACTUAL DISCORD TOKEN"
}
```
See the following guide in general and specifically these steps for setting your app token with Discord.  
https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot  
These steps create a bot but do not give the bot an operating body of code; at this point you have created a link to the Discord API that you will act up in the next step, Operation.

##Operation  
1. To run the bot, you must add your bot to a server you have ownership of. The **discord.js** guide covers that in this section:  
 https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links  
 Once this linking is completed the bot appears to run in any installation without specifying its IP address or port. (Your experience may vary based on security measures)  
 2. Install this code repo on your computer using the steps available on GitHub; for example, using Git, the command is  
 ```git clone https://github.com/hanschun/echobot```  
 3. Install the dependencies by using the npm command line. Enter the project folder and access a terminal. Use the command ```npm i``` to install dependencies.  
 4. With the project fully installed, run the bot with the command ```npm start```  
 You should now see the word ```Ready!``` appear in your terminal showing you the bot is running.  
 5. To stop the app, press CTRL+C in the terminal window and select 'yes' or 'y'. You may need to press CTRL+C twice in a row.  
 
 ##Commands
 The sample commands included in this iteration are taken from the **discord.js** guide.  
 All commands on this bot run using a **prefix** configured in the ```config.json``` file.  
 The default value is **!**, so the 'help' command is run by typing ```!help```.  
 To change the default prefix, edit the value in the ```config.json``` file, for example, to change the symbol to **$** edit the file to contain:  
 ```$xslt
 {
   "prefix": "$"
 }
 ```
###Command List
####!help  
Syntax ```!help [command name]```  
help returns a list of all commands or the details of a specific command named as the first argument.  
This command will return a DM to the user.  
  
####!reload    
Syntax ```!reload [command name]```  
reload allows a command file to be altered and saved without restarting the bot, allowing you to program 'on-the-fly.'  
**Reload does not add a command that was not included when the bot was started.**  
To do so, close the bot and start it again.

####!hello
Syntax ```!hello [name in any number of space separated words]```  
Returns either '你好 nĭ hăo [USER]' or '你好 nĭ hăo [ARGUMENTS]' depending on usage.      
####!template    
Syntax ```!template [any number of space separated words]```
Returns '`TEMPLATE FOR COMMAND WITH ARGS: [ARGUMENTS]'.  
The purpose of the TEMPLATE.js file is to show all the options that can be used to configure a command.  
####!chargen    
Syntax ```!chargen [words used to compose name]```  
Returns a character name based on the discord user name of the calling user.  
It will return either 'Your character is ${message.author} the Mighty!' or 'Your character is [USER] [ARGUMENTS]'
####!roll  
Syntax ```!roll d[SIDES]```
Returns a dice roll with the number of sides specified.  
This is not yet a real dice roll! But it returns a number.  

##Troubleshooting and Expansion
The **discord.js** guide is very helpful and gives many additional resources. This was a quick start to a soon-to-be expanded project to share a starting scaffolding for a Discord bot written using Javascript and node.js.  
In general, the guide https://discordjs.guide/ is recommended for all development issues and questions.  
If you have trouble operating this app, please file an Issue.
