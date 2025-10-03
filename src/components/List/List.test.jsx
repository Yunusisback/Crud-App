import { render, within } from "@testing-library/react";
import List from ".";
import { testUsers } from "../../constants/testData";
import { screen } from "@testing-library/react";

// gönderilen her kullanıcı için body kısmına bir satir ekleniyor mu testi
it("gönderilen her kullanıcı için body kısmına bir satir eklenir", () => {
  render(<List users={testUsers} />);

  // table body kısmını al
  const body = screen.getByTestId("body");

  // table body kısmındaki satırları seç  (belirli bir satırı seçme)
  // belirli bir kapsayıcı içindeki satırları seçmek için within (içerisindeki anlamı) kullanabiliriz
  const rows = within(body).getAllByRole("row");

  // dizideki kullanıcı sayısı kadar satır var mı
  expect(rows).toHaveLength(testUsers.length); // toHaveLength: uzunluk kontrolü
}); 

// isim email ve yaş bilgileri users verisine göre ekrana basiliyor mu testi

it("isim email ve yaş bilgileri users verisine göre ekrana basılıyor", () => {
  render(<List users={testUsers} />);

  // dizideki her bir kullanıcı için ekranda
  // kullancının değerlerini içeren tablo hücresi tıklanır

  for (const user of testUsers) { // burda user tek tek alınıyor. for of ile
  // ekranı tarayıp userın name email age değerlerini içeren hücreleri arıyoruz for döngüsü ile 
  
  // kullanıcının ismini içeren tablo hücresini bul
    screen.getByRole("cell", { name: user.name }) 
  }

  // kullanıcının mailini içeren tablo hücresini bul
  for (const user of testUsers) {
    screen.getByRole("cell", { name: user.email });
  }
}); 


