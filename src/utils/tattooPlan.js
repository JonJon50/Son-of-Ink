export const MAX_REFERENCE_IMAGES = 5;
export const MAX_REFERENCE_IMAGE_SIZE = 10 * 1024 * 1024;
export const ALLOWED_REFERENCE_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
];
export const ALLOWED_REFERENCE_IMAGE_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
];

export const createEmptyTattooPlan = () => ({
  style: "",
  placement: "",
  size: "",
  color: "",
  referenceImages: [],
  notes: "",
});

const hasValidImageExtension = (fileName) =>
  ALLOWED_REFERENCE_IMAGE_EXTENSIONS.some((extension) =>
    fileName.toLowerCase().endsWith(extension)
  );

export const validateReferenceImages = (files) => {
  if (files.length > MAX_REFERENCE_IMAGES) {
    return `Please upload no more than ${MAX_REFERENCE_IMAGES} image files.`;
  }

  const invalidFile = files.find(
    (file) =>
      file.size > MAX_REFERENCE_IMAGE_SIZE ||
      !ALLOWED_REFERENCE_IMAGE_TYPES.includes(file.type) ||
      !hasValidImageExtension(file.name)
  );

  if (invalidFile) {
    return "Please upload JPEG, PNG, WebP, or GIF images that are 10 MB or smaller.";
  }

  return "";
};

export const formatTattooPlanDescription = (plan) => {
  const details = [
    `Style: ${plan.style}`,
    `Size: ${plan.size}`,
    `Color: ${plan.color}`,
  ];

  if (plan.notes.trim()) {
    details.push(`Notes: ${plan.notes.trim()}`);
  }

  return details.join("\n");
};
