export const sendContactForm = async (data) => {
  const formData = new FormData();

  // Append all fields, including file uploads
  Object.entries(data).forEach(([key, value]) => {
    if (value !== null) {
      formData.append(key, value);
    }
  });

  return fetch("/api/contact", {
    method: "POST",
    body: formData, // Send FormData for file uploads
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });
};
