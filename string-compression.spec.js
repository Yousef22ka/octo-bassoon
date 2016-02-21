/**
 * Created by matt on 2/21/16.
 */

'use strict';

const compressor = require('./string-compression');

describe('The StringCompressor', ()=> {
  it('returns an empty string if passed an empty string', ()=> {
    expect(compressor('')).toEqual('');
  })

  it('throws if passed a null or undefined argument', ()=> {
    var test1 = () => compressor();
    var test2 = () => compressor(null);
    var test3 = () => compressor(undefined);
    expect(test1).toThrow();
    expect(test2).toThrow();
    expect(test3).toThrow();
  });

  it('throws if passed non-alphabetic characters', ()=>{
    var test1 = () => compressor('abc1');
    var test2 = () => compressor('abc ');
    var test3 = () => compressor('abc*');
    expect(test1).toThrow();
    expect(test2).toThrow();
    expect(test3).toThrow();
  });

  it('returns the same string if no compression is possible', ()=> {
    expect(compressor('abc')).toEqual('abc');
  });

  it('returns the correct count for a single repeated letter', ()=> {
    expect(compressor('aaa')).toEqual('a3');
  });

  it('returns the correct count for a two repeated letters', ()=> {
    expect(compressor('aaabbb')).toEqual('a3b3');
  });

  it('returns the correct count for many repeated letters', ()=>{
    expect(compressor('aaabbc')).toEqual('a3b2c');
  });

  it('returns the correct count for other sets of many repeated letters', ()=>{
    expect(compressor('aaabccccccdeef')).toEqual('a3bc6de2f');
  });

  it('works for different capitalization', ()=>{
    expect(compressor('Aabc')).toEqual('Aabc');
  });

});