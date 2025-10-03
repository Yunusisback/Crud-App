const Form = ({ addUser }) => {
  
  // form submit işlemi
  const handleSubmit = (e) => {
    e.preventDefault();

    // formdaki inputlardan bir obje oluştur
    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData.entries());

    // kullancıyı listeye ekle
    addUser(newUser);

    console.log(newUser);

    // formu sıfırla
    e.target.reset();
  };


  return (
    <form onSubmit={handleSubmit} className="my-5">
      <div>
        <label htmlFor="name">İsim</label>
        <input
          id="name"
          type="text"
          name="name"
          className="form-control"
          placeholder="örn:elifsu"
        />
      </div>
      <div className="my-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control"
          placeholder="örn:elifsu@gmail.com"
        />
      </div>

      <div className="my-4">
        <label htmlFor="">Yaş</label>
        <input
          type="number"
          name="age"
          className="form-control"
          placeholder="örn:20"
        />
      </div>

      <button>Kullanıcı Ekle</button>
    </form>
  );
};

export default Form;