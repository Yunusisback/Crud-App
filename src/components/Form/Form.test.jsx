import Form from "./index";
import { render, screen } from '@testing-library/react';
import { vi } from "vitest";
// user-event'i düzgün bir şekilde 'user' adıyla import ettik
import user from "@testing-library/user-event"; 
// Gereksiz import'u sildik: import { send } from "vite"; 

// user.setup() global olarak tanımlanırsa daha temiz olur, 
// ancak test içinde kullanmak teknik olarak mümkündür.
// user.setup();

it("formu gönderince addUser fonksiyonu doğru parametrelerle çağrılmallı", async () => { 
    // user.setup() her testin başında çağrılmalıdır
    user.setup();
    
    // fonskiyonun mock halini oluştur
    const mock = vi.fn();

    render(<Form addUser={mock} />);   


// 1- gerekli elemanları çağıracağız
const nameInput = screen.getByLabelText("İsim");
// Placeholder ile yaş inputunu alıyoruz
const ageInput = screen.getByPlaceholderText("örn:20"); 
const mailInput = screen.getByLabelText("Email");
const sendBtn = screen.getByText("Kullanıcı Ekle");


// 2- inputları dolduracağız
// Sadece type yöntemini kullanıyoruz.
await user.type(nameInput, "Elifsu");

await user.type(ageInput, "30");

await user.type(mailInput, "elifsu@gmail.com");

// 3- gönder butonuna tıklayacağız
await user.click(sendBtn);

// 4- addUser fonksiyonunun doğru parametrelerle çağrıldığını test edeceğiz
expect(mock).toHaveBeenCalledWith({  // burda toHaveBeenCalledWith kullanıyoruz çünkü fonksiyonun çağrılıp çağrılmadığını değil
    // çağrıldıysa hangi parametrelerle çağrıldığını test ediyoruz 
    name: "Elifsu", 
    age: "30", 
    email: "elifsu@gmail.com"
});; 
});