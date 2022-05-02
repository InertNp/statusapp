import { v4 as uuidv4 } from 'uuid';
const completeDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' }
export const fakedata = [
    {
        id: uuidv4(),
        votes: 14,
        name: "Abhishek",
        thought: "Sint sunt tempor velit laborum velit est ea labore commodo deserunt Lorem. ",
        date: completeDate.toLocaleDateString('en-us', options),
    },
    {
        id: uuidv4(),
        votes: 14,
        name: "Abhishek1",
        thought: "Laboris consequat duis proident veniamasdasd.",
        date: completeDate.toLocaleDateString('en-us', options),
    },
    {
        id: uuidv4(),
        votes: 14,
        name: "Abhishek2",
        thought: "Laboris consequat duis proident veniam.asd",
        date: completeDate.toLocaleDateString('en-us', options),
    }, {
        id: uuidv4(),
        votes: 14,
        name: "Abhishek3",
        thought: "Laboris consequat duis proident veniamasd.",
        date: completeDate.toLocaleDateString('en-us', options),
    },
]