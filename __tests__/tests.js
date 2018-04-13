const selectBusiness = id => {
  return {
      type: 'SELECT_BUSINESS',
      id
  }
}

describe('selectBusiness', () => {
  describe('when given a business id', () => {
    it('creates an action creator object', () => {
      
    });
  });
});
test('given an id, selectBusiness produces an action creator object', () => {
  const id = 4;
  const obj = selectBusiness(id);
  expect(obj.type).toEqual('SELECT_BUSINESS');
  expect(obj.id).toEqual(4);
});