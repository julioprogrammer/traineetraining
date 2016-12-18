import yadda from '../../helpers/yadda';

export default function(assert) {
  return yadda.localisation.English.library()
    .given('I am in screen home', function(next) {
      visit('/home');
      assert.ok(true, this.step);
      next();
    })
    .when('I visualize emberjs button training and click', function(next) {
      click('#btn_emberjs');
      assert.ok(true, this.step);
      next();
    })
    .then('I enter in screen training emberjs', function(next) {
      visit('/emberjs');
      assert.ok(true, this.step);
      next();
    });
}
