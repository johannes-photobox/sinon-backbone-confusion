var chai = require('chai');
chai.should();
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

var Backbone = require('backbone');
var sinon = require('sinon');

var MyModel = Backbone.Model.extend({

  initialize: function() {
    this.on('foo', this.bar);
  },

  bar: function() {
    console.log('bar called');
  }

});

describe("Model", function() {
  it('should run initialize', function() {
    var model = new MyModel();

    // var spy = sinon.spy(model, 'bar');
    var spy = sinon.spy(MyModel.prototype, 'bar');

    model.trigger('foo');
    spy.should.have.been.called;
  });
});

