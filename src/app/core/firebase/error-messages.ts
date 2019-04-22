import { ErrorMessage } from '../interfaces/error-message';

export const fbErrorMessages: { [code: string]: ErrorMessage } = {
  'auth/email-already-in-use': {
    code: 'auth/email-already-in-use',
    message: 'O endereço de e-mail já está sendo usado por outra conta.'
  },
  'auth/weak-password': {
    code: 'auth/weak-password',
    message: 'Sua senha deve ter no mínimo 6 caracteres.'
  },
  'auth/wrong-password': {
    code: 'auth/wrong-password',
    message: 'O e-mail ou senha que você digitou está incorreto.'
  },
  'auth/invalid-email': {
    code: 'auth/invalid-email',
    message: 'Endereço de email está mal formatado.'
  },
  'auth/user-not-found': {
    code: 'auth/user-not-found',
    message: 'Conta não encontrada. Verifique suas credenciais ou crie uma conta.'
  },
  'auth/account-exists-with-different-credential': {
    code: 'auth/account-exists-with-different-credential',
    message: 'Já existe uma conta com a mesma credencial.'
  },
  "auth/too-many-requests": {
    code: 'auth/too-many-requests',
    message: 'Muitas tentativas de login malsucedidas. Por favor, inclua a verificação reCaptcha ou tente novamente mais tarde.'
  }
}