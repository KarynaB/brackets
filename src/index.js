module.exports = function check(str, bracketsConfig) 
{

  let check, str_2;

 do{
    check = false;

    bracketsConfig.forEach(function(item) {
      str_2 = item.join('');

      if (str.includes(str_2)) {
        str = str.replace(str_2, '');
        check = true;
      }
      
    });
  } while (check)

  if (!str.length) return true;
    else return false;
}

