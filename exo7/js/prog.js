 function addDays(day) {
    var result = new Date(day);
      result.setDate(result.getDate() + 7);
    return result;
  }
  
  var day = new Date();
  
  alert(addDays(day));