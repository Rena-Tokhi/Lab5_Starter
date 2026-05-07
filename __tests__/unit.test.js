// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber: valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber: valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber: invalid phone number with letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});
test('isPhoneNumber: invalid phone number too short', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

// isEmail tests
test('isEmail: valid email', () => {
  expect(isEmail('test@email.com')).toBe(true);
});
test('isEmail: valid email with underscores', () => {
  expect(isEmail('my_email@domain.org')).toBe(true);
});
test('isEmail: invalid email missing @', () => {
  expect(isEmail('invalidemail.com')).toBe(false);
});
test('isEmail: invalid email missing domain', () => {
  expect(isEmail('test@')).toBe(false);
});

// isStrongPassword tests
test('isStrongPassword: valid password', () => {
  expect(isStrongPassword('Hello123')).toBe(true);
});
test('isStrongPassword: valid password with underscore', () => {
  expect(isStrongPassword('Good_pass1')).toBe(true);
});
test('isStrongPassword: invalid password starts with number', () => {
  expect(isStrongPassword('1invalid')).toBe(false);
});
test('isStrongPassword: invalid password too short', () => {
  expect(isStrongPassword('Hi1')).toBe(false);
});

// isDate tests
test('isDate: valid date', () => {
  expect(isDate('12/25/2023')).toBe(true);
});
test('isDate: valid date single digit month and day', () => {
  expect(isDate('1/1/2023')).toBe(true);
});
test('isDate: invalid date wrong format', () => {
  expect(isDate('2023-12-25')).toBe(false);
});
test('isDate: invalid date missing year', () => {
  expect(isDate('12/25/23')).toBe(false);
});

// isHexColor tests
test('isHexColor: valid 6 character hex color', () => {
  expect(isHexColor('#FF5733')).toBe(true);
});
test('isHexColor: valid 3 character hex color', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('isHexColor: invalid hex color with invalid characters', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});
test('isHexColor: invalid hex color wrong length', () => {
  expect(isHexColor('#FF573')).toBe(false);
});