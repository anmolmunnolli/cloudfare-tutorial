import flag from 'country-code-emoji'
const template = (cf) => {
const emoji = flag(cf.country)
return `
<!DOCTYPE html>
<html lang ="en">
    <head>
        <title>
            Hey welcome
        </title>
    </head>
    <body>
        Hola! you are connecting from ${cf.city} in ${cf.country} ${emoji}
    </body>
</html>
`
}
export default template