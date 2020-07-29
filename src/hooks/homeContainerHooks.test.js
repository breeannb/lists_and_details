import { renderHook, act } from '@testing-library/react-hooks';
import { useCharacterList } from './homeContainerHooks';

jest.mock('../services/getAvatarCharactersList', () => ({
  getAvatarCharactersList() {
    return Promise.resolve(
      [{ name: 'Appa', photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/6/65/Appa_flying.png/revision/latest?cb=20140517110636', page: '1' }],
    );
  }
}));

describe('useCharacterList hook', () => {
  
  it('it has characters state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useCharacterList());
      return waitFor(() => {
        expect(result.current.characters).not.toBeUndefined();
      });  
    });
  }); 
  
});
