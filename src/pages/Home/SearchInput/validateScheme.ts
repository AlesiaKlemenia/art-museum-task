import * as yup from "yup";

export const validateSchema = yup.object().shape({
  search: yup
    .string()
    .min(2, "Artwork title length should be at least 2 characters.")
    .max(32, "Artwork title length should not exceed 32 characters.")
    .required(),
});
