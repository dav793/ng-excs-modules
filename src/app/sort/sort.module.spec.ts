import { SortModule } from './sort.module';

describe('SortModule', () => {
  let sortModule: SortModule;

  beforeEach(() => {
    sortModule = new SortModule();
  });

  it('should create an instance', () => {
    expect(sortModule).toBeTruthy();
  });
});
