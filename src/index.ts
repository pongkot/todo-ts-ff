import {
    Todo,
    TodoService,
} from './module/todo';

const argv = process.argv;

(async () => {
    if (argv.indexOf('--db:sync') > 0) {
        await Todo.sync({ force: false, alter: true })
    }

    const result = await TodoService.getTodo()

    console.log(result)

    process.exit(0)
})()
