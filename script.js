// API Endpoint'leri
const BASE_URL = "https://localhost:7034/api/LogIn/MemberSignUp";

//const GET_MEMBERS_URL = "http://127.0.0.1:5102/api/Manager/GetAllMembers";
const POST_MEMBER_URL = BASE_URL;

// Sayfa yüklendiğinde üyeleri getir
//document.addEventListener("DOMContentLoaded", fetchUsers);

// Üye ekleme
document.getElementById("addUserForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // Formun varsayılan gönderimini engelle

  const name = document.getElementById("nameSurname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const newUser = { nameSurname: name, email, password };

  try {
    const res = await fetch(POST_MEMBER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!res.ok) throw new Error(`API Hatası: ${res.status}`);
    

    alert("Kayıt başarılı! Ana sayfaya yönlendiriliyorsunuz.");
    window.location.href = "index.html"; // Ana sayfaya yönlendir
  } catch (err) {
    console.error("Kullanıcı eklenemedi:", err.message);
    alert("Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.");
  }
});



