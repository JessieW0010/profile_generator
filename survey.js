const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let profile = {};

rl.question("Hi! What's your name?", (userName) => {
  profile["name"] = userName;
  rl.question("What's and activity you like doing?", (userActivity) => {
    profile["activity"] = userActivity;
    rl.question("What do you listen to while you're doing that?", (userListen) => {
      profile["listen"] = userListen;
      rl.question("What is your favourite meal?", (userMeal) => {
        profile["meal"] = userMeal;
        rl.question("What sport is your very most favourite", (userSport) => {
          profile["sport"] = userSport;
          rl.question("What is your super power? What are you amazing at?", (userPower) => {
            profile["superPower"] = userPower;

            console.log(`Meet ${profile.name}! Their favourite thing to do is ${profile.activity}, and they really enjoy listening to ${profile.listen} while they do! They would love to share ${profile.meal} with you sometime, or play ${profile.sport}. ${profile.name} will impress you with their ${profile.superPower}!`);
            rl.close();
          });
        });
      });
    });  
  });
});

