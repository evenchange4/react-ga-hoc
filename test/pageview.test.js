import React from 'react';
import test from 'ava';
import { mount } from 'enzyme';
import reactGAHoc, { pageview } from '../src/index';

test('should return a object', (t) => {
  t.is(typeof reactGAHoc, 'object');
});

test('should contain pageview function', (t) => {
  t.is(typeof reactGAHoc.pageview, 'function');
});

test('should handle SGA DK setup error', (t) => {
  const Container = pageview()(() => <div />);

  try {
    mount(<Container />);
  } catch (e) {
    t.is(
      e.message,
      'Please Setup the GA SDK: https://github.com/react-ga/react-ga',
    );
  }
});
