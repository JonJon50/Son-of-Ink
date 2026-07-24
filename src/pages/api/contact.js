// pages/api/contact.js






import { mailOptions, transporter } from "../../config/nodemailer";
import formidable from "formidable";
import fs from "fs";
import path from "path";

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

const MAX_FILES = 5;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const ALLOWED_IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const CLIENT_ERROR_MESSAGE = "Unable to submit the booking request. Please try again.";

const escapeHtml = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (char) => {
        const replacements = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        };
        return replacements[char];
    });

const normalizeFieldValue = (value) => (Array.isArray(value) ? value.join(", ") : value);

const generateEmailContent = (data) => {
    const stringData = Object.entries(data)
        .map(([key, val]) => `${CONTACT_MESSAGE_FIELDS[key] || key}: ${normalizeFieldValue(val)}`)
        .join("\n");

    const htmlData = Object.entries(data)
        .map(([key, val]) => {
            const label = escapeHtml(CONTACT_MESSAGE_FIELDS[key] || key);
            const answer = escapeHtml(normalizeFieldValue(val));
            return `<h3 class="form-heading" align="left">${label}</h3><p class="form-answer" align="left">${answer}</p>`;
        })
        .join("");

    return {
        text: stringData,
        html: `<html><body><h2>New Contact Message</h2><div>${htmlData}</div></body></html>`,
    };
};

const getUploadedFiles = (files) =>
    Object.values(files)
        .flatMap((file) => (Array.isArray(file) ? file : [file]))
        .filter(Boolean);

const isValidUpload = (file) => {
    if (!file.filepath || !file.originalFilename || !file.mimetype) return false;
    if (file.size > MAX_FILE_SIZE) return false;

    const extension = path.extname(file.originalFilename).toLowerCase();
    return ALLOWED_IMAGE_TYPES.has(file.mimetype) && ALLOWED_IMAGE_EXTENSIONS.has(extension);
};

const cleanupFiles = (files) => {
    files.forEach((file) => {
        if (file?.filepath && fs.existsSync(file.filepath)) {
            try {
                fs.unlinkSync(file.filepath);
            } catch (error) {
                console.error("Failed to clean up uploaded file.");
            }
        }
    });
};

class UploadValidationError extends Error {}

const handler = async (req, res) => {
    console.log("Starting request...");

    if (req.method === "POST") {
        if (!process.env.EMAIL || !process.env.EMAIL_PASS) {
            console.error("Required email configuration is missing.");
            return res.status(500).json({ message: CLIENT_ERROR_MESSAGE });
        }

        const form = formidable({
            keepExtensions: true,
            multiples: true,
            maxFiles: MAX_FILES,
            maxFileSize: MAX_FILE_SIZE,
            maxTotalFileSize: MAX_FILES * MAX_FILE_SIZE,
            allowEmptyFiles: false,
        });

        let uploadedFiles = [];

        try {
            console.log("Parsing form data...");
            const [fields, files] = await form.parse(req);
            uploadedFiles = getUploadedFiles(files);

            const attachments = [];
            if (uploadedFiles.length > MAX_FILES) {
                throw new UploadValidationError("Too many uploaded files.");
            }

            for (const file of uploadedFiles) {
                if (!isValidUpload(file)) {
                    throw new UploadValidationError("Unsupported uploaded file.");
                }

                const fileData = fs.readFileSync(file.filepath);
                attachments.push({
                    filename: file.originalFilename,
                    content: fileData,
                });
            }

            cleanupFiles(uploadedFiles);
            uploadedFiles = [];

            // Generate email content
            const { text, html } = generateEmailContent(fields);

            console.log("Sending email...");
            await transporter.sendMail({
                ...mailOptions,
                subject: "New Appointment Request",
                text,
                html,
                attachments,
            });

            console.log("Email sent successfully");
            return res.status(200).json({ success: true, message: "Email sent successfully!" });
        } catch (err) {
            cleanupFiles(uploadedFiles);

            if (err instanceof UploadValidationError || err?.httpCode === 400 || err?.httpCode === 413) {
                console.warn("Booking request rejected because an uploaded file failed validation.");
                return res.status(400).json({ message: "Please upload up to 5 image files, each 10 MB or smaller." });
            }

            console.error("Booking request submission failed.");
            return res.status(500).json({ message: CLIENT_ERROR_MESSAGE });
        }
    }

    console.warn("Method not allowed");
    return res.status(405).json({ message: "Method Not Allowed" });
};

export default handler;






























// import { mailOptions, transporter } from "../../config/nodemailer";
// import formidable from "formidable";
// import fs from "fs";

// export const config = {
//     api: { bodyParser: false }, // Required for formidable to parse files
// };

// const CONTACT_MESSAGE_FIELDS = {
//     firstName: "First Name",
//     lastName: "Last Name",
//     phoneNumber: "Phone Number",
//     email: "Email",
//     tattoo: "Tattoo",
//     bodyLocation: "Location on Body",
//     artist: "Artist",
//     hearAbout: "Heard About Us",
//     tattooPic: "Picture",
//     newClient: "New Client?",
// };

// const generateEmailContent = (data) => {
//     const stringData = Object.entries(data)
//         .map(([key, val]) => `${CONTACT_MESSAGE_FIELDS[key] || key}: ${val}`)
//         .join("\n");

//     const htmlData = Object.entries(data)
//         .map(([key, val]) => {
//             const label = CONTACT_MESSAGE_FIELDS[key] || key;
//             return `<h3 class="form-heading" align="left">${label}</h3><p class="form-answer" align="left">${val}</p>`;
//         })
//         .join("");

//     return {
//         text: stringData,
//         html: `<html><body><h2>New Contact Message</h2><div>${htmlData}</div></body></html>`,
//     };
// };

// const handler = async (req, res) => {
//     if (req.method === "POST") {
//         const form = formidable({ keepExtensions: true });

//         try {
//             const [fields, files] = await form.parse(req);
//             console.log("Fields:", fields);
//             console.log("Files:", files);

//             const attachments = [];
//             if (files.tattooPic) {
//                 const file = files.tattooPic[0];
//                 const fileData = fs.readFileSync(file.filepath);
//                 attachments.push({
//                     filename: file.originalFilename,
//                     content: fileData,
//                 });
//                 fs.unlinkSync(file.filepath); // Cleanup uploaded file
//             }

//             // Generate email content
//             const { text, html } = generateEmailContent(fields);

//             // Send email
//             await transporter.sendMail({
//                 ...mailOptions,
//                 subject: "New Appointment Request",
//                 text,
//                 html,
//                 attachments,
//             });

//             return res.status(200).json({ success: true, message: "Email sent successfully!" });
//         } catch (err) {
//             console.error("Error:", err);
//             return res.status(500).json({ message: "Failed to send email" });
//         }
//     }

//     return res.status(405).json({ message: "Method Not Allowed" });
// };

// export default handler;
