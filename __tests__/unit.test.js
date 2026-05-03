// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('2345471234 is not a phone number', () => {
  expect(isPhoneNumber(2345471234)).toBe(false);
});
test('12345 is not a phone number', () => {
  expect(isPhoneNumber(12345)).toBe(false);
});
test('618-239-2399 is a phone number', () => {
  expect(isPhoneNumber('618-239-2399')).toBe(true);
});
test('432-919-2589 is a phone number', () => {
  expect(isPhoneNumber('6432-919-2589')).toBe(true);
});


test('blah is not an email', () => {
  expect(isEmail('blah')).toBe(false);
});
test('123 is not an email', () => {
  expect(isEmail(123)).toBe(false);
});
test('hello@gmail.com is an email', () => {
  expect(isEmail('hello@gmail.com')).toBe(true);
});
test('hi@yahoo.com is an email', () => {
  expect(isEmail('hi@yahoo.com')).toBe(true);
});


test('3assword is not a strong password', () => {
  expect(isStrongPassword('3assword')).toBe(false);
});
test('12345 is not a strong password', () => {
  expect(isStrongPassword('12345')).toBe(false);
});
test('Yes239_15bl is a strong password', () => {
  expect(isStrongPassword('Yes239_15bl')).toBe(true);
});
test('HeLlOWoRlD134_ is a strong password', () => {
  expect(isStrongPassword('HeLlOWoRlD134_')).toBe(true);
});


test('HelloWorld is not a date', () => {
  expect(isDate('HelloWorld')).toBe(false);
});
test('1234 is not a date', () => {
  expect(isDate(1234)).toBe(false);
});
test('12/16/2025 is a date', () => {
  expect(isDate('12/16/2025')).toBe(true);
});
test('6/1/2005 is a date', () => {
  expect(isDate('6/1/2005')).toBe(true);
});


test('tung tung tung sahur is not a hex color', () => {
  expect(isHexColor('tung tung tung sahur')).toBe(false);
});
test('triple t is not a hex color', () => {
  expect(isHexColor('triple t')).toBe(false);
});
test('FF00FF is a hex color', () => {
  expect(isHexColor('FF00FF')).toBe(true);
});
test('111 is a hex color', () => {
  expect(isHexColor('111')).toBe(true);
});