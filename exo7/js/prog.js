Date.prototype.addDays = function() {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return days;
  }
  
  var dat = new Date();
  
  alert(dat.addDays())