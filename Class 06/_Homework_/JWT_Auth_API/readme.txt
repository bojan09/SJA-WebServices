post /login
post /create-account

post /recipe
get /recipe - сите рецепти без оглед на кој корисник припаѓаат
get /recipe/:id 
put /recipe/:id - ги менува само рецептите што се во сопственост на корисникот
delete /recipe/:id - ги брише само рецептите што се во сопственост на корисникот

модели

users {...}
recipes {...}