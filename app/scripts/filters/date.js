/**
 * Created by a545703 on 12/30/14.
 */
app.filter('formatDate', function() {
  return function(time) {
    var filteredDate =  new Date(time);
    return filteredDate.toString();
  }
})
