import { firstName, lastName, isVaild, rating, getvalue, skills } from "./util/utility.js"

import TodoService from "./util/TodoService.js"



function main() {
    console.log(firstName, lastName, isVaild, rating, getvalue, skills)
    console.log(new TodoService().findAll())
}
main()