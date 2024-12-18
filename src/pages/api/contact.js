import { mailOptions, transporter } from "../../config/nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = {
    api: { bodyParser: false }, // Required for formidable to parse files
};

const CONTACT_MESSAGE_FIELDS = {
    firstName: "First Name",
    lastName: "Last Name",
    phoneNumber: "Phone Number",
    email: "Email",
    tattoo: "Tattoo",
    bodyLocation: "Location on Body",
    artist: "Artist",
    hearAbout: "Heard About Us",
    tattooPic: "Picture",
    newClient: "New Client?",
};

const generateEmailContent = (data) => {
    const stringData = Object.entries(data)
        .map(([key, val]) => `${CONTACT_MESSAGE_FIELDS[key] || key}: ${val}`)
        .join("\n");

    const htmlData = Object.entries(data)
        .map(([key, val]) => {
            const label = CONTACT_MESSAGE_FIELDS[key] || key;
            return `<h3 class="form-heading" align="left">${label}</h3><p class="form-answer" align="left">${val}</p>`;
        })
        .join("");

    return {
        text: stringData,
        html: `<html><body><h2>New Contact Message</h2><div>${htmlData}</div></body></html>`,
    };
};

const handler = async (req, res) => {
    if (req.method === "POST") {
        const form = formidable({ keepExtensions: true });

        try {
            const [fields, files] = await form.parse(req);
            console.log("Fields:", fields);
            console.log("Files:", files);

            const attachments = [];
            if (files.tattooPic) {
                const file = files.tattooPic[0];
                const fileData = fs.readFileSync(file.filepath);
                attachments.push({
                    filename: file.originalFilename,
                    content: fileData,
                });
                fs.unlinkSync(file.filepath); // Cleanup uploaded file
            }

            // Generate email content
            const { text, html } = generateEmailContent(fields);

            // Send email
            await transporter.sendMail({
                ...mailOptions,
                subject: "New Appointment Request",
                text,
                html,
                attachments,
            });

            return res.status(200).json({ success: true, message: "Email sent successfully!" });
        } catch (err) {
            console.error("Error:", err);
            return res.status(500).json({ message: "Failed to send email" });
        }
    }

    return res.status(405).json({ message: "Method Not Allowed" });
};

export default handler;
