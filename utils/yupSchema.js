import * as yup from "yup";
import { formMessages } from '@utils/formMessages';
import { formRegex } from '@utils/formRegex';

export const singInSchema = yup.object().shape({
    email: yup
    .string()
    .email(formMessages.email.invalid)
    .required(formMessages.email.required),
    password: yup
    .string()
    .required(formMessages.password.required),
})

export const singUpSchema = yup.object().shape({
    name: yup
    .string()
    .required(formMessages.name.required),
    email: yup
    .string()
    .email(formMessages.email.invalid)
    .required(formMessages.email.required),
    password: yup
    .string()
    .required(formMessages.password.required)
    .matches(formRegex.password, formMessages.password.invalid)
})

export const forgotPasswordSchema = yup.object().shape({
    email: yup
    .string()
    .email(formMessages.email.invalid)
    .required(formMessages.email.required),
})

export const ConfirmSignUpSchema = yup.object().shape({
    email: yup
    .string()
    .email(formMessages.email.invalid)
    .required(formMessages.email.required),
    authCode: yup
    .string()
    .required(formMessages.authCode.required),
})

export const ChangePasswordSchema = yup.object().shape({
    currentPassword: yup
    .string()
    .required(formMessages.password.required),
    newPassword: yup
    .string()
    .required(formMessages.password.required)
    .matches(formRegex.password, formMessages.password.invalid),
    confirmNewPassword: yup
    .string()
    .required(formMessages.password.required)
    .oneOf([yup.ref('newPassword'), null], 'New Password and Confirm New Password must match.'),
})

export const forgotPasswordSubmitSchema = yup.object().shape({
    email: yup
    .string()
    .email(formMessages.email.invalid)
    .required(formMessages.email.required),
    newPassword: yup
    .string()
    .required(formMessages.password.required)
    .matches(formRegex.password, formMessages.password.invalid),
    authCode: yup
    .string()
    .required(formMessages.authCode.required),
})