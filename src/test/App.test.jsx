import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';  // ✅ Yol düzeltildi
import user from '@testing-library/user-event';

it('Uygulam doğru şekilde çalışıyor mu?', async () => {
  render(<App />);
  user.setup();

  // gerekli elemanları çağırma
  const nameInp = screen.getByLabelText('İsim');
  const mailInp = screen.getByLabelText('Email');
  const ageInp = screen.getByPlaceholderText('örn:20');
  const sendBtn = screen.getByRole('button', {
    name: 'Kullanıcı Ekle',
  });

  //1) inputları doldur
  await user.type(nameInp, 'Elifsu');
  await user.type(mailInp, "elifsu@gmail.com");
  await user.type(ageInp, '20'); 

  //2) Kullanıcı ekle butonuna tıkla
  await user.click(sendBtn);

  //3) Inputlara girdiğimiz veriye uygun bir şekilde tablo hücreleri ekrana basılır
  screen.getByRole('cell', { name: 'Elifsu' });
  screen.getByRole('cell', { name: 'elifsu@gmail.com' });
  screen.getByRole('cell', { name: '20' });
});

const multiple = (a, b, c) => {
  return a * b * c;
};

describe('Ekleme Fonksiyonu testleri', () => {
  it('pozitif sayılarda doğru sonuç veriyor mu?', () => {
    const sum = multiple(10, 2, 3);
    expect(sum).toBe(60);
  });

  it('negatif sayılarda doğru sonuç veriyor mu?', () => {
    const sum = multiple(-10, -2, -3);
    expect(sum).toBe(-60);
  });

  it('0 olunca doğru sonuç veriyor mu?', () => {
    const sum = multiple(0, 2, 3);
    expect(sum).toBe(0);
  });
});