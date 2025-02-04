import { Book } from "app/models/book";
import { Reader } from "app/models/reader";

export const allReaders: Reader[] = [
  {
    readerID: 1,
    name: "Andressa",
    weeklyReadingGoal: 350,
    totalMinutesRead: 5600,
  },
  {
    readerID: 2,
    name: "Matheus",
    weeklyReadingGoal: 210,
    totalMinutesRead: 3000,
  },
  {
    readerID: 3,
    name: "Juan",
    weeklyReadingGoal: 210,
    totalMinutesRead: 3200,
  },
  {
    readerID: 4,
    name: "Lud",
    weeklyReadingGoal: 140,
    totalMinutesRead: 600,
  },
];

export const allBooks: Book[] = [
  {
    bookID: 1,
    title: "Goodnight Punpun",
    author: "Inio Asano",
    publicationYear: 2007,
  },
  {
    bookID: 2,
    title: "Tokyo Ghoul",
    author: "Sui Ishida",
    publicationYear: 2011,
  },
  {
    bookID: 3,
    title: "Berserk",
    author: "Kentaro Miura",
    publicationYear: 1989,
  },
  {
    bookID: 4,
    title: "Planetes",
    author: "Makoto Yukimura",
    publicationYear: 1999,
  },
  {
    bookID: 5,
    title: "Attack on Titan",
    author: "Hajime Isayama",
    publicationYear: 2009,
  },
  {
    bookID: 6,
    title: "Naruto",
    author: "Masashi Kishimoto",
    publicationYear: 1999,
  },
  {
    bookID: 7,
    title: "Chainsaw Man",
    author: "Tatsuki Fujimoto",
    publicationYear: 2018,
  },
];
