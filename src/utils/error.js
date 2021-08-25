const ERROR_CODES = {
  EMAIL_NOT_FOUND: "User with this email was not found",
  INVALID_PASSWORD: "Invalid password",
};
export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : "Unknown error";
}
