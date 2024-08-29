/*Создайте тип Status с возможными значениями: "pending", "in-progress", "completed".
Создайте тип User с полями: name: string, age: number, status: Status.
Создайте функцию updateStatus, которая принимает объект User и новый status: Status и возвращает обновленный объект User
*/
type Status = "pending" | "in-progress" | "completed";
type User = {
    name: string;
     age: number;
     status: Status;
}

const updateStatus (user: User, newStatus: Status): User => {
    user.status = newStatus;
    return user;
}

/*Создайте тип HttpMethod с возможными значениями: "GET", "POST", "PUT", "DELETE".
Создайте тип Request с полями: method: HttpMethod, url: string, body?: any.
Создайте функцию makeRequest, которая принимает объект Request и возвращает строку с описанием запроса.
*/
enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}
interface Request {
  method: HttpMethod;
  url: string;
  body?: any;
}

function makeRequest (request: Request): string {
    return  `Request: ${request.method.url?.body}`;
};

/*Создайте функцию logValue, которая принимает значение любого типа T и выводит его в консоль.
Используйте эту функцию для вывода разных типов данных
*/
const logValue = <T>(value: T): void => {
  console.log(value);
};
/*Partial и Required:
Создайте объект типа User c полями name, age и email.
Используйте Partial<User> для создания нового объекта, который может содержать только часть свойств объекта User.
Используйте Required<User> для создания нового объекта, который обязательно должен содержать все свойства объекта User.
*/

type SuperUser = {
    name: string;
     age: number;
     email: string;
};

const SuperUserPartial: Partial<SuperUser> = {
    name: 'Nett',
};

const SuperUserRequired: Required<SuperUser> = {
     name: 'Nett',
     age: 11,
     email: "111@mail.ru",
};
/*`Pick и Omit`
    - Используйте `Pick<User, 'name' | 'age'>` для создания нового объекта, содержащего только свойства `name` и `age` объекта `User`.
    - Используйте `Omit<User, 'email'>` для создания нового объекта, который не содержит свойство `email`.
*/
const SuperUserPick: Pick<SuperUser, 'name' | 'age'> = {
     name: 'Nett',
     age: 11,
};
const SuperUserOmit: Omit<SuperUser, 'email'> = {
     name: 'Nett',
     age: 11,
}
/*- Создайте объект `user` типа `User`.
- Используйте `Readonly<User>` для создания нового объекта, который будет только для чтения. Попробуйте изменить значение одного из свойств этого объекта и посмотрите, что произойдет.
*/
const SuperUserReadonly: Readonly<SuperUser> = {
     name: 'Step',
     age: 111,
     email: "step111@mail.ru",
}
SuperUserReadonly.email = 'abrakadabra@mail.ru';


/*Record: Создайте тип UserRecord как Record<string, User>, в котором ключ - это идентификатор пользователя, а значение - объект User. Используйте этот тип для создания коллекции пользователей.
*/
type SuperUserRecord = Record<string, SuperUser>;
const users: SuperUserRecord = {
    user1: {name: 'Nett', age: 11, email: '111@mail.ru'},
    user2: {name: 'Step', age: 111, email: 'step111@mail.ru'},
};
/*typeof: Используйте оператор typeof для определения типа переменной и вывода его в консоль.
*/
console.log (typeof user1);