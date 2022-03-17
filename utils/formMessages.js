export const formMessages = {
  name: {
    required: "Name is required",
    maxLength: "Name is too long!",
  },
  email: {
    required: "Email is required",
    invalid: "Please enter valid email",
  },
  password: {
    required: "Password is required",
    invalid: "Password needs to be at least 8 characters long and contain at least 3 of the following: Upper case, Lower case, Number, Symbol",
  },
  oldPassword: {
    required: "Old Password is required",
  },
  newPassword: {
    required: "New Password is required",
    mismatch: "The passwords entered don't match. Please try again",
  },
  authCode: {
    required: "Confirmation code is required",
  },
  verificationCode: {
    required: "Verification Code is required",
    invalid: "Verification Code is invalid!",
  },
  emailRequired: 'Please enter email',
  emailInvalid: 'Please enter valid email',
  passwordRequired: 'Please enter password',
  passwordInvalid: 'Password needs to be at least 8 characters long and contain the following: uppercase letters, lowercase letters, special characters, numbers.',
  confirmPasswordNotMatching: 'Passwords don\'t match',
}