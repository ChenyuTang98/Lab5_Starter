// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhoneNumber tests 
test('check if phone number True 1', () => {
  expect(isPhoneNumber('(858)-123-4567')).toBe(true);
});

test('check if phone number True 2', () => {
  expect(isPhoneNumber('(123)-123-1233')).toBe(true);
});

test('check if phone number False 1', () => {
  expect(isPhoneNumber('(1231231233)')).toBe(false);
});

test('check if phone number False 2', () => {
  expect(isPhoneNumber('qwwqw223')).toBe(false);
});

//isEmail tests
test('email True 1', () => {
  expect(isEmail('abc@gmail.com')).toBe(true);
});

test('email True 2', () => {
  expect(isEmail('a@x.com')).toBe(true);
});

test('email False 1', () => {
  expect(isEmail('abcgmail.com')).toBe(false);
});

test('email False 2', () => {
  expect(isEmail('@@@@@@@')).toBe(false);
});

//isStrongPassword tests
test('strong password True 1', () => {
  expect(isStrongPassword('aBc24err')).toBe(true);
});

test('strong password True 2', () => {
  expect(isStrongPassword('bb222cdcdcdc')).toBe(true);
});

test('strong password False 1', () => {
  expect(isStrongPassword('AAAA123123213213')).toBe(false);
});

test('strong password False 2', () => {
  expect(isStrongPassword('23132321323232131321321321321')).toBe(false);
});

//test isDate
test('isDate True 1', () => {
  expect(isDate('06/04/2003')).toBe(true);
});

test('isDate True 2', () => {
  expect(isDate('12/05/2000')).toBe(true);
});

test('isDate False 1', () => {
  expect(isDate('12/2/23')).toBe(false);
});

test('isDate False 2', () => {
  expect(isDate('123/23/2323')).toBe(false);
});

//test isColor

test('isHexColor True 1', () => {
  expect(isHexColor('#aB3')).toBe(true);
});

test('isHexColor True 2', () => {
  expect(isHexColor('#808080')).toBe(true);
});

test('isHexColor False 1', () => {
  expect(isHexColor('#asasa')).toBe(false);
});

test('isHexColor False 2', () => {
  expect(isHexColor('#1231232')).toBe(false);
});