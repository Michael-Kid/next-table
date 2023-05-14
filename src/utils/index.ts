export const validateForm = ({ id, firstName, lastName, email, phone }: any) => {
  if (!id.length || isNaN(id)) {
    return {
      field: 'id',
      message: 'Необходимо использовать цифры',
    }
  }

  const letterRegExp = /^[a-zA-Z()]+$/
  if (!firstName.length || !letterRegExp.test(firstName)) {
    return {
      field: 'firstName',
      message: 'Необходимо использовать буквы (ENG)',
    }
  }
  if (!lastName.length || !letterRegExp.test(lastName)) {
    return {
      field: 'lastName',
      message: 'Необходимо использовать буквы (ENG)',
    }
  }

  const emailRegExp =
    /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/
  if (!emailRegExp.test(email)) {
    return {
      field: 'email',
      message: 'Некорректный email',
    }
  }

  const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,12}$/
  if (!phoneRegExp.test(phone)) {
    return {
      field: 'phone',
      message: 'Некорректный номер телефона',
    }
  }

  return null;
}
