export const sendContactForm = async (data) =>
  fetch("/api/contact", { // this is a relative path, so it will be http://localhost:3000/api/contact
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });