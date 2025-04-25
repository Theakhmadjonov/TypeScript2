// MASHQ 1: Foydalanuvchi ma'lumotlarini saqlash
type Foydalanuvchi = {
  id: number;
  ism: string;
  email: string;
  yosh: number;
};

const foydalanuvchi: Foydalanuvchi = {
  id: 1,
  ism: "Ali",
  email: "ali@example.com",
  yosh: 25,
};
console.log("MASHQ 1:", foydalanuvchi);

// MASHQ 2: Mahsulot katalogi
type Mahsulot = {
  nomi: string;
  narxi: number;
  mavjud: boolean;
};

const telefon: Mahsulot = {
  nomi: "Samsung Galaxy",
  narxi: 500,
  mavjud: true,
};

const laptop: Mahsulot = {
  nomi: "Dell XPS",
  narxi: 1200,
  mavjud: false,
};
console.log("MASHQ 2:", telefon, laptop);

// MASHQ 3: Qoʻshish, ayirish, koʻpaytirish, boʻlish
type Amal = "qoshish" | "ayirish" | "kopaytirish" | "bolish";

function hisoblash(amal: Amal, a: number, b: number): number {
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
console.log("MASHQ 3:");
console.log("Qo‘shish:", hisoblash("qoshish", 5, 3));
console.log("Ayirish:", hisoblash("ayirish", 5, 3));
console.log("Ko‘paytirish:", hisoblash("kopaytirish", 5, 3));
console.log("Bo‘lish:", hisoblash("bolish", 6, 2));

// MASHQ 4: Talabalar ro'yxati
type Talaba = {
  id: number;
  ism: string;
  kurs: number;
};

const talabalarRoyxati: Talaba[] = [
  { id: 1, ism: "Aziz", kurs: 2 },
  { id: 2, ism: "Malika", kurs: 1 },
  { id: 3, ism: "Sardor", kurs: 3 },
];

function talabaniTop(id: number): Talaba | undefined {
  return talabalarRoyxati.find((t) => t.id === id);
}
console.log("MASHQ 4:", talabaniTop(2));

// MASHQ 5: Foydalanuvchi statusi
type Status = "faol" | "nofaol" | "blok";

type FoydalanuvchiStatus = {
  id: number;
  ism: string;
  status: Status;
};

function statusniTekshir(foydalanuvchi: FoydalanuvchiStatus): string {
  switch (foydalanuvchi.status) {
    case "faol":
      return "Foydalanuvchi faol";
    case "nofaol":
      return "Foydalanuvchi nofaol";
    case "blok":
      return "Foydalanuvchi bloklangan";
  }
}
console.log("MASHQ 5:");
console.log(statusniTekshir({ id: 1, ism: "Ali", status: "faol" }));
console.log(statusniTekshir({ id: 2, ism: "Vali", status: "blok" }));

// MASHQ 6: Xabar yuborish
type XabarTuri = "email" | "sms" | "telegram";

function xabarYuborish(turi: XabarTuri, kontakt: string, matn: string): string {
  return `${turi.toUpperCase()} orqali xabar yuborildi: ${matn} (Kontakt: ${kontakt})`;
}
console.log("MASHQ 6:");
console.log(xabarYuborish("email", "ali@mail.com", "Salom!"));
console.log(xabarYuborish("sms", "+998901234567", "Assalomu alaykum!"));

// MASHQ 7: Savatcha
type MahsulotItem = {
  id: number;
  nomi: string;
  narxi: number;
};

const savatchaItemlari: MahsulotItem[] = [
  { id: 1, nomi: "Telefon", narxi: 500 },
  { id: 2, nomi: "Quloqchin", narxi: 50 },
  { id: 3, nomi: "Zaryadlovchi", narxi: 20 },
];

function umumiyNarx(items: MahsulotItem[]): number {
  return items.reduce((sum, item) => sum + item.narxi, 0);
}
console.log("MASHQ 7:", "Umumiy narx:", umumiyNarx(savatchaItemlari));

// MASHQ 8: To'lov usullari
type TolovUsuli = "naqd" | "karta" | "click";

function tolovQilish(usul: TolovUsuli, summa: number): string {
  return `${usul.toUpperCase()} orqali ${summa} so'm to'landi`;
}
console.log("MASHQ 8:");
console.log(tolovQilish("naqd", 100000));
console.log(tolovQilish("click", 250000));

// MASHQ 9: Account holati
type Account = {
  id: number;
  login: string;
  password: string;
  active: boolean;
};

function accountniTekshir(account: Account): string {
  return account.active ? "Account faol" : "Account faol emas";
}
console.log("MASHQ 9:");
console.log(
  accountniTekshir({ id: 1, login: "ali123", password: "1234", active: true })
);
console.log(
  accountniTekshir({ id: 2, login: "vali456", password: "abcd", active: false })
);

// MASHQ 10: Menyudagi taomlar
type TaomTuri = "milliy" | "yevropa" | "osiyo";

type Taom = {
  nomi: string;
  narxi: number;
  turi: TaomTuri;
};

const taomlarRoyxati: Taom[] = [
  { nomi: "Osh", narxi: 25000, turi: "milliy" },
  { nomi: "Pizza", narxi: 45000, turi: "yevropa" },
  { nomi: "Sushi", narxi: 60000, turi: "osiyo" },
];

function taomlarniFiltr(taomlar: Taom[], turi: TaomTuri): Taom[] {
  return taomlar.filter((taom) => taom.turi === turi);
}
console.log("MASHQ 10:");
console.log("Milliy taomlar:", taomlarniFiltr(taomlarRoyxati, "milliy"));
console.log("Yevropa taomlar:", taomlarniFiltr(taomlarRoyxati, "yevropa"));
console.log("Osiyo taomlari:", taomlarniFiltr(taomlarRoyxati, "osiyo"));
