const BOT_TOKEN = "8734950139:AAEZjrkK_yNcBCIqu-67d7IxnmnK85pQSlE";
const CHAT_ID = "8539469656";

function sendOrder() {

  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  const phone = document.getElementById("phone").value;
  const note = document.getElementById("note").value;

  if (!name || !lastname || !phone) {
    alert("يرجى ملء المعلومات الأساسية");
    return;
  }

  const message = `
🍰 طلب جديد:
👤 الاسم: ${name}
👤 اللقب: ${lastname}
📞 الهاتف: ${phone}
📝 الملاحظة: ${note || "لا يوجد"}
  `;

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  });

  alert("تم إرسال الطلب بنجاح ✅");
}