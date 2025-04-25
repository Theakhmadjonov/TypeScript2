// MASHQ 1

type User = {
  id: number;
  ism: string;
  email: string;
  yosh: number;
};

const user1: User = {
  id: 1,
  ism: "Alijon",
  email: "alijoh@example.com",
  yosh: 25,
};
console.log(user1);

// MASHQ 2

type Product = {
  nomi: string;
  narxi: number;
  mavjud: boolean;
};

const phone: Product = {
  nomi: "Samsung Galaxy A55",
  narxi: 1200,
  mavjud: true,
};

const notebook: Product = {
  nomi: "Mac Book Air 2",
  narxi: 1200,
  mavjud: false,
};
console.log(phone, notebook);

// MASHQ 3

type Amal = "qoshish" | "ayirish" | "kopaytirish" | "bolish";

function counting(amal: Amal, a: number, b: number): number {
  switch (amal) {
    case "qoshish":
      return a + b;
    case "ayirish":
      return a - b;
    case "kopaytirish":
      return a * b;
    case "bolish":
      return a / b;
  }
}
console.log(counting("qoshish", 5, 3));
console.log(counting("ayirish", 5, 3));
console.log(counting("kopaytirish", 5, 3));
console.log(counting("bolish", 6, 2));

// MASHQ 4

type Student = {
  id: number;
  ism: string;
  kurs: number;
};

const studentLists: Student[] = [
  { id: 1, ism: "Asadbek", kurs: 2 },
  { id: 2, ism: "Mirkomil", kurs: 1 },
  { id: 3, ism: "Sardor", kurs: 3 },
];

function findStudent(id: number): Student | undefined {
  return studentLists.find((t) => t.id === id);
}
console.log(findStudent(2));

// MASHQ 5

type Status = "faol" | "nofaol" | "blok";

type UserStatus = {
  id: number;
  ism: string;
  status: Status;
};

function checkStatus(user: UserStatus): string {
  switch (user.status) {
    case "faol":
      return "Foydalanuvchi faol";
    case "nofaol":
      return "Foydalanuvchi nofaol";
    case "blok":
      return "Foydalanuvchi bloklangan";
  }
}
console.log(checkStatus({ id: 1, ism: "Azamat", status: "faol" }));
console.log(checkStatus({ id: 2, ism: "Muhhamadsodiq", status: "blok" }));

// MASHQ 6

type typeMessage = "email" | "sms" | "telegram";

function sendMessage(
  typ: typeMessage,
  contact: string,
  message: string
): string {
  return `${typ} orqali xabar yuborildi: ${message} (Kontakt: ${contact})`;
}
console.log(sendMessage("email", "ali@mail.com", "Salom!"));
console.log(sendMessage("sms", "+998901234567", "Assalomu alaykum!"));

// MASHQ 7

type ProductItem = {
  id: number;
  nomi: string;
  price: number;
};

const boxItems: ProductItem[] = [
  { id: 1, nomi: "Telefon", price: 500 },
  { id: 2, nomi: "Naushniuk", price: 50 },
  { id: 3, nomi: "Zaryadnik", price: 20 },
];

function sum(items: ProductItem[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}
console.log("Summ", sum(boxItems));

// MASHQ 8

type listPay = "naqd" | "karta" | "click";

function tolovQilish(usul: listPay, summa: number): string {
  return `${usul} orqali ${summa} so'm to'landi`;
}

console.log(tolovQilish("naqd", 100000));
console.log(tolovQilish("click", 250000));

// MASHQ 9

type Account = {
  id: number;
  login: string;
  password: string;
  active: boolean;
};

function checkAccount(account: Account): string {
  return account.active ? "Account faol" : "Account faol emas";
}
console.log(
  checkAccount({
    id: 1,
    login: "azamat123",
    password: "jambatron",
    active: true,
  })
);
console.log(
  checkAccount({
    id: 2,
    login: "nosir456",
    password: "ko'katmen",
    active: false,
  })
);

// MASHQ 10

type MealList = "milliy" | "yevropa" | "osiyo";

type Meal = {
  nomi: string;
  narxi: number;
  turi: MealList;
};

const foodList: Meal[] = [
  { nomi: "Osh", narxi: 25000, turi: "milliy" },
  { nomi: "Pizza", narxi: 45000, turi: "yevropa" },
  { nomi: "Sushi", narxi: 60000, turi: "osiyo" },
];

function taomlarniFiltr(taomlar: Meal[], turi: MealList): Meal[] {
  return taomlar.filter((taom) => taom.turi === turi);
}
console.log("Milliy taomlar:", taomlarniFiltr(foodList, "milliy"));
console.log("Yevropa taomlar:", taomlarniFiltr(foodList, "yevropa"));
console.log("Osiyo taomlari:", taomlarniFiltr(foodList, "osiyo"));
