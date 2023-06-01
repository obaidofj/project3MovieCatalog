





function getLargestID(objects) {
    if (objects.length === 0) {
      return null;
    }
    const largestIDObj = objects.reduce((prev, curr) => {
      return curr.id > prev.id ? curr : prev;
    });
  
    return largestIDObj;
  }
  
  function isValidDate(vr) {
    // as any date between 1-1-2000 to 31-12-2099
    let dateRegex = /^\d{1,2}\/\d{1,2}\/(20[0-9]{2}|2099)$/;
  
    if (dateRegex.test(vr)) {
      return true;
    } else {
      return false;
    }
  }
  
  function isValidInput (inp) {
    let wrdRegex = /\w{3,}/;
  
    if (wrdRegex.test(inp)) {
      return true;
    } else {
      return false;
    }
  }
  
  function toDate(dString) {
    const [day, month, year] = dString.split("/");
    return new Date(`${year}-${month}-${day}`).getTime();
  }
  
  async function  enterValidID(arOfObjects){
    let elInd='';
  
    
    while (true) {
      let tid = -1;
      let elInd = '';
    
     
        tid = await input.takeInput();
     
    
        arOfObjects.forEach((element, ind) => {
          if (element["id"] === parseInt(tid)) {
            elInd = ind;
            return;
          }
        });
    
  
    
        if (elInd === '') {
          console.log(`There is no task with ID: ${tid}. Please enter a valid task ID.`);
        } else 
        return elInd;
    } 
  
  
  }
  